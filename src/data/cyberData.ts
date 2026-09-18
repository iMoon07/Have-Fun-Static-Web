import {
  Target,
  Cpu,
  DoorOpen,
  Terminal,
  Anchor,
  ArrowUpCircle,
  Shield,
  ShieldCheck,
  Search,
  MoveRight,
  Database,
  Radio,
  Share2,
  Bomb
} from 'lucide-react';
import type { Student, OwaspItem, MitreTactic, FaqItem, NavItem, SystemStat } from '../types';

export const students: Student[] = [
  {
    name: "RAJA MUHAMMAD KURNIA SETYAWAN",
    img: "https://unavatar.io/linkedin/imoon07",
    linkedinUrl: "https://www.linkedin.com/in/imoon07/",
    role: "COMMANDER"
  }
];

export const owaspData: OwaspItem[] = [
  { id: "A01", category: "Broken Access Control", cwes: 40, prevalence: "3.73%", risk: "Critical" },
  { id: "A02", category: "Security Misconfiguration", cwes: 16, prevalence: "3.00%", risk: "High" },
  { id: "A03", category: "Software Supply Chain Failures", cwes: 5, prevalence: "Low", risk: "Moderate" },
  { id: "A04", category: "Cryptographic Failures", cwes: 32, prevalence: "3.80%", risk: "Critical" },
  { id: "A05", category: "Injection", cwes: 38, prevalence: "High", risk: "High" },
  { id: "A06", category: "Insecure Design", cwes: 36, prevalence: "Moderate", risk: "Moderate" },
  { id: "A07", category: "Authentication Failures", cwes: 36, prevalence: "Moderate", risk: "High" },
  { id: "A08", category: "Software or Data Integrity Failures", cwes: 5, prevalence: "Moderate", risk: "High" },
  { id: "A09", category: "Logging & Alerting Failures", cwes: 5, prevalence: "Moderate", risk: "High" },
  { id: "A10", category: "Mishandling of Exceptional Conditions", cwes: 24, prevalence: "New", risk: "Moderate" }
];

