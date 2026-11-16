import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronLeft, i as ChevronRight, n as Play, r as Pause } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7FAO8bY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-sm border font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/40 disabled:pointer-events-none disabled:opacity-40 min-h-11 px-4 text-sm", {
	variants: { variant: {
		solid: "border-cyan bg-cyan text-panel hover:bg-cyan/90",
		ghost: "border-line bg-panel text-fg hover:border-fg/40",
		quiet: "border-transparent bg-transparent text-muted hover:text-fg"
	} },
	defaultVariants: { variant: "ghost" }
});
function Button({ className, variant, asChild, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({ variant }), className),
		type,
		...props
	});
}
var MILESTONES = [
	{
		"month": 11,
		"day": 4,
		"year": 1998,
		"category": "NETZWERK & DNS",
		"title": "Offizielle Eintragung der ICANN – Globale Koordination von DNS & IP-Adressen",
		"description": "Am 4. November 1998 wird die Internet Corporation for Assigned Names and Numbers (ICANN) in Kalifornien offiziell als gemeinnützige Körperschaft eingetragen. Sie übernimmt die Verwaltung der IP-Adressräume (IANA), der Root-Nameserver und des Domain Name Systems (DNS).",
		"context": "Ohne die zentrale Koordination von AS-Nummern, IPv4/IPv6-Subnetzblöcken und Top-Level-Domains durch die ICANN wäre kein eindeutiges Routing im heutigen Internet möglich.",
		"articleTitle": "ICANN",
		"tags": [
			"ICANN",
			"DNS",
			"IANA",
			"IPv4 / IPv6",
			"Root-Server"
		]
	},
	{
		"month": 11,
		"day": 4,
		"year": 1952,
		"category": "IT-SECURITY & KRYPTO",
		"title": "Gründung der NSA – Beginn der computergestützten Kryptoanalyse & Supercomputer-Ära",
		"description": "Mit der formellen Gründung der National Security Agency am 4. November 1952 entsteht das weltweit größte Forschungszentrum für Chiffriertechnik. Die Behörde wird zum wichtigsten Erstauftraggeber für frühe Transistor-Supercomputer wie IBM Stretch/Harvest.",
		"context": "Aus der kryptographischen Forschung seit 1952 gingen moderne Standards wie der Data Encryption Standard (DES), die SHA-2-Hash-Familie sowie SELinux (Security-Enhanced Linux) hervor.",
		"articleTitle": "National_Security_Agency",
		"tags": [
			"Kryptographie",
			"SHA-2",
			"SELinux",
			"Supercomputing"
		]
	},
	{
		"month": 11,
		"day": 4,
		"year": 2010,
		"category": "HARDWARE & SENSORIK",
		"title": "Microsoft startet Kinect – Echtzeit-3D-Tiefensensorik & Machine-Learning-Tracking",
		"description": "Am 4. November 2010 bringt Microsoft das Kamerasystem Kinect auf den Markt. Über einen Infrarot-Punktprojektor und einen CMOS-Tiefensensor berechnet das System in Echtzeit ein 3D-Tiefenbild und erkennt Körpergelenke per Machine Learning.",
		"context": "Durch offene Linux-Treiber (libfreenect) wurde die Kinect schnell zum Standard-3D-Sensor in der Robotik (ROS), der autonomen Navigation und der Computer-Vision-Ausbildung.",
		"articleTitle": "Kinect",
		"tags": [
			"Computer Vision",
			"3D-Sensorik",
			"Machine Learning",
			"Robotik"
		]
	},
	{
		"month": 11,
		"day": 4,
		"year": 2003,
		"category": "OPERATING SYSTEMS",
		"title": "Release-Woche von Fedora Core 1 („Yarrow“) – Neue Community-Basis für Enterprise Linux",
		"description": "Nach der Einstellung des klassischen Red Hat Linux startet Anfang November 2003 das Fedora-Projekt mit Fedora Core 1 (Kernel 2.4.22). Es bildet fortan den innovativen Open-Source-Unterbau für Red Hat Enterprise Linux (RHEL).",
		"context": "Fedora ist bis heute das Testfeld für zentrale Linux-Technologien wie systemd, Wayland, PipeWire, Podman und NetworkManager, bevor diese in Enterprise-Server einfließen.",
		"articleTitle": "Fedora_(Linux-Distribution)",
		"tags": [
			"Fedora",
			"Linux",
			"Red Hat",
			"RPM",
			"Open Source"
		]
	},
	{
		"month": 11,
		"day": 4,
		"year": 1998,
		"category": "IT-SECURITY & KRYPTO",
		"title": "RFC 2451 definiert Blockchiffren-Architektur für verschlüsselte IPsec-VPNs",
		"description": "Im November 1998 verabschiedet die IETF Network Working Group mit RFC 2451 den Standard für den Einsatz moderner CBC-Blockchiffren im IPsec Encapsulating Security Payload (ESP) zur Absicherung von IP-Paketen auf Schicht 3.",
		"context": "IPsec ESP bildet bis heute auf Firewalls (z. B. OPNsense, pfSense, Cisco, Fortinet) das Rückgrat für verschlüsselte Site-to-Site-Standortverbindungen über das öffentliche Internet.",
		"articleTitle": "IPsec",
		"tags": [
			"IPsec",
			"RFC 2451",
			"VPN",
			"OSI Layer 3",
			"Verschlüsselung"
		]
	},
	{
		"month": 11,
		"day": 4,
		"year": 2013,
		"category": "LINUX & CONTAINER",
		"title": "Durchbruch für Linux-Container: Docker öffnet Unterstützung für alle großen Distributionen",
		"description": "Im Herbst 2013 wandelt sich Docker von einem internen PaaS-Werkzeug zum universellen Container-Standard und integriert Anfang November 2013 neben Ubuntu/Debian auch Unterstützung für den gesamten Red-Hat- und Fedora-Kosmos.",
		"context": "Container-Virtualisierung über Linux Namespaces und cgroups hat die Bereitstellung von Web-Apps, lokalen KI-Stacks (Ollama, Open WebUI) und Microservices revolutioniert.",
		"articleTitle": "Docker_(Software)",
		"tags": [
			"Docker",
			"Container",
			"Linux cgroups",
			"DevOps"
		]
	},
	{
		"month": 11,
		"day": 1,
		"year": 1992,
		"category": "NETZWERK & DNS",
		"title": "Start von Mosaic-Entwicklung am NCSA – Das Web erhält ein grafisches Gesicht",
		"description": "Im November 1992 beginnen Marc Andreessen und Eric Bina am National Center for Supercomputing Applications (NCSA) mit der Programmierung des Webbrowsers Mosaic, der erstmals Bilder direkt im Fließtext darstellen kann.",
		"context": "NCSA Mosaic legte die Grundlage für Netscape Navigator, Mozilla Firefox und die grafische Darstellung moderner Web-Applikationen.",
		"articleTitle": "NCSA_Mosaic",
		"tags": [
			"Mosaic",
			"Webbrowser",
			"HTML",
			"WWW"
		]
	},
	{
		"month": 11,
		"day": 2,
		"year": 1988,
		"category": "IT-SECURITY & KRYPTO",
		"title": "Der Morris-Wurm legt rund 10 % des gesamten damaligen ARPANET/Internets lahm",
		"description": "Am 2. November 1988 startet Robert Tappan Morris den ersten großen Internet-Wurm. Er nutzt Pufferüberläufe in fingerd sowie Schwachstellen in sendmail und rsh/rexec aus und infiziert rund 6.000 UNIX-Rechner.",
		"context": "Der Vorfall führte unmittelbar zur Gründung des ersten CERT (Computer Emergency Response Team) und machte Buffer-Overflow-Schutz zu einer Kerndisziplin der IT-Sicherheit.",
		"articleTitle": "Morris-Wurm",
		"tags": [
			"Morris-Wurm",
			"Buffer Overflow",
			"CERT",
			"IT-Security"
		]
	},
	{
		"month": 11,
		"day": 3,
		"year": 1971,
		"category": "OPERATING SYSTEMS",
		"title": "Ken Thompson und Dennis Ritchie veröffentlichen das erste „UNIX Programmer’s Manual“",
		"description": "Am 3. November 1971 erscheint in den Bell Laboratories die erste offizielle Dokumentation für UNIX First Edition (geschrieben für die PDP-11). Konzepte wie `fork()`, hierarchische Dateisysteme und `chmod` werden hier definiert.",
		"context": "Fast jedes moderne Server-, Cloud- und Container-System (Linux, BSD, macOS) basiert direkt auf den Designprinzipien und Man-Pages von UNIX.",
		"articleTitle": "Unix",
		"tags": [
			"UNIX",
			"Bell Labs",
			"Ken Thompson",
			"Dennis Ritchie",
			"POSIX"
		]
	},
	{
		"month": 11,
		"day": 5,
		"year": 2007,
		"category": "OPERATING SYSTEMS",
		"title": "Google gründet die Open Handset Alliance und enthüllt Android als Open-Source-OS",
		"description": "Am 5. November 2007 stellt Google gemeinsam mit 33 Hardware- und Mobilfunkpartnern das Linux-basierte Betriebssystem Android vor, um eine offene Plattform für mobile Endgeräte zu schaffen.",
		"context": "Auf Basis eines angepassten Linux-Kernels entwickelte sich Android zum weltweit meistgenutzten Betriebssystem auf Smartphones, Tablets und Embedded-Systemen.",
		"articleTitle": "Android_(Betriebssystem)",
		"tags": [
			"Android",
			"Linux-Kernel",
			"Open Source",
			"Mobile OS"
		]
	},
	{
		"month": 11,
		"day": 6,
		"year": 1980,
		"category": "OPERATING SYSTEMS",
		"title": "Microsoft unterzeichnet den Vertrag mit IBM zur Entwicklung des PC-Betriebssystems (MS-DOS)",
		"description": "Am 6. November 1980 besiegeln IBM und Microsoft unter strengster Geheimhaltung („Project Chess“) den Vertrag über das Betriebssystem für den kommenden IBM PC 5150 – Microsoft behält sich dabei klugerweise die Lizenzrechte für Drittanbieter vor.",
		"context": "Die Trennung von standardisierter x86-Hardware und separat lizenziertem Betriebssystem schuf den offenen PC-Markt.",
		"articleTitle": "MS-DOS",
		"tags": [
			"MS-DOS",
			"IBM PC",
			"Microsoft",
			"x86-Historie"
		]
	},
	{
		"month": 11,
		"day": 7,
		"year": 1994,
		"category": "NETZWERK & DNS",
		"title": "Erster Live-Audiostream im Internet (WXYC überträgt per CU-SeeMe & Audio-Routing)",
		"description": "Am 7. November 1994 startet der Radiosender der University of North Carolina den weltweit ersten 24-Stunden-Echtzeit-Stream über das Internet und beweist die Machbarkeit von Echtzeit-Medienstreaming über TCP/IP.",
		"context": "Technischer Vorläufer heutiger Streaming-Protokolle wie WebRTC, HLS, DASH und moderner VoIP-/Videokonferenz-Architekturen.",
		"articleTitle": "Streaming_Media",
		"tags": [
			"Streaming",
			"TCP/IP",
			"Echtzeit-Audio",
			"Netzwerk"
		]
	},
	{
		"month": 11,
		"day": 8,
		"year": 1999,
		"category": "HARDWARE & CHIPS",
		"title": "NVIDIA veröffentlicht die GeForce 256 – Die erste „GPU“ mit Hardware-T&L",
		"description": "Im Herbst 1999 (Auslieferung ab Oktober/November 1999) führt NVIDIA mit der GeForce 256 den Begriff „Graphics Processing Unit“ (GPU) ein. Erstmals übernimmt der Grafikchip Transform- und Lighting-Berechnungen direkt in Hardware.",
		"context": "Die Auslagerung hochparalleler Vektor- und Matrixberechnungen auf die GPU legte das Fundament für modernes 3D-Rendering, CUDA und das Training heutiger KI-Modelle.",
		"articleTitle": "Nvidia_GeForce_256",
		"tags": [
			"NVIDIA",
			"GPU",
			"Grafikprozessor",
			"Parallelrechnen"
		]
	},
	{
		"month": 11,
		"day": 9,
		"year": 2004,
		"category": "SOFTWARE & CODE",
		"title": "Release von Mozilla Firefox 1.0 – Offene Webstandards brechen das IE6-Monopol",
		"description": "Am 9. November 2004 veröffentlicht die Mozilla Foundation Firefox 1.0. Mit Tabbed-Browsing, integriertem Pop-up-Blocker und strikter Einhaltung von W3C-Standards leitet Firefox die Ära moderner, sicherer Webbrowser ein.",
		"context": "Der Erfolg von Firefox sicherte ein offenes, herstellerunabhängiges Web und legte den Grundstein für moderne Entwicklerwerkzeuge im Browser.",
		"articleTitle": "Mozilla_Firefox",
		"tags": [
			"Firefox",
			"Mozilla",
			"Open Source",
			"Webstandards"
		]
	},
	{
		"month": 11,
		"day": 10,
		"year": 1983,
		"category": "IT-SECURITY & KRYPTO",
		"title": "Fred Cohen demonstriert auf einem VAX-11/750-System das erste akademische Computervirus",
		"description": "Am 10. November 1983 präsentiert Fred Cohen in einem Sicherheitsseminar an der Lehigh University ein selbstreplizierendes Programm unter UNIX, für das sein Doktorvater Len Adleman den Fachbegriff „Computervirus“ prägt.",
		"context": "Cohens Arbeit begründete die formale Erforschung von Malware-Erkennung, Integritätsprüfungen (Hashes) und Sandboxing.",
		"articleTitle": "Computervirus",
		"tags": [
			"Computervirus",
			"Fred Cohen",
			"IT-Security",
			"VAX/UNIX"
		]
	},
	{
		"month": 11,
		"day": 10,
		"year": 1983,
		"category": "OPERATING SYSTEMS",
		"title": "Microsoft kündigt in New York erstmals „Windows 1.0“ als grafische Oberfläche an",
		"description": "Ebenfalls am 10. November 1983 stellt Bill Gates im Plaza Hotel in New York Microsoft Windows als grafischen Aufsatz (Interface Manager) für MS-DOS mit kooperativem Multitasking und Maussteuerung vor.",
		"context": "Beginn der Windows-Produktlinie, die heute mit Windows 11 und Windows Server die Unternehmens-Clients und Active-Directory-Domänen dominiert.",
		"articleTitle": "Microsoft_Windows_1.0",
		"tags": [
			"Windows 1.0",
			"GUI",
			"Microsoft",
			"Betriebssysteme"
		]
	},
	{
		"month": 11,
		"day": 11,
		"year": 2006,
		"category": "HARDWARE & CHIPS",
		"title": "Sony veröffentlicht die PlayStation 3 mit Cell-Broadband-Engine & Linux-Support (OtherOS)",
		"description": "Am 11. November 2006 erscheint die PlayStation 3 mit dem von IBM, Sony und Toshiba entwickelten 8-Kern-Cell-Prozessor. Dank der Funktion „OtherOS“ bauen Forschungsinstitute wie das US Air Force Research Lab daraus Linux-Supercomputer-Cluster.",
		"context": "Eines der berühmtesten Beispiele für heterogenes Multicore-Computing und kosteneffizientes High-Performance-Clustering unter Linux.",
		"articleTitle": "PlayStation_3",
		"tags": [
			"Cell-Prozessor",
			"Linux-Cluster",
			"HPC",
			"Hardware"
		]
	},
	{
		"month": 11,
		"day": 14,
		"year": 1990,
		"category": "NETZWERK & DNS",
		"title": "Tim Berners-Lee und Robert Cailliau veröffentlichen das formale Konzept für das WorldWideWeb",
		"description": "Am 12./14. November 1990 formulieren Berners-Lee und Cailliau am CERN das offizielle Projektpapier für „WorldWideWeb“ und beginnen unmittelbar darauf auf einer NeXTcube-Workstation mit der Programmierung des ersten HTTP-Webservers `httpd`.",
		"context": "In diesem November-Meilenstein wurden die drei Kernsäulen des Webs festgelegt: URL (Adressierung), HTTP (Übertragung) und HTML (Darstellung).",
		"articleTitle": "World_Wide_Web",
		"tags": [
			"CERN",
			"HTTP",
			"HTML",
			"Tim Berners-Lee"
		]
	},
	{
		"month": 11,
		"day": 15,
		"year": 1971,
		"category": "HARDWARE & CHIPS",
		"title": "Intel veröffentlicht den Intel 4004 – Den weltweit ersten kommerziellen Mikroprozessor",
		"description": "Am 15. November 1971 bringt Intel den von Federico Faggin, Ted Hoff und Masatoshi Shima entwickelten 4-Bit-Prozessor 4004 auf den Markt. Auf einem einzigen Siliziumchip vereint er 2.300 Transistoren bei 740 kHz Taktrate.",
		"context": "Der Übergang von diskreten Schaltkreisen zur kompletten CPU auf einem einzigen Die (Monolithischer Mikroprozessor) leitete die gesamte Mikrocomputer-Revolution ein.",
		"articleTitle": "Intel_4004",
		"tags": [
			"Intel 4004",
			"Mikroprozessor",
			"CPU-Architektur",
			"Halbleiter"
		]
	},
	{
		"month": 11,
		"day": 17,
		"year": 1970,
		"category": "HARDWARE & CHIPS",
		"title": "Douglas Engelbart erhält das US-Patent 3,541,541 für die erste Computermaus",
		"description": "Am 17. November 1970 wird Douglas Engelbart das Patent für den „X-Y Position Indicator for a Display System“ erteilt – eine Holzschale mit zwei senkrecht zueinander stehenden Metallrädern zur Cursorsteuerung.",
		"context": "Gemeinsam mit grafischen Benutzeroberflächen (WIMP: Windows, Icons, Menus, Pointer) machte die Maus Computer für jedermann intuitiv bedienbar.",
		"articleTitle": "Computermaus",
		"tags": [
			"Douglas Engelbart",
			"Computermaus",
			"HCI",
			"Hardware"
		]
	},
	{
		"month": 11,
		"day": 20,
		"year": 1985,
		"category": "OPERATING SYSTEMS",
		"title": "Verkaufsstart von Microsoft Windows 1.01 in den USA",
		"description": "Am 20. November 1985 liefert Microsoft die erste kommerzielle Version von Windows 1.0 aus. Auf 16-Bit-x86-Rechnern bietet sie eine gekachelte Fensterverwaltung, Rechnungs- und Zeichenprogramme sowie Treiber für Grafikkarten und Mäuse.",
		"context": "Meilenstein auf dem Weg von der reinen Kommandozeile (MS-DOS) zur ereignisgesteuerten grafischen Benutzeroberfläche.",
		"articleTitle": "Microsoft_Windows_1.0",
		"tags": [
			"Windows 1.0",
			"Microsoft",
			"16-Bit",
			"GUI"
		]
	},
	{
		"month": 11,
		"day": 21,
		"year": 1969,
		"category": "NETZWERK & DNS",
		"title": "Erste permanente ARPANET-Standleitung zwischen UCLA und Stanford geht in Betrieb",
		"description": "Am 21. November 1969 wird die erste dauerhafte Paketvermittlungs-Verbindung zwischen den Interface Message Processors (IMPs) an der University of California (UCLA) und dem Stanford Research Institute (SRI) geschaltet.",
		"context": "Die IMPs waren die unmittelbaren Vorläufer heutiger Netzwerk-Router in Wide Area Networks (WAN).",
		"articleTitle": "ARPANET",
		"tags": [
			"ARPANET",
			"Routing",
			"WAN",
			"Paketvermittlung"
		]
	},
	{
		"month": 11,
		"day": 29,
		"year": 1972,
		"category": "HARDWARE & CHIPS",
		"title": "Atari veröffentlicht den Arcade-Automaten „Pong“ – Beginn der kommerziellen Videospiel-Industrie",
		"description": "Am 29. November 1972 bringt Atari das von Allan Alcorn entworfene Spiel Pong heraus. Es besteht komplett aus diskreten TTL-Logikbausteinen ohne Mikroprozessor und wird zum ersten großen kommerziellen Erfolg der Videospielgeschichte.",
		"context": "Echtzeit-Signalverarbeitung und digitale Logikschaltungen für Videospiele trieben in den Folgejahren die Entwicklung erschwinglicher Grafik- und Soundchips voran.",
		"articleTitle": "Pong",
		"tags": [
			"Atari",
			"Pong",
			"TTL-Logik",
			"Gaming-Historie"
		]
	},
	{
		"month": 11,
		"day": 30,
		"year": 2022,
		"category": "SOFTWARE & CODE",
		"title": "OpenAI veröffentlicht ChatGPT – Weltweiter Durchbruch für große Sprachmodelle (LLMs)",
		"description": "Am 30. November 2022 schaltet OpenAI die auf GPT-3.5 basierende Dialog-KI ChatGPT frei. Innerhalb von fünf Tagen erreicht das System über eine Million Nutzer und rückt Transformer-Architekturen ins Zentrum der IT-Welt.",
		"context": "Auslöser für den heutigen Einsatz lokaler und Cloud-basierter KI-Agenten (wie Ollama, Qwen, Llama und Coding-Assistenten) im Entwickler- und Sysadmin-Alltag.",
		"articleTitle": "ChatGPT",
		"tags": [
			"Künstliche Intelligenz",
			"LLM",
			"Transformer",
			"Generative KI"
		]
	},
	{
		"month": 1,
		"day": 1,
		"year": 1983,
		"category": "NETZWERK & DNS",
		"title": "ARPANET „Flag Day“: Verbindliche Umstellung auf die TCP/IP-Protokollfamilie",
		"description": "Am 1. Januar 1983 schaltet das ARPANET das alte NCP-Protokoll ab und wechselt vollständig auf TCP/IP (RFC 791 / RFC 793). Damit können erstmals unterschiedlichste Teilnetze zu einem globalen „Internetwork“ verbunden werden.",
		"context": "Jedes Datenpaket im TechDock und im weltweiten Internet nutzt bis heute die damals eingeführte Schichtenarchitektur aus IP-Routing und TCP/UDP-Transport.",
		"articleTitle": "Transmission_Control_Protocol/Internet_Protocol",
		"tags": [
			"TCP/IP",
			"ARPANET",
			"RFC 791",
			"Netzwerktechnik"
		]
	},
	{
		"month": 1,
		"day": 7,
		"year": 1982,
		"category": "HARDWARE & CHIPS",
		"title": "Commodore präsentiert auf der CES den Heimcomputer C64",
		"description": "Mit 64 KB RAM, dem MOS-6510-Prozessor, Hardware-Sprites des VIC-II-Grafikchips und dem dreistimmigen SID-Synthesizer-Chip stellt Commodore den meistverkauften Einzelcomputer der Geschichte vor.",
		"context": "Der C64 brachte einer ganzen Generation Assembler- und BASIC-Programmierung sowie ein tiefes Verständnis für Speicheradressierung näher.",
		"articleTitle": "Commodore_64",
		"tags": [
			"Commodore 64",
			"8-Bit",
			"MOS 6510",
			"Hardware"
		]
	},
	{
		"month": 1,
		"day": 9,
		"year": 2007,
		"category": "HARDWARE & CHIPS",
		"title": "Steve Jobs präsentiert das erste iPhone mit kapazitivem Multi-Touch-Display",
		"description": "Auf der Macworld 2007 stellt Apple das erste iPhone vor. Statt physischer Tastatur oder Stylus setzt es auf ein kapazitives Glasdisplay mit Multi-Touch-Gesten und einem vollwertigen mobilen Webbrowser auf Basis von XNU/Darwin (Unix).",
		"context": "Begründete das moderne Mobile-Computing, Responsive Webdesign und die App-Ökonomie.",
		"articleTitle": "iPhone_(1._Generation)",
		"tags": [
			"iPhone",
			"Multi-Touch",
			"Mobile Computing",
			"ARM"
		]
	},
	{
		"month": 2,
		"day": 14,
		"year": 1946,
		"category": "HARDWARE & CHIPS",
		"title": "Vorstellung des ENIAC – Erster elektronischer, Turing-vollständiger Universalrechner",
		"description": "An der University of Pennsylvania wird der von John Presper Eckert und John Mauchly konstruierte ENIAC vorgeführt. Mit 17.468 Elektronenröhren erreicht er 5.000 Additionen pro Sekunde – tausendmal schneller als elektromechanische Rechner.",
		"context": "Meilenstein beim Übergang von Relais-Mechanik zur reinen Röhrenelektronik und digitalen Schaltungstechnik.",
		"articleTitle": "ENIAC",
		"tags": [
			"ENIAC",
			"Elektronenröhre",
			"Mainframe",
			"Turing-vollständig"
		]
	},
	{
		"month": 2,
		"day": 20,
		"year": 1991,
		"category": "SOFTWARE & CODE",
		"title": "Guido van Rossum veröffentlicht den ersten Quellcode der Programmiersprache Python (0.9.0)",
		"description": "Am 20. Februar 1991 teilt Guido van Rossum in `alt.sources` die erste Version von Python. Die Sprache legt größten Wert auf saubere Code-Lesbarkeit durch Einrückung und modulare Erweiterbarkeit.",
		"context": "Python ist heute die wichtigste Sprache für Infrastruktur-Automatisierung (Ansible), IT-Security-Skripte, Data Science und lokale KI-Pipelines.",
		"articleTitle": "Python_(Programmiersprache)",
		"tags": [
			"Python",
			"Programmierung",
			"Open Source",
			"Scripting"
		]
	},
	{
		"month": 3,
		"day": 12,
		"year": 1989,
		"category": "NETZWERK & DNS",
		"title": "Tim Berners-Lee reicht am CERN den Entwurf für das World Wide Web ein",
		"description": "Mit dem Dokument „Information Management: A Proposal“ schlägt Tim Berners-Lee ein hypertextbasiertes Informationssystem vor, um Forschungsergebnisse am CERN plattformübergreifend über das Netzwerk zu verknüpfen.",
		"context": "Aus diesem Konzept entstanden HTTP, HTML und URL – das Fundament aller heutigen Webanwendungen und REST-APIs.",
		"articleTitle": "World_Wide_Web",
		"tags": [
			"WWW",
			"CERN",
			"Hypertext",
			"Tim Berners-Lee"
		]
	},
	{
		"month": 3,
		"day": 15,
		"year": 1985,
		"category": "NETZWERK & DNS",
		"title": "Registrierung von symbolics.com – Die erste .com-Domain der Internetgeschichte",
		"description": "Der LISP-Workstation-Hersteller Symbolics Inc. lässt am 15. März 1985 die allererste kommerzielle Domain im neu geschaffenen Domain Name System (DNS) eintragen.",
		"context": "Startschuss für das hierarchische DNS-Namenssystem, das kryptische IP-Adressen für Menschen merkbar macht.",
		"articleTitle": ".com",
		"tags": [
			"DNS",
			"symbolics.com",
			"Top-Level-Domain",
			"Internet"
		]
	},
	{
		"month": 4,
		"day": 7,
		"year": 1969,
		"category": "NETZWERK & DNS",
		"title": "Steve Crocker veröffentlicht RFC 1 („Host Software“) für das ARPANET",
		"description": "Am 7. April 1969 erscheint das allererste Request for Comments (RFC 1). Es beschreibt die Host-zu-Host-Kommunikation der ersten vier ARPANET-Knoten und begründet die offene Diskussionskultur der Internet-Standardisierung.",
		"context": "Bis heute werden sämtliche Protokolle wie IPv6, TLS 1.3, HTTP/3 oder WireGuard als öffentlich zugängliche RFCs spezifiziert.",
		"articleTitle": "Request_for_Comments",
		"tags": [
			"RFC 1",
			"IETF",
			"Protokoll-Standards",
			"ARPANET"
		]
	},
	{
		"month": 4,
		"day": 7,
		"year": 2005,
		"category": "SOFTWARE & CODE",
		"title": "Linus Torvalds erstellt den ersten Commit der verteilten Versionsverwaltung Git",
		"description": "Am 7. April 2005 checkt Linus Torvalds den allerersten Commit von Git ein (`e83c5163`). Git sichert Datenintegrität über kryptographische SHA-1/SHA-256-Merkle-Bäume und erlaubt blitzschnelles, dezentrales Branching.",
		"context": "Git ist heute das unverzichtbare Standardwerkzeug für Softwareentwicklung, Infrastructure-as-Code (GitOps) und CI/CD-Pipelines.",
		"articleTitle": "Git",
		"tags": [
			"Git",
			"Linus Torvalds",
			"Versionskontrolle",
			"DevOps"
		]
	},
	{
		"month": 5,
		"day": 12,
		"year": 1941,
		"category": "HARDWARE & CHIPS",
		"title": "Konrad Zuse präsentiert in Berlin die Z3 – Den ersten funktionsfähigen Digitalcomputer",
		"description": "Am 12. Mai 1941 führt Konrad Zuse die Z3 im funktionierenden Betrieb vor. Die Maschine arbeitet mit 2.000 Fernmelderelais im binären Gleitkommasystem und ist der erste frei programmierbare Rechner der Welt.",
		"context": "Meilenstein der deutschen und internationalen Informatikgeschichte: Binärarithmetik und Gleitkommazahlen nach dem Prinzip der Z3 stecken in jeder modernen CPU.",
		"articleTitle": "Zuse_Z3",
		"tags": [
			"Konrad Zuse",
			"Z3",
			"Binärrechner",
			"Hardware-Historie"
		]
	},
	{
		"month": 5,
		"day": 22,
		"year": 1973,
		"category": "NETZWERK & DNS",
		"title": "Robert Metcalfe verfasst am Xerox PARC das Gründungsmemo für „Ethernet“",
		"description": "Am 22. Mai 1973 beschreibt Robert Metcalfe das Zugriffsverfahren CSMA/CD zur schnellen Datenübertragung zwischen Workstations über ein gemeinsames Kabelmedium und tauft die Technik auf den Namen „Ethernet“.",
		"context": "Als IEEE 802.3 ist Ethernet (heute über Twisted-Pair und Glasfaser mit 1G/10G/100G/400G) der unangefochtene Standard auf Layer 1 und 2 in jedem LAN und Rechenzentrum.",
		"articleTitle": "Ethernet",
		"tags": [
			"Ethernet",
			"IEEE 802.3",
			"LAN",
			"OSI Layer 2"
		]
	},
	{
		"month": 6,
		"day": 23,
		"year": 1912,
		"category": "PIONIERE DER INFORMATIK",
		"title": "Geburtstag von Alan Turing – Begründer der theoretischen Informatik & Kryptoanalyse",
		"description": "Am 23. Juni 1912 wird Alan Turing geboren. Mit seinem Papier „On Computable Numbers“ (1936) definierte er das mathematische Modell der Turingmaschine und trug in Bletchley Park entscheidend zur Entzifferung der Enigma bei.",
		"context": "Jede moderne Programmiersprache und CPU-Architektur misst ihre universelle Berechnungsfähigkeit bis heute am Begriff der „Turing-Vollständigkeit“.",
		"articleTitle": "Alan_Turing",
		"tags": [
			"Alan Turing",
			"Turingmaschine",
			"Kryptologie",
			"KI"
		]
	},
	{
		"month": 8,
		"day": 6,
		"year": 1991,
		"category": "NETZWERK & DNS",
		"title": "Tim Berners-Lee schaltet am CERN die erste Webseite (`info.cern.ch`) öffentlich frei",
		"description": "Am 6. August 1991 macht Tim Berners-Lee das World-Wide-Web-Projekt in der Newsgruppe `alt.hypertext` öffentlich bekannt und stellt die erste Webseite der Welt auf seinem NeXT-Rechner ins Internet.",
		"context": "Geburtsstunde des öffentlichen Webs, das das Internet von einem reinen Wissenschaftsnetz zum universellen Kommunikationsmedium machte.",
		"articleTitle": "info.cern.ch",
		"tags": [
			"info.cern.ch",
			"Erste Website",
			"CERN",
			"WWW"
		]
	},
	{
		"month": 8,
		"day": 12,
		"year": 1981,
		"category": "HARDWARE & CHIPS",
		"title": "IBM präsentiert den IBM 5150 Personal Computer – Geburt der offenen x86-PC-Architektur",
		"description": "Am 12. August 1981 stellt IBM in New York den IBM PC 5150 mit Intel-8088-Prozessor (4,77 MHz), 16–64 KB RAM, ISA-Erweiterungssteckplätzen und offen dokumentiertem BIOS vor.",
		"context": "Durch die offene Systemarchitektur aus Standardbauteilen begründete der IBM 5150 die gesamte heutige PC- und x86-Server-Welt.",
		"articleTitle": "IBM_Personal_Computer",
		"tags": [
			"IBM 5150",
			"x86-Architektur",
			"BIOS",
			"Personal Computer"
		]
	},
	{
		"month": 8,
		"day": 16,
		"year": 1993,
		"category": "OPERATING SYSTEMS",
		"title": "Ian Murdock kündigt die freie Linux-Distribution „Debian“ an",
		"description": "Am 16. August 1993 ruft Ian Murdock in `comp.os.linux.development` das Debian-Projekt ins Leben – mit dem Anspruch, eine vollständig freie, gemeinschaftlich organisierte und technisch herausragende Linux-Distribution zu entwickeln.",
		"context": "Debian und sein Paketformat `.deb` (APT) bilden das stabile Fundament für Ubuntu, Proxmox VE, Raspberry Pi OS und unzählige Docker-Container-Images.",
		"articleTitle": "Debian",
		"tags": [
			"Debian",
			"Linux",
			"APT / dpkg",
			"Server-OS"
		]
	},
	{
		"month": 8,
		"day": 25,
		"year": 1991,
		"category": "OPERATING SYSTEMS",
		"title": "Linus Torvalds kündigt sein freies Betriebssystem-Kernel-Projekt in comp.os.minix an",
		"description": "Am 25. August 1991 schreibt der 21-jährige Student Linus Torvalds aus Helsinki seinen berühmten Usenet-Beitrag: „I’m doing a (free) operating system (just a hobby, won’t be big and professional like gnu) for 386(486) AT clones.“",
		"context": "Aus diesem „kleinen Hobbyprojekt“ entstand mit dem Linux-Kernel das Herzstück der gesamten modernen Cloud-, Server-, Container- und Supercomputer-Welt.",
		"articleTitle": "Geschichte_von_Linux",
		"tags": [
			"Linux",
			"Linus Torvalds",
			"Kernel",
			"Open Source"
		]
	},
	{
		"month": 9,
		"day": 9,
		"year": 1947,
		"category": "HARDWARE & CHIPS",
		"title": "Grace Hopper und ihr Team dokumentieren am Harvard Mark II den ersten echten „Computer-Bug“",
		"description": "Am 9. September 1947 legen Techniker der Harvard University eine Motte frei, die ein Relais des Rechners Mark II blockiert hatte, und kleben sie mit dem Vermerk „First actual case of bug being found“ ins Systemlogbuch.",
		"context": "Prägte die Begriffe „Bug“ und „Debugging“; Grace Hopper entwickelte kurz darauf zudem den ersten Compiler (A-0) und die Grundlagen für COBOL.",
		"articleTitle": "Programmfehler",
		"tags": [
			"Grace Hopper",
			"Debugging",
			"Harvard Mark II",
			"Compiler"
		]
	},
	{
		"month": 9,
		"day": 17,
		"year": 1991,
		"category": "OPERATING SYSTEMS",
		"title": "Veröffentlichung von Linux Kernel 0.01 auf dem FTP-Server ftp.funet.fi",
		"description": "Am 17. September 1991 stellt Linus Torvalds das erste Quellcode-Archiv (`linux-0.01.tar.Z`, 10.239 Zeilen C- und Assembler-Code) für Entwickler zum Download bereit.",
		"context": "Erster öffentlich einsehbarer Quellcode des Linux-Kernels.",
		"articleTitle": "Linux_(Kernel)",
		"tags": [
			"Linux 0.01",
			"Kernel",
			"C-Code",
			"Open Source"
		]
	},
	{
		"month": 10,
		"day": 5,
		"year": 1991,
		"category": "OPERATING SYSTEMS",
		"title": "Offizielle Ankündigung von Linux 0.02 – Ausführung von Bash und GCC",
		"description": "Am 5. Oktober 1991 verkündet Linus Torvalds die Version 0.02 seines Kernels, auf der erstmals die GNU Bourne-Again-Shell (`bash`) sowie der GNU C-Compiler (`gcc`) stabil laufen.",
		"context": "Durch das Zusammenspiel von Linux-Kernel und GNU-Userland (bash, gcc, coreutils) wurde das System erstmals selbsttragend entwickelbar.",
		"articleTitle": "Linux",
		"tags": [
			"Linux 0.02",
			"GNU/Linux",
			"Bash",
			"GCC"
		]
	},
	{
		"month": 10,
		"day": 29,
		"year": 1969,
		"category": "NETZWERK & DNS",
		"title": "„LO“ – Die allererste Host-zu-Host-Nachrichtenübertragung über das ARPANET",
		"description": "Am 29. Oktober 1969 um 22:30 Uhr sendet Charley Kline von der UCLA aus die Buchstaben „L“ und „O“ (des Befehls LOGIN) über eine 50-kbit/s-Leitung an den Rechner des Stanford Research Institute, bevor das System beim „G“ abstürzt.",
		"context": "Der historische Erstkontakt der paketvermittelten Datenübertragung und die Geburtsstunde der vernetzten IT-Welt.",
		"articleTitle": "ARPANET",
		"tags": [
			"ARPANET",
			"Paketvermittlung",
			"UCLA",
			"Netzwerk-Historie"
		]
	},
	{
		"month": 12,
		"day": 9,
		"year": 1968,
		"category": "HARDWARE & CHIPS",
		"title": "Douglas Engelbart zeigt in der „Mother of All Demos“ Maus, Hypertext & Videokonferenz",
		"description": "Am 9. Dezember 1968 präsentiert Douglas Engelbart auf der Fall Joint Computer Conference in San Francisco sein NLS-System: Erstmals sehen 1.000 Informatiker live eine Computermaus, Fenstertechnik, Hyperlinks und gemeinsames Editieren über ein Netzwerk.",
		"context": "nahm die gesamte moderne Arbeitsplatz-IT (GUI, Groupware, Videokonferenz, Wiki-Links) um Jahrzehnte vorweg.",
		"articleTitle": "The_Mother_of_All_Demos",
		"tags": [
			"Douglas Engelbart",
			"Mother of All Demos",
			"Computermaus",
			"Hypertext"
		]
	},
	{
		"month": 12,
		"day": 16,
		"year": 1947,
		"category": "HARDWARE & CHIPS",
		"title": "Erfindung des ersten funktionsfähigen Bipolartransistors in den Bell Laboratories",
		"description": "Am 16. Dezember 1947 gelingt John Bardeen und Walter Brattain unter Leitung von William Shockley der Aufbau des ersten funktionierenden Spitzenkontaktransistors aus Germanium.",
		"context": "Die wichtigste Hardware-Erfindung des 20. Jahrhunderts: Moderne Server- und Desktop-CPUs schalten heute über 50 bis 100 Milliarden Transistoren auf wenigen Quadratmillimetern.",
		"articleTitle": "Transistor",
		"tags": [
			"Transistor",
			"Halbleiter",
			"Bell Labs",
			"Mikroelektronik"
		]
	}
];
var SLIDE_MS = 45e3;
var MONTHS = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember"
];
var CATEGORY_LABELS = {
	"NETZWERK & DNS": "Netzwerk",
	"IT-SECURITY & KRYPTO": "Sicherheit",
	"HARDWARE & SENSORIK": "Hardware",
	"HARDWARE & CHIPS": "Hardware",
	"OPERATING SYSTEMS": "Systeme",
	"LINUX & CONTAINER": "Systeme",
	"SOFTWARE & CODE": "Software",
	"PIONIERE DER INFORMATIK": "Pioniere"
};
var IT_TERMS = /\b(computer|rechner|supercomputer|mainframe|mikroprozessor|prozessor|halbleiter|transistor|integrierter schaltkreis|mikrochip|arbeitsspeicher|festplatte|betriebssystem|linux|unix|windows|ms-dos|macos|android|ios|debian|ubuntu|fedora|software|quellcode|open source|open-source|programmiersprache|algorithmus|compiler|datenbank|internet|arpanet|world wide web|webbrowser|webseite|domain name system|tcp\/ip|ethernet|glasfaser|netzwerkprotokoll|rechenzentrum|kryptographie|verschlüsselung|computervirus|computerwurm|cyberangriff|firewall|it-sicherheit|apple|microsoft|ibm|intel|amd|nvidia|cisco|atari|commodore|amiga|nintendo|playstation|xbox|videospiel|spielkonsole|künstliche intelligenz|cern|icann|ietf|ascii|unicode|zuse|turing|torvalds|berners-lee)\b/i;
var OFF_TOPIC = /\b(wahl|präsidentschaftswahl|bundestagswahl|parlament|bundestag|landtag|kongress|senat|präsident|bundeskanzler|minister|premierminister|regierung|partei|koalition|könig|königin|kaiser|zar|herzog|fürst|prinz|papst|bischof|kardinal|kirche|kloster|krieg|weltkrieg|bürgerkrieg|schlacht|armee|truppen|soldaten|wehrmacht|offensive|belagerung|luftangriff|bombenangriff|attentat|mord|ermordung|hinrichtung|massaker|genozid|terroranschlag|entführung|putsch|revolution|aufstand|friedensvertrag|waffenstillstand|kapitulation|verfassung|unabhängigkeit|kolonie|erdbeben|tsunami|wirbelsturm|hurrikan|taifun|vulkanausbruch|überschwemmung|hungersnot|flugzeugabsturz|zugunglück|schiffbruch|grubenunglück|fußball|weltmeisterschaft|europameisterschaft|olympische|olympiasieger|tennis|boxen|formel 1|tour de france|schauspieler|schauspielerin|regisseur|sänger|sängerin|musiker|komponist|band|musikalbum|single-charts|kinofilm|spielfilm|fernsehserie|telenovela|roman|gedicht|schriftsteller|dichter|oper|theater|uraufführung|gemälde|maler|nobelpreis für literatur|friedensnobelpreis)\b/i;
function berlinToday() {
	const [year, month, day] = new Intl.DateTimeFormat("en-CA", {
		timeZone: "Europe/Berlin",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(/* @__PURE__ */ new Date()).split("-").map(Number);
	return {
		year,
		month,
		day
	};
}
function formatLongDate(month, day) {
	const { year } = berlinToday();
	const date = new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
	return new Intl.DateTimeFormat("de-DE", {
		timeZone: "Europe/Berlin",
		weekday: "long",
		day: "numeric",
		month: "long"
	}).format(date);
}
function formatClock(date = /* @__PURE__ */ new Date()) {
	return new Intl.DateTimeFormat("de-DE", {
		timeZone: "Europe/Berlin",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	}).format(date);
}
function categoryLabel(category) {
	return CATEGORY_LABELS[category] ?? "Informatik";
}
function yearsAgoLabel(year, nowYear) {
	const diff = nowYear - year;
	if (diff <= 0) return "In diesem Jahr";
	if (diff === 1) return "Vor einem Jahr";
	return `Vor ${diff} Jahren`;
}
function dayMonthLabel(day, month) {
	return `${day}. ${MONTHS[month - 1] ?? ""}`;
}
function wikiUrl(title) {
	return `https://de.wikipedia.org/wiki/${encodeURIComponent(title)}`;
}
function fromMilestone(item, exact) {
	return {
		id: `${item.year}-${item.articleTitle.toLowerCase()}`,
		year: item.year,
		month: item.month,
		day: item.day,
		category: item.category,
		title: item.title,
		description: item.description,
		context: item.context,
		exact,
		articleUrl: wikiUrl(item.articleTitle),
		articleName: item.articleTitle.replace(/_/g, " "),
		tags: item.tags.slice(0, 4)
	};
}
function classify(text) {
	const t = text.toLowerCase();
	if (/(krypt|verschlüssel|nsa|sicherheit|security|wurm|virus|cyber|firewall|cert|ipsec)/.test(t)) return "IT-SECURITY & KRYPTO";
	if (/(internet|netzwerk|web|arpanet|browser|domain|dns|icann|tcp|ethernet|glasfaser|ietf|rfc|cern)/.test(t)) return "NETZWERK & DNS";
	if (/(linux|unix|windows|betriebssystem|macos|debian|ubuntu|fedora|kernel|ms-dos|android|ios|docker|container)/.test(t)) return "OPERATING SYSTEMS";
	if (/(chip|prozessor|mikroprozessor|transistor|halbleiter|computer|rechner|zuse|eniac|c64|macintosh|ibm|intel|amd|nvidia|hardware|speicher|festplatte|maus|kinect|playstation|xbox|atari|konsole)/.test(t)) return "HARDWARE & CHIPS";
	return "SOFTWARE & CODE";
}
function contextFor(category) {
	switch (category) {
		case "IT-SECURITY & KRYPTO": return "Zeigt, wie historische Schwachstellen und Kryptographie in heutigen Schutzkonzepten weiterleben: Absicherung, Updates und saubere Systemgrenzen.";
		case "NETZWERK & DNS": return "Ohne offene Protokolle, Namensauflösung und Paketvermittlung gäbe es weder Campus-Netze noch die Dienste, die heute darüber laufen.";
		case "OPERATING SYSTEMS":
		case "LINUX & CONTAINER": return "Kernel, Prozesse und Pakete sind das Fundament von Servern, Arbeitsplätzen und Containern im aktuellen Betrieb.";
		case "HARDWARE & CHIPS":
		case "HARDWARE & SENSORIK": return "Vom diskreten Schaltkreis zur integrierten CPU und GPU: diese Linie erklärt, warum heutige Rechner so gebaut sind.";
		default: return "Sprachen, Werkzeuge und offene Zusammenarbeit haben geprägt, wie Software heute entsteht und gepflegt wird.";
	}
}
function finalize(stories) {
	const exactRank = (story) => story.exact ? 1 : 0;
	return [...stories].sort((a, b) => exactRank(b) - exactRank(a) || a.year - b.year).slice(0, 8);
}
function storiesFor(month, day) {
	const seen = /* @__PURE__ */ new Set();
	const stories = [];
	for (const item of MILESTONES) {
		if (item.month !== month || item.day !== day) continue;
		const story = fromMilestone(item, true);
		if (seen.has(story.id)) continue;
		seen.add(story.id);
		stories.push(story);
	}
	if (stories.length < 6) {
		const sameMonth = MILESTONES.filter((item) => item.month === month && item.day !== day).sort((a, b) => Math.abs(a.day - day) - Math.abs(b.day - day));
		const otherMonths = MILESTONES.filter((item) => item.month !== month);
		for (const item of [...sameMonth, ...otherMonths]) {
			if (stories.length >= 6) break;
			const story = fromMilestone(item, false);
			if (seen.has(story.id)) continue;
			seen.add(story.id);
			stories.push(story);
		}
	}
	return finalize(stories);
}
async function loadDay(month, day) {
	const seen = /* @__PURE__ */ new Set();
	const stories = [];
	const push = (story) => {
		if (seen.has(story.id)) return;
		seen.add(story.id);
		stories.push(story);
	};
	for (const item of MILESTONES) if (item.month === month && item.day === day) push(fromMilestone(item, true));
	const mm = String(month).padStart(2, "0");
	const dd = String(day).padStart(2, "0");
	try {
		const response = await fetch(`https://de.wikipedia.org/api/rest_v1/feed/onthisday/events/${mm}/${dd}`, { headers: { Accept: "application/json" } });
		if (response.ok) {
			const data = await response.json();
			for (const entry of data.events ?? []) {
				if (!entry.text || !entry.year) continue;
				const headline = entry.text.trim();
				const page = entry.pages?.[0];
				const combined = `${headline} ${page ? `${page.normalizedtitle ?? ""} ${page.description ?? ""} ${page.extract ?? ""}` : ""}`;
				if (OFF_TOPIC.test(combined)) continue;
				if (!IT_TERMS.test(headline)) continue;
				const articleName = page?.normalizedtitle || headline.slice(0, 80);
				const category = classify(combined);
				let description = headline;
				if (page?.extract && page.extract.length > 50) {
					const clean = page.extract.replace(/\s+/g, " ").trim();
					description = clean.length > 340 ? `${clean.slice(0, 330).replace(/\s+\S*$/, "")}…` : clean;
				}
				const tags = (entry.pages ?? []).slice(0, 3).map((item) => (item.normalizedtitle ?? "").replace(/_/g, " ")).filter(Boolean);
				push({
					id: `${entry.year}-${articleName.toLowerCase()}`,
					year: entry.year,
					month,
					day,
					category,
					title: headline,
					description,
					context: contextFor(category),
					exact: true,
					articleUrl: page?.content_urls?.desktop?.page || wikiUrl(articleName),
					articleName: articleName.replace(/_/g, " "),
					tags: tags.length ? tags.slice(0, 4) : [categoryLabel(category)]
				});
			}
		}
	} catch {}
	if (stories.length < 6) {
		const sameMonth = MILESTONES.filter((item) => item.month === month && item.day !== day).sort((a, b) => Math.abs(a.day - day) - Math.abs(b.day - day));
		const otherMonths = MILESTONES.filter((item) => item.month !== month);
		for (const item of [...sameMonth, ...otherMonths]) {
			if (stories.length >= 6) break;
			push(fromMilestone(item, false));
		}
	}
	return finalize(stories);
}
var SPOTLIGHTS = [
	{
		label: "Heute",
		month: 0,
		day: 0
	},
	{
		label: "4. Nov",
		month: 11,
		day: 4
	},
	{
		label: "2. Nov",
		month: 11,
		day: 2
	},
	{
		label: "15. Nov",
		month: 11,
		day: 15
	},
	{
		label: "25. Aug",
		month: 8,
		day: 25
	},
	{
		label: "1. Jan",
		month: 1,
		day: 1
	},
	{
		label: "12. Mai",
		month: 5,
		day: 12
	}
];
var PILLARS = [
	{
		title: "Systeme",
		text: "Kernel, Distributionen und Container — die Schicht, auf der Server und Arbeitsplätze heute laufen."
	},
	{
		title: "Netze",
		text: "Namen, Routing und Protokolle. Ohne sie bleibt aus Adressen kein dienstfähiges Netz."
	},
	{
		title: "Hardware",
		text: "Vom Relais bis zur GPU: warum Rechner so gebaut sind, wie sie im Labor stehen."
	}
];
function ChroniclePage() {
	const today = berlinToday();
	const [when, setWhen] = (0, import_react.useState)({
		month: today.month,
		day: today.day
	});
	const [pinned, setPinned] = (0, import_react.useState)(false);
	const [stories, setStories] = (0, import_react.useState)(() => storiesFor(today.month, today.day));
	const [index, setIndex] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [clock, setClock] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	const playingRef = (0, import_react.useRef)(playing);
	const indexRef = (0, import_react.useRef)(index);
	const lenRef = (0, import_react.useRef)(stories.length);
	const elapsedRef = (0, import_react.useRef)(0);
	playingRef.current = playing;
	indexRef.current = index;
	lenRef.current = stories.length;
	const safeIndex = stories.length ? index % stories.length : 0;
	const story = stories[safeIndex];
	(0, import_react.useEffect)(() => {
		setReady(true);
		const tick = () => setClock(formatClock());
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (pinned) return;
		const id = window.setInterval(() => {
			const next = berlinToday();
			setWhen((current) => current.month === next.month && current.day === next.day ? current : {
				month: next.month,
				day: next.day
			});
		}, 3e4);
		return () => window.clearInterval(id);
	}, [pinned]);
	(0, import_react.useEffect)(() => {
		const local = storiesFor(when.month, when.day);
		setStories(local);
		setIndex(0);
		elapsedRef.current = 0;
		setProgress(0);
		let cancel = false;
		loadDay(when.month, when.day).then((next) => {
			if (!cancel) setStories(next);
		});
		return () => {
			cancel = true;
		};
	}, [when.month, when.day]);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			if (!playingRef.current || lenRef.current === 0) return;
			elapsedRef.current += 100;
			setProgress(Math.min(1, elapsedRef.current / SLIDE_MS));
			if (elapsedRef.current >= 45e3) {
				elapsedRef.current = 0;
				setProgress(0);
				setIndex((indexRef.current + 1) % lenRef.current);
			}
		}, 100);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			const target = event.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
			if (event.key === "ArrowRight") {
				event.preventDefault();
				go(1);
			} else if (event.key === "ArrowLeft") {
				event.preventDefault();
				go(-1);
			} else if (event.key === " ") {
				event.preventDefault();
				setPlaying((value) => !value);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	function go(delta) {
		if (!stories.length) return;
		elapsedRef.current = 0;
		setProgress(0);
		setIndex((current) => (current + delta + stories.length) % stories.length);
	}
	function jump(next) {
		elapsedRef.current = 0;
		setProgress(0);
		setIndex(next);
	}
	function selectDate(month, day, followToday) {
		setPinned(!followToday);
		if (followToday) {
			const live = berlinToday();
			setWhen({
				month: live.month,
				day: live.day
			});
			return;
		}
		setWhen({
			month,
			day
		});
	}
	const isoYear = berlinToday().year;
	const iso = `${isoYear}-${String(when.month).padStart(2, "0")}-${String(when.day).padStart(2, "0")}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-6 md:px-8 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b-2 border-fg pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-cyan",
					children: "TechDock · Schauraum"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-semibold text-fg md:text-5xl",
						children: "Heute in der IT-Geschichte"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-base text-muted",
						children: "Kurz erzählt: was an diesem Tag in der Technik passiert ist, und warum es noch zählt."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left sm:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base text-fg",
							children: formatLongDate(when.month, when.day)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-lg text-cyan tabular-nums",
							children: clock ?? "––:––:––"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 grid min-w-0 items-start gap-4 lg:grid-cols-12",
				"aria-label": "Meilenstein des Tages",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "frame panel flex min-w-0 flex-col justify-between gap-8 p-5 md:p-8 lg:col-span-8",
					children: [story ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "slide-in flex flex-col gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-xs text-muted",
								children: [
									categoryLabel(story.category),
									" · ",
									yearsAgoLabel(story.year, isoYear),
									" · ",
									story.exact ? "an diesem Tag" : dayMonthLabel(story.day, story.month)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-5xl font-semibold text-amber md:text-6xl",
								children: story.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl leading-snug font-semibold text-fg md:text-3xl",
								children: story.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-3xl text-base leading-relaxed text-fg md:text-lg",
								children: story.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "border-l-4 border-amber bg-panel-2 px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs text-muted",
									children: "Was heute noch zählt"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-base leading-relaxed text-fg",
									children: story.context
								})]
							}),
							story.tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "flex flex-wrap gap-x-3 gap-y-1",
								children: story.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "font-mono text-xs text-muted",
									children: tag
								}, tag))
							}) : null
						]
					}, story.id) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between font-mono text-xs text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								String(safeIndex + 1).padStart(2, "0"),
								" / ",
								String(stories.length).padStart(2, "0")
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: playing ? "Wechselt alle 45 Sekunden" : "Angehalten" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 bg-panel-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full bg-cyan",
								style: { width: `${progress * 100}%` }
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "flex min-w-0 flex-col gap-4 lg:col-span-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "panel flex min-h-0 min-w-0 flex-1 flex-col p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-baseline justify-between gap-3 border-b border-line pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold text-fg",
								children: "An diesem Tag"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-muted",
								children: stories.length
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "scroll-thin flex min-w-0 gap-3 overflow-x-auto pb-1 lg:max-h-[28rem] lg:flex-1 lg:flex-col lg:overflow-y-auto",
							children: stories.map((item, itemIndex) => {
								const active = itemIndex === safeIndex;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => jump(itemIndex),
									"aria-current": active ? "true" : void 0,
									className: cn("min-w-64 shrink-0 border-b border-line p-3 text-left lg:min-w-0 lg:shrink", active ? "bg-panel-2" : "hover:bg-panel-2"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-sm text-amber",
											children: item.year
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate font-mono text-xs text-muted",
											children: categoryLabel(item.category)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("mt-1 line-clamp-2 text-sm leading-snug", active ? "text-cyan underline" : "text-fg"),
										children: item.title
									})]
								}, item.id);
							})
						})]
					}), story ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "px-1 text-sm leading-relaxed text-fg",
						children: [
							"Mehr dazu:",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: story.articleUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cyan underline",
								children: [story.articleName, " auf Wikipedia"]
							})
						]
					}) : null]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-5 flex flex-col gap-4",
				"aria-label": "Steuerung",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							"aria-label": "Vorheriger Meilenstein",
							onClick: () => go(-1),
							className: "px-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "solid",
							onClick: () => setPlaying((value) => !value),
							className: "min-w-32",
							children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), playing ? "Pause" : "Weiter"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							"aria-label": "Nächster Meilenstein",
							onClick: () => go(1),
							className: "px-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "ml-auto flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Datum"
							}), ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "date",
								value: iso,
								onChange: (event) => {
									const value = event.target.value;
									if (!value) return;
									const [, month, day] = value.split("-").map(Number);
									if (!month || !day) return;
									selectDate(month, day, false);
								},
								className: "h-11 border border-line bg-panel px-3 text-sm text-fg"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-11 w-36 border border-line bg-panel" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: SPOTLIGHTS.map((spot) => {
						const active = spot.month === 0 ? !pinned : pinned && when.month === spot.month && when.day === spot.day;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => selectDate(spot.month, spot.day, spot.month === 0),
							className: cn("min-h-11 border px-3 text-sm", active ? "border-fg bg-panel text-cyan underline" : "border-line bg-panel text-fg hover:border-fg"),
							children: spot.label
						}, spot.label);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 border-t border-fg pt-8",
				"aria-label": "Über die Chronik",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold text-fg",
						children: "Für den Schauraum und den Unterricht"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-base leading-relaxed text-muted",
						children: "Die Chronik bleibt bei Informatik. Jeder Eintrag sagt, was damals geschah und warum es in heutigen Systemen, Netzen und im Code noch eine Rolle spielt."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-fg",
								children: pillar.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: pillar.text
							})]
						}, pillar.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-10 border-t border-line py-5 font-mono text-xs text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TechDock · Heute in der IT-Geschichte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: "Systemintegration und Anwendungsentwicklung"
				})]
			})
		]
	});
}
var SplitComponent = ChroniclePage;
//#endregion
export { SplitComponent as component };
