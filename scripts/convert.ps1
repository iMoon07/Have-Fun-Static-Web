$images = Get-ChildItem -Path public/images -Filter *.png
foreach ($img in $images) {
    $out = "public/images/$($img.BaseName).webp"
    Write-Host "Converting: $($img.Name) -> $($img.BaseName).webp"
    npx -y sharp-cli -i $img.FullName -o $out
}