export const mitreTactics: MitreTactic[] = [
  { name: "Reconnaissance", icon: Target, techniques: ["Active Scanning", "Gather Victim Host Info", "Gather Identity Info", "Gather Network Info", "Gather Org Info", "Phishing for Info", "Search Open Tech DBs", "Search Open Websites", "Search Threat Vendor Data"] },
  { name: "Resource Development", icon: Cpu, techniques: ["Acquire Infrastructure", "Compromise Accounts", "Compromise Infra", "Develop Capabilities", "Establish Accounts", "Obtain Capabilities", "Stage Capabilities"] },
  { name: "Initial Access", icon: DoorOpen, techniques: ["Drive-by Compromise", "Exploit Public-Facing App", "External Remote Services", "Hardware Additions", "Phishing", "Removable Media", "Supply Chain Compromise", "Trusted Relationship", "Valid Accounts"] },
  { name: "Execution", icon: Terminal, techniques: ["CLI Interpreter", "Cloud Administration", "Deploy Container", "ESXi Administration", "Exploitation for Client", "Inter-Process Comm", "Native API", "Scheduled Task/Job", "System Services", "User Execution", "WMI"] },
  { name: "Persistence", icon: Anchor, techniques: ["Account Manipulation", "BITS Jobs", "Boot or Logon Autostart", "Boot or Logon Init Scripts", "Cloud App Integration", "Compromise Host Software", "Create Account", "Create or Modify Process", "Event Triggered Execution", "External Remote Services", "Hijack Execution Flow", "Modify Auth Process", "Office App Startup", "Pre-OS Boot", "Scheduled Task/Job", "Server Software Component", "Traffic Signaling", "Valid Accounts"] },
  { name: "Privilege Escalation", icon: ArrowUpCircle, techniques: ["Abuse Elevation Control", "Access Token Mani", "Account Manipulation", "Boot or Logon Autostart", "Boot or Logon Init Scripts", "Create or Modify Process", "Domain Policy Mod", "Escape to Host", "Event Triggered Execution", "Exploitation for Priv Esc", "Hijack Execution Flow", "Process Injection", "Scheduled Task/Job", "Valid Accounts"] },
  { name: "Defense Evasion", icon: Shield, techniques: ["Abuse Elevation Control", "Access Token Mani", "BITS Jobs", "Build Image on Host", "Debugger Evasion", "Delay Execution", "Deobfuscate/Decode", "Deploy Container", "Direct Volume Access", "Domain Policy Mod", "Email Spoofing", "Execution Guardrails", "Exploitation for Def Evasion", "File Permissions Mod", "Hide Artifacts", "Hijack Execution Flow", "Impair Defenses", "Indicator Removal", "Indirect Command Exec", "Masquerading", "Modify Auth Process", "Modify Cloud Infra", "Modify System Image", "Network Boundary Bridging", "Obfuscated Files", "Plist File Mod", "Pre-OS Boot", "Process Injection", "Rootkit", "Subvert Trust Controls", "System Binary Proxy", "System Script Proxy", "Template Injection", "Traffic Signaling", "Use Alternate Auth", "Valid Accounts", "Virtualization Evasion", "Weaken Encryption", "XSL Script Processing"] },
  { name: "Credential Access", icon: ShieldCheck, techniques: ["Adversary-in-the-Middle", "Brute Force", "Credentials from Stores", "Exploitation for Cred Access", "Forced Authentication", "Forge Web Credentials", "Input Capture", "Modify Auth Process", "MFA Interception", "Network Sniffing", "OS Credential Dumping", "Steal App Access Token", "Steal Kerberos Tickets", "Steal Web Session Cookie", "Unsecured Credentials"] },
  { name: "Discovery", icon: Search, techniques: ["Account Discovery", "App Window Discovery", "Browser Info Discovery", "Cloud Infra Discovery", "Cloud Service Discovery", "Cloud Storage Discovery", "Container Discovery", "Debugger Evasion", "Device Driver Discovery", "Domain Trust Discovery", "File & Directory Discovery", "Group Policy Discovery", "Local Storage Discovery", "Log Enumeration", "Network Service Discovery", "Network Share Discovery", "Network Sniffing", "Password Policy Discovery", "Peripheral Device Discovery", "Permission Groups Discovery", "Process Discovery", "Query Registry", "Remote System Discovery", "Software Discovery", "System Info Discovery", "System Location Discovery", "System Network Config", "System Network Conn", "System Owner Discovery", "System Service Discovery", "System Time Discovery", "Virtual Machine Discovery"] },
  { name: "Lateral Movement", icon: MoveRight, techniques: ["Exploitation of Remote Services", "Internal Spearphishing", "Lateral Tool Transfer", "Remote Service Session Hijacking", "Remote Services", "Removable Media", "Software Deployment Tools", "Taint Shared Content", "Use Alternate Auth"] },
  { name: "Collection", icon: Database, techniques: ["Adversary-in-the-Middle", "Archive Collected Data", "Audio Capture", "Automated Collection", "Browser Session Hijacking", "Clipboard Data", "Data from Cloud Storage", "Data from Config Repo", "Data from Info Repo", "Data from Local System", "Data from Network Share", "Data from Removable Media", "Data Staged", "Email Collection", "Input Capture", "Screen Capture", "Video Capture"] },
  { name: "Command and Control", icon: Radio, techniques: ["Application Layer Protocol", "Removable Media", "Content Injection", "Data Encoding", "Data Obfuscation", "Dynamic Resolution", "Encrypted Channel", "Fallback Channels", "Hide Infrastructure", "Ingress Tool Transfer", "Multi-Stage Channels", "Non-Application Layer", "Non-Standard Port", "Protocol Tunneling", "Proxy", "Remote Access Tools", "Traffic Signaling", "Web Service"] },
  { name: "Exfiltration", icon: Share2, techniques: ["Automated Exfiltration", "Data Transfer Size Limits", "Exfiltration Over Alt Protocol", "Exfiltration Over C2 Channel", "Exfiltration Over Other Network", "Exfiltration Over Physical", "Exfiltration Over Web Service", "Scheduled Transfer", "Transfer to Cloud Account"] },
  { name: "Impact", icon: Bomb, techniques: ["Account Access Removal", "Data Destruction", "Data Encrypted for Impact", "Data Manipulation", "Defacement", "Disk Wipe", "Email Bombing", "Endpoint DoS", "Financial Theft", "Firmware Corruption", "Inhibit System Recovery", "Network DoS", "Resource Hijacking", "Service Stop", "System Shutdown/Reboot"] }
];

