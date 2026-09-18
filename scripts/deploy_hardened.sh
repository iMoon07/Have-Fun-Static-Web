#!/bin/bash
# ==============================================================================
# 🛡️ GASS-DEPLOY (Hardened Edition) - Universal Tactical Tool
# ==============================================================================
set -e # Safety Lock

CONFIG_FILE=".gass-deploy.conf"
MAX_BACKUPS=5

validate_path() {
    local path=$1
    if [[ "$path" == "/" || "$path" == "/root" || "$path" == "/home" || "$path" == "/etc" ]]; then
        echo "❌ SECURITY ALERT: Restricted Path! Aborted."
        exit 1
    fi
}

if [ ! -f "$CONFIG_FILE" ]; then
    echo "🛡️ INITIALIZING GASS-DEPLOY..."
    read -p "❓ Web Root (e.g., /var/www/penjelajah): " WEB_ROOT
    read -p "❓ Source Path (e.g., /home/user/source): " SOURCE_ROOT
    validate_path "$WEB_ROOT"
    validate_path "$SOURCE_ROOT"
    echo "WEB_ROOT=\"$WEB_ROOT\"" > "$CONFIG_FILE"
    echo "SOURCE_ROOT=\"$SOURCE_ROOT\"" >> "$CONFIG_FILE"
fi

source "$CONFIG_FILE"

if [ -z "$1" ] || [ ! -f "$1" ]; then
    echo "❌ ERROR: Target ZIP not found."
    exit 1
fi

TEMP_DIR="/tmp/gass_$(date +%s)"
mkdir -p "$TEMP_DIR" && unzip -q "$1" -d "$TEMP_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
DEPLOY_SRC=$([ -d "$TEMP_DIR/dist" ] && echo "$TEMP_DIR/dist" || echo "$TEMP_DIR")

echo "⚡ Switching to New Version..."
sudo cp -r "$DEPLOY_SRC" "${WEB_ROOT}_new"
[ -d "$WEB_ROOT" ] && sudo mv "$WEB_ROOT" "${WEB_ROOT}_old_$TIMESTAMP"
sudo mv "${WEB_ROOT}_new" "$WEB_ROOT"

echo "🧹 Cleaning up old backups..."
(ls -rd ${WEB_ROOT}_old_* 2>/dev/null | tail -n +$((MAX_BACKUPS+1)) | xargs sudo rm -rf) || true

echo "🛡️ Fixing Permissions..."
WEB_USER=$(ps aux | grep -E '[a]pache|[n]ginx' | grep -v root | head -1 | cut -d\  -f1)
[ -z "$WEB_USER" ] && WEB_USER="www-data"
sudo chown -R $WEB_USER:$WEB_USER "$WEB_ROOT"
sudo chmod -R 755 "$WEB_ROOT"

sudo systemctl reload apache2 || sudo systemctl reload nginx || true
rm -rf "$TEMP_DIR"
echo "✅ MISSION_SUCCESSFUL. System is LIVE."
