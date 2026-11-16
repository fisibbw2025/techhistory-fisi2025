export type Milestone = {
  month: number;
  day: number;
  year: number;
  category: string;
  title: string;
  description: string;
  context: string;
  articleTitle: string;
  tags: string[];
};

export const MILESTONES: Milestone[] = [
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