export const faqData: FaqItem[] = [
  {
    category: "NEW OPERATIVE",
    q: "Saya awam total, belum punya background IT. Bisa ikut ?",
    a: "Jelas sangat bisa. Penjelajah dirancang untuk membangun insting Anda dari nol. Tidak ada teori membosankan, kita langsung 'meraba' log investigasi sesungguhnya. Teori saya jelaskan saat Anda sedang beraksi.",
    talk: "Logika deteksi yang tajam bisa kita latih bersama dari titik nol."
  },
  {
    category: "CAREER OPS",
    q: "Cocok untuk saya yang mau Switch Career?",
    a: "Sangat cocok. Penambahan jam terbang di sini akan mempermanis sertifikat Anda dan memperkuat flow Anda dalam menangani insiden nyata. Anda membangun rasa percaya diri sebelum terjun ke dunia profesional.",
    talk: "Sertifikat adalah bukti belajar, jam terbang di sini adalah bekal Anda agar selalu SIAP TEMPUR."
  },
  {
    category: "OPERATIONAL",
    q: "Saya sudah kerja di SOC tapi lagi sepi incident. Kenapa harus ikut?",
    a: "Pekerjaan SOC ada ritmenya. Penjelajah hadir menjaga 'Muscle Memory' Anda tetap tajam. Anda tetap bisa asah alur investigasi menengah bersama Commander agar selalu siap siaga kapan pun dibutuhkan.",
    talk: "Kesiapsiagaan adalah kunci utama seorang analis profesional."
  },
  {
    category: "OPERATIONAL",
    q: "Apakah harga 250rb ini Permanent atau Per Bulan?",
    a: "Sekali bayar untuk akses selamanya (Permanent). Tanpa biaya langganan. Sekali bergabung, Anda menjadi bagian dari Squadron Penjelajah dengan dukungan penuh dari Commander.",
    talk: "Fokus pada penguasaan materi adalah prioritas utama kami."
  },
  {
    category: "FIELD SUPPORT",
    q: "Apakah ada dukungan jika saya bingung?",
    a: "Full support. Admin aktif selalu untuk membantu Anda. Kita tidak cuma belajar, tapi sharing pengalaman. Feel free to sharing apapun kendala teknis maupun non-teknis Anda.",
    talk: "Komunikasi terbuka memastikan Anda tidak pernah tertinggal di medan tempur."
  },
  {
    category: "TECHNICAL",
    q: "Apakah ini seperti CTF (Capture The Flag)?",
    a: "Tidak. Fokus utama kita adalah membangun insting (feeling) Anda dalam membaca pola log langsung. Anda dilatih untuk 'merasakan' anomali di tengah ribuan data.",
    talk: "Melihat pola log adalah seni; insting yang tajam adalah senjata terkuat Anda."
  },
  {
    category: "TECHNICAL",
    q: "Apakah saya perlu install software berat?",
    a: "Tidak perlu. Cukup browser. Semua interaktif di infrastructure kami. Teori dijelaskan langsung saat praktek.",
    talk: "Fokus pada analisis, infrastruktur biar kami yang urus."
  },
  {
    category: "CAREER OPS",
    q: "Saya Fresh Graduate, apa untungnya ikut ini?",
    a: "Keunggulan Anda adalah jam terbang praktis. Anda terbiasa menangani case nyata (Windows, Linux, Web) yang dibimbing langsung, sehingga siap kerja di hari pertama.",
    talk: "Kesiapan teknis dan mental adalah standar yang kami bangun di Penjelajah."
  },
  {
    category: "FIELD SUPPORT",
    q: "Aman untuk laptop saya?",
    a: "Sangat aman. Seluruh simulasi berjalan di lingkungan virtual (Sandbox) yang terisolasi dari perangkat Anda.",
    talk: "Sistem kami dirancang untuk keamanan maksimal bagi seluruh operatif."
  }
];

export const navigation: NavItem[] = [
  { name: "HOME", id: "home" },
  { name: "PORTFOLIO", id: "portfolio" },
  { name: "MISSIONS", id: "missions" },
  { name: "BRIEFING", id: "briefing" },
  { name: "ROLES", id: "roles" },
  { name: "METHODOLOGY", id: "methodology" },
  { name: "HALL OF FAME", id: "hall-of-fame" },
  { name: "FAQ", id: "faq" },
  { name: "COMMANDER", id: "commander" }
];

export const systemStats: SystemStat[] = [
  { label: "UPTIME", value: "99.9%", status: "online" },
  { label: "SOC_LOAD", value: "NOMINAL", status: "stable" },
  { label: "ENCRYPTION", value: "AES-512", status: "secure" }
];

export const rolesData = [
  {
    id: "BT",
    title: "MISSION PACK: ALPHA-100",
    price: "250",
    isPro: true,
    features: [
      "Permanent Role Access",
      "Interactive Sandbox Simulation",
      "Full Wazuh SOC Dashboard Visualization",
      "100+ Tactical Investigation Cases",
      "Live Incident Drills (Commander-Led)",
      "Direct Commander Guidance (Zero to Hero)",
      "Blue Team Certification Support",
      "Community Command Discord"
    ]
  }
];

export const missionCategories = [
  {
    id: "WINT",
    label: "WINDOWS INTEL",
    count: "01-100",
    cases: "Log_Source: EventViewer_2025; Focus: Identity_Protection; Logic: RDP_Guard_Active; Parameters: [AD_Login, Auth_Triage, Persistence_Seeker]",
    icon: "/images/windows_tactical_logo.webp",
    description: "Sektor utama pertahanan endpoint dan identitas pada ekosistem Windows Server 2025. Monitoring login RDP dan deteksi anomali Active Directory."
  },
  {
    id: "LINC",
    label: "LINUX CORE_OPS",
    count: "101-150",
    cases: "Source: Auditd_Kernel; Focus: Priv_Esc_Mitigation; Logic: SSH_Brute_Kill; Parameters: [Sudo_Abuse, Crontab_Watch, Auth_Log_Forensics]",
    icon: "/images/linux_tactical_logo.webp",
    description: "Pengamanan core kernel dan akses administratif pada infrastruktur Linux. Fokus pada audit sistem dan eliminasi vektor serangan brute-force."
  },
  {
    id: "WEBA",
    label: "WEB APP_SENTRY",
    count: "151-200",
    cases: "Source: Apache/Nginx_Live; Focus: Injection_Defense; Logic: WAF_Triage; Parameters: [SQLi_Hunter, XSS_Payload_Analysis, Access_Anomaly]",
    icon: "/images/web_tactical_logo.webp",
    description: "Deteksi ancaman level aplikasi dan analisis log web server. Mitigasi serangan injeksi dan perlindungan gerbang aplikasi secara real-time."
  },
  {
    id: "DBRE",
    label: "DATABASE RELAY",
    count: "201-230",
    cases: "Source: MySQL/Postgres_Audit; Focus: Injection_Forensics; Logic: Data_Exfil_Seeker; Parameters: [Slow_Query_Analysis, Unauthorized_Access, DB_Hardening]",
    icon: "/images/database_tactical_logo.webp",
    description: "Sektor perlindungan data inti. Monitoring query database, deteksi SQL Injection level lanjut, dan audit akses data sensitif."
  },
  {
    id: "NETB",
    label: "NETWORK BARRIER",
    count: "231-250",
    cases: "Source: Firewall/VPN_Traffic; Focus: Lateral_Movement; Logic: Traffic_Anomaly; Parameters: [Port_Scan_Detection, VPN_Triage, Malicious_Packet_Filter]",
    icon: "/images/network_tactical_logo.webp",
    description: "Pertahanan perimeter dan analisis lalu lintas jaringan. Monitoring anomali trafik, deteksi pindaian port, dan pengamanan akses VPN."
  },
  {
    id: "DFIR",
    label: "DIGITAL FORENSICS",
    count: "251-300",
    cases: "Source: Memory/Disk_Image; Focus: Artifact_Analysis; Logic: Timeline_Reconstruction; Parameters: [Memory_Forensics, Prefetch_Analysis, MFT_Explorer]",
    icon: "/images/forensics_tactical_logo.webp",
    description: "Sektor investigasi pasca-insiden. Analisis artefak sistem, rekonstruksi timeline serangan, dan preservasi bukti digital untuk pelaporan insiden."
  }
];

export const heroAvatars = [
  "/images/student_1.webp",
  "/images/student_2.webp",
  "/images/student_3.webp",
  "/images/student_4.webp"
];

export const briefingData = [
  {
    id: "BR1",
    tech: "RDP Brute Force spikes detected on Sector 01.",
    exec: "Upaya akses ilegal aktif pada server Windows. Risiko penipuan identitas terdeteksi. Sistem pertahanan dalam kondisi waspada tinggi (Orange).",
    priority: "HIGH"
  },
  {
    id: "BR2",
    tech: "SQLi attempt on target: /api/v1/auth.",
    exec: "Percobaan pencurian data nasabah sedang berlangsung. Kami telah mengaktifkan WAF dan mengisolasi database untuk mencegah kebocoran.",
    priority: "CRITICAL"
  },
  {
    id: "BR3",
    tech: "Kernel Auditd triggered on Sudo Abuse.",
    exec: "Eksploitasi hak istimewa terdeteksi pada infrastruktur Linux. Kami sedang melakukan pemulihan akses administratif dan audit investigasi.",
    priority: "MEDIUM"
  }
];

export const dossierData = [
  {
    id: 'WZ-LOG-01',
    title: 'WAZUH EVENT & LOG',
    type: 'FOLDER',
    tag: 'VERIFIED',
    url: 'https://drive.google.com/drive/folders/1ZQrcTuXqepEuD7Wl5B0a6MYOhbuIdZw4?usp=drive_link'
  },
  {
    id: 'DOC-SYS-07',
    title: 'DOKUMENTASI',
    type: 'FOLDER',
    tag: 'SECURED',
    url: 'https://drive.google.com/drive/folders/1xpmazzkTo_K0VQv0PB2g87iD3ESAycpM?usp=drive_link'
  },
  {
    id: 'AGNT-WZ-W',
    title: 'AGENT WAZUH WINDOWS',
    type: 'FOLDER',
    tag: 'AUDIT_PASS',
    url: 'https://drive.google.com/drive/folders/13p4UEGsPWvOOTMFqbXlXwqpiIC75-58T?usp=drive_link'
  },
  {
    id: 'CASE-01-RDP',
    title: 'CASE-01: RDP BRUTEFORCE',
    type: 'FILE',
    tag: 'CRITICAL',
    url: 'https://drive.google.com/file/d/1HwTJCkHBoiUREAEKO33QUDlk0SonIeY1/view?usp=drive_link'
  }
];

