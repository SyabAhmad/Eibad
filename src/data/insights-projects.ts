import type { InsightArticle } from "@/app/insights-data";

/**
 * Project articles. These exist because they are the only pages on this site
 * that nobody else can write: they are about specific, named, verifiable
 * projects, with the client, consultant, area and height published openly.
 *
 * PROVENANCE RULE - please keep this when editing:
 *  - Facts drawn from the Youssef Marroun Contracting Co. company profile, or
 *    from the Stylus ASD / Savills design documents, are sourced and safe.
 *  - Anything about Eibad's own experience, decisions, or lessons is marked
 *    with [VERIFY: ...] and MUST be confirmed or rewritten before publishing.
 *    An unverified first-person claim is a fabricated professional claim, which
 *    is both a trust problem and the exact kind of thin content that will not
 *    rank.
 */

export const projectArticles: InsightArticle[] = [
  {
    slug: "red-sea-central-transportation-hub-and-qc-lab",
    title: "Inside the Red Sea Central Transportation Hub: A 12 m Steel Frame Built Around Driver Welfare",
    description:
      "A 9,053 m² transport hub for The Red Sea Real Estate Co. — 12 m steel structure, separated maintenance bays for light and heavy vehicles, and a full driver welfare suite.",
    category: "PROJECT",
    readingTime: "7 MIN READ",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    projectSlug: "red-sea-transportation-hub-qc-lab",
    sourceNote:
      "Project facts (client, area, scope, status) are published by Youssef Marroun Contracting Co. in its company profile. Design consultancy: Khatib & Alami. My own contribution on this project is described from my role as BIM Architectural Engineer and is marked for verification.",
    keywords: [
      "Red Sea Central Transportation Hub",
      "Red Sea Real Estate Company project",
      "transportation hub building Saudi Arabia",
      "bus maintenance workshop design",
      "Khatib and Alami Red Sea project",
      "steel structure maintenance building",
      "driver welfare facility architecture",
    ],
    intro:
      "Most transport infrastructure is designed around vehicles. This one had to work just as hard for the people driving them, which changed how the building was organised from the first plan.",
    sections: [
      {
        heading: "What the building is",
        paragraphs: [
          "The Red Sea Central Transportation Hub and QC Lab is a 9,053 m² building developed for The Red Sea Real Estate Co. in the West Region of Saudi Arabia, with Khatib & Alami as consultant. It completed under Youssef Marroun Contracting Co.",
          "The structure is a 12 m high steel frame. That height is the single most consequential number on the project, because it governs the door heights on the maintenance bays, the depth of the structural bays, the drainage strategy across a very large roof plane, and the reach of the mechanical distribution serving the building.",
          "The QC Lab sits alongside the hub within the same facility, so the quality control function and the transport operation share a building rather than sitting as separate structures on a site.",
        ],
      },
      {
        heading: "Separating light from heavy vehicles",
        paragraphs: [
          "The functional core of the building is a maintenance area and repair workshops for two very different vehicle populations: light goods vehicles and heavy goods vehicle buses.",
          "These are separated based on functional and operational requirements, not simply by nominal bay size. A bus bay needs greater height, greater door width, a different floor loading, a different ventilation regime, and a different vehicle manoeuvre pattern than a light goods bay. Sharing a single undifferentiated hall would have meant over-provisioning the whole space for the worst case.",
          "The planning consequence is that the two workshop types each get a clear, dedicated zone, and the structure can be rationalised around the actual demand of each.",
        ],
        bullets: [
          "Light goods maintenance and repair, zoned separately",
          "Heavy goods vehicle bus repair workshops",
          "12 m high steel structure serving both workshop types",
          "Quality control laboratory within the same facility",
        ],
      },
      {
        heading: "The welfare brief is the architectural brief",
        paragraphs: [
          "What separates this building from a purely industrial shed is the driver support and welfare provision built into it: washrooms, changing rooms, a shared canteen, lockers, and a prayer room serving all staff and drivers.",
          "This is not a secondary fit-out. Drivers on a transport operation spend long blocks of time on site between routes, and the quality of those hours affects retention, punctuality, and safety. [VERIFY: whether welfare provision was part of the original client brief or was developed during design — this changes how you describe the design story]",
          "It also has a direct architectural effect. A canteen, changing rooms and a prayer room have completely different environmental and spatial requirements from a vehicle workshop: they need daylight, acoustic control, durable finishes, and a circulation route that does not pass through a live vehicle bay.",
          "Separating those two worlds cleanly — heavy and dirty vehicles in one zone, people in another — is the central spatial problem of the building.",
        ],
      },
      {
        heading: "What the completed interiors show",
        paragraphs: [
          "The finished building reads as a coherent public-facing facility rather than an industrial shed. The approach plaza is sheltered by tensile canopies, with curved concrete seating and a gravel ground treatment that softens the arrival sequence.",
          "Inside, the shared canteen is defined by a dark timber counter and a suspended linear timber slat ceiling, lit warmly against a pale plaster surround. The timber slat rafters are doing acoustic work as much as visual work, breaking up a hard ceiling plane over a space that would otherwise be very reverberant.",
          "A meeting and coordination space is organised around exposed white cross-braced structural columns, which bring daylight deep into the plan and give the room a clear structural identity without partitioning. The reception area pairs a vertical timber slat partition against a deep teal wall, with a timber counter and a red fire door deliberately left visible as part of the composition.",
        ],
        bullets: [
          "Tensile shade canopies over the terminal approach",
          "Curved concrete seating and gravel plaza landscape",
          "Timber slat ceiling rafters over the shared canteen",
          "Exposed cross-braced columns organising the meeting space",
          "Vertical timber slats against a teal feature wall at reception",
        ],
      },
      {
        heading: "What this kind of building asks of an architectural engineer",
        paragraphs: [
          "Logistics and transport buildings are usually presented as structural problems. They are also, continuously, a documentation and coordination problem, because the number of interfaces between structure, services, doors, drainage, and vehicle movement is high and the tolerances are tight.",
          "[VERIFY: describe your actual scope here — what proportion of your work was architectural shop drawings, BIM coordination with MEP, Saudi Building Code review, and site coordination? Be specific about which of those four you actually did on this project.]",
          "The 12 m height that makes the building work for buses is also what makes the coordination hard. Services have to cross a large uninterrupted volume, the roof plane is big enough that drainage detailing becomes a design issue rather than a default, and any architectural opening has to be checked against a structural zone grid that is already committed.",
        ],
      },
      {
        heading: "Project facts",
        paragraphs: [
          "Published project data, useful if you need the specification rather than the story:",
        ],
        bullets: [
          "Client: The Red Sea Real Estate Co.",
          "Consultant: Khatib & Alami",
          "Contractor: Youssef Marroun Contracting Co.",
          "Location: Red Sea, West Region, Saudi Arabia",
          "Area: 9,053 m²",
          "Structure: 12 m high steel building",
          "Category: Transportation hub building",
          "Status: Completed",
        ],
      },
    ],
    relatedSlugs: [
      "red-sea-central-distribution-center-cdc",
      "architectural-design-and-construction-coordination",
      "what-does-an-architectural-engineer-do",
    ],
  },
  {
    slug: "nupco-al-jouf-temperature-controlled-warehouse",
    title: "NUPCO Al Jouf: Designing a 20 m Pharmaceutical Warehouse Around Temperature Control",
    description:
      "A 35,000 m² storage and distribution warehouse for NUPCO in Al Jouf, Saudi Arabia — 20 m high, temperature-controlled at multiple set points, and designed to expand.",
    category: "PROJECT",
    readingTime: "7 MIN READ",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    projectSlug: "nupco-al-jouf",
    sourceNote:
      "Project facts (client, area, scope, status) are published by Youssef Marroun Contracting Co. in its company profile. Consultant: V3 Middle East. Statements about my own contribution are marked for verification.",
    keywords: [
      "NUPCO Al Jouf warehouse",
      "NUPCO distribution centre Saudi Arabia",
      "pharmaceutical warehouse design Saudi Arabia",
      "temperature controlled warehouse architecture",
      "medical supplies storage building",
      "20m high warehouse Al Jouf",
      "National Unified Procurement Company project",
    ],
    intro:
      "A 20 metre high pharmaceutical warehouse is a deceptively simple building. The height exists to stack pallet racking, and almost everything difficult about the project hides behind that one number.",
    sections: [
      {
        heading: "What the building is",
        paragraphs: [
          "The project is a 35,000 m² storage and distribution warehouse at Al Jouf, in the north-west region of Saudi Arabia, built for the National Unified Procurement Company — NUPCO — with V3 Middle East as consultant and Youssef Marroun Contracting Co. as contractor. It is completed.",
          "The scope is a 20 m high warehouse for the storage and distribution of medical supplies and equipment, together with annexure buildings and the associated infrastructure works on site.",
          "That is a large volume for a relatively narrow brief. Most of the difficulty is not in the building envelope; it is in what has to happen inside it.",
        ],
      },
      {
        heading: "Temperature control changes the architecture",
        paragraphs: [
          "The warehouse includes temperature-controlled storage areas covering a variety of temperature ranges. For medical supplies this is not a comfort issue — it is a product integrity issue, and it is the requirement that drives the internal organisation of the building.",
          "Each controlled zone needs its own envelope, its own air handling, and its own monitoring, and each of those needs to be coordinated against the rack layout rather than added afterwards. The architectural consequences run through the plan: where the controlled rooms sit, how they are accessed from the distribution floor, how personnel and goods move between zones of different classifications, and where plant is located.",
          "[VERIFY: what temperature ranges were actually specified, and how many separate controlled zones were there? These are exactly the details a reader searching for pharmaceutical warehouse design in Saudi Arabia will want, and only you can confirm them.]",
          "Provision was also made for future expansion, so the building has to accommodate growth in NUPCO's requirements without the next phase requiring a structural or infrastructural reset. That is a design decision made in year one for a building that will be reconfigured over its life.",
        ],
        bullets: [
          "20 m high storage and distribution warehouse, 35,000 m²",
          "Multiple temperature-controlled storage zones",
          "Annexure buildings and full on-site infrastructure",
          "Future expansion capacity built into the design",
        ],
      },
      {
        heading: "Reading a 20 m high hall",
        paragraphs: [
          "At 20 m, the internal volume is large enough that the building behaves less like a room and more like a piece of infrastructure. The consequences show up in a few predictable places.",
          "Racking dominates the floor plate. The racking layout, aisle widths, and turning radii for forklift traffic determine how much of the 35,000 m² is actually usable storage, and racking is a client and operational decision that has to be made before the architectural layout can be optimised rather than after.",
          "The roof is a large uninterrupted plane, so drainage, and the detailing of every penetration through it, is a genuine design problem rather than a routine detail. Fire protection has to be coordinated against the racking and the sprinkler layout, which is visible on site in the marked fire protection lanes running across the floor.",
          "The building also has to work at ground level as a logistics environment: numbered loading bays, dock levelers, and enough manoeuvring space for trucks to turn. The loading elevation is not a secondary facade; it is the operational face of the building.",
        ],
      },
      {
        heading: "The building in use",
        paragraphs: [
          "The completed facility shows the two halves of the programme clearly. Externally, a blue and white panel-clad elevation with a numbered loading run — bays 25 through 30 visible along the long face — and a high-bay automated storage hall inside, with tall pallet racking, marked floor zones, and sprinkler distribution running above the aisles.",
          "Internally there is a full open-plan office floor alongside the warehouse, with workstations under a linear lighting grid and perimeter glazing looking out to the site. A marble-clad circulation area provides the more formal entrance sequence.",
          "The night photographs are worth noting for a different reason: they show the canopy and dock lighting design working as a single continuous band along the elevation, which is what makes a building of this size read as one volume at night instead of a series of lit openings.",
        ],
        bullets: [
          "Panel-clad elevation with numbered loading bays 25 to 30",
          "High-bay automated storage with tall pallet racking",
          "Marked fire protection lanes across the distribution floor",
          "Open-plan warehouse office with perimeter glazing",
          "Marble-clad entrance circulation",
        ],
      },
      {
        heading: "What this project taught me about documentation",
        paragraphs: [
          "[VERIFY: this section should be your own account. What was genuinely difficult about documenting this building? Specific candidates: coordinating the controlled-zone envelopes against the racking, the roof penetrations, the expansion provision, the dock interface.]",
          "The general point is worth making though. Buildings like this are drawn, reviewed, and built as a long sequence of interfaces, and the architectural documentation is the layer where all of them have to meet. A 20 m steel frame with multiple internal envelopes and a live expansion strategy is not a building where a drawing set can be produced once and closed.",
        ],
      },
      {
        heading: "Project facts",
        paragraphs: ["Published project data:"] ,
        bullets: [
          "Client: National Unified Procurement Company (NUPCO)",
          "Consultant: V3 Middle East",
          "Contractor: Youssef Marroun Contracting Co.",
          "Location: Al Jouf, Saudi Arabia",
          "Area: 35,000 m²",
          "Structure: 20 m high warehouse",
          "Category: Storage and distribution warehouse",
          "Status: Completed",
        ],
      },
    ],
    relatedSlugs: [
      "red-sea-central-distribution-center-cdc",
      "coordinating-architecture-and-mep-in-high-bay-warehouses",
      "architectural-project-delivery-in-saudi-arabia",
    ],
  },
  {
    slug: "riyadh-air-training-centre-ksa-dmp",
    title: "Riyadh Air Training Centre: Coordinating a 21 m Simulator Hall Inside the GACA Complex",
    description:
      "An 11,560 m² aircraft cabin crew training centre and simulators building for Riyadh Air — a 21 m steel simulator hall paired with a three-level concrete classroom and office building.",
    category: "PROJECT",
    readingTime: "8 MIN READ",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    projectSlug: "riyadh-air-academy",
    sourceNote:
      "Project facts (client, area, scope, status) are published by Youssef Marroun Contracting Co. in its company profile. Interior visuals and elevation information are by Stylus ASD / Savills and are their work, not mine — the Stylus renders are credited accordingly and are not presented as my visualisation. Statements about my own contribution are marked for verification.",
    keywords: [
      "Riyadh Air Training Centre",
      "GACA complex project",
      "aircraft cabin crew training centre Saudi Arabia",
      "Riyadh Air simulators building",
      "KSIA district master plan aviation",
      "flight training facility architecture Saudi Arabia",
      "Riyadh stone cladding aviation building",
    ],
    intro:
      "An aviation training facility has to do two contradictory things at once: house simulators that need very large, very clear volumes, and provide classrooms and offices that need small, acoustically controlled, daylit rooms. Most of the design work is in managing that contrast.",
    sections: [
      {
        heading: "What the building is",
        paragraphs: [
          "The Riyadh Air Training Centre is an 11,560 m² aircraft cabin crew training centre and simulators building for Riyadh Air, located in the Airport Road GACA Complex in Riyadh. Savills and Stylus were the consultants; Youssef Marroun Contracting Co. is the contractor. The project is ongoing.",
          "The site sits within the King Salman International Airport District Master Plan framework, and the final revised elevations were aligned with the KSIA guidelines. That is not a cosmetic constraint — airport district guidelines govern the massing, the material palette, and the visual relationship between buildings, so they affect the architecture from the first elevation study rather than being applied as a check at the end.",
          "The building is composed of two very different elements. There is a 21 metre high steel structure simulator building, and a three-level concrete building that houses the administration, offices, classrooms, and facility areas.",
        ],
      },
      {
        heading: "Two buildings, two sets of requirements",
        paragraphs: [
          "A cabin crew simulator hall is a volume problem. Simulators are large, they need to be approached and manoeuvred into position, they need overhead clearance for maintenance access, and they need a controlled internal environment so that the training result is not affected by the weather outside.",
          "The classrooms and offices that support that training are a completely different problem. They need daylight, acoustic control, finishes that can be maintained, and a plan that supports circulation between rooms on a timetable rather than vehicle movement on a floor plate.",
          "Setting the two elements side by side — a tall steel hall and a lower concrete building with regular floors — is the basic architectural move, and it is legible on site. The stone-clad volume with its narrow vertical window openings reads very differently from the glazed base beneath it and from the long logistics elements alongside.",
        ],
        bullets: [
          "21 m high steel structure simulator building",
          "Three-level concrete building for admin, offices and classrooms",
          "Located in the Airport Road GACA Complex",
          "Elevations aligned to King Salman International Airport guidelines",
        ],
      },
      {
        heading: "The material palette was set by the master plan",
        paragraphs: [
          "The elevation package specifies the facade materials directly. Yellow Riyadh stone is used on the office building. Coregated coated metal is used on the logistic buildings. Bronze metal is used as an accent. The classroom buildings are clad in Riyadh stone and dark metal, with the dark metal option developed in response to comments on the earlier scheme.",
          "Working to a prescribed palette is a discipline of its own. Riyadh stone is a local material with real performance and maintenance implications; coregated metal is a different system entirely, in terms of fixing, tolerances, and how it moves. Getting those two to meet cleanly on the same elevation, and finding where bronze can be used as an accent without becoming decoration for its own sake, is a genuine design and documentation task.",
          "[VERIFY: how did you handle the interface between Riyadh stone and coregated metal? And was the dark metal classroom option something you coordinated heavily?]",
        ],
        bullets: [
          "Yellow Riyadh stone — office building",
          "Coregated coated metal — logistic buildings",
          "Bronze metal — accent",
          "Riyadh stone and dark metal — classroom buildings",
        ],
      },
      {
        heading: "The interior programme",
        paragraphs: [
          "Stylus ASD developed the interior design for the training centre, and the published visual set covers eight space types: reception, cafeteria, classroom, majlis, office, instructor's room, briefing room, and corridor.",
          "That list is worth reading as a brief rather than a menu. A flight training facility needs a reception that handles visitor flows separately from trainees, a majlis for formal hospitality, a briefing room adjacent to the simulators, and an instructor's room that supports the teaching team specifically. Each exists because of how aviation training actually runs.",
          "These visuals are the designer's work and are credited to Stylus ASD. They are useful reference for understanding the intended spatial character, but they are not my visualisation output.",
        ],
      },
      {
        heading: "Coordinating the build",
        paragraphs: [
          "The site photographs show the project during construction, and they are useful because they show the coordination reality rather than the render. A steel frame being erected beside a stone-clad volume that is already finished means two very different trades, tolerances, and programmes running side by side on one site.",
          "The primary steel frame with its RL aviation lettering is visible alongside the completed stone cladding, which is exactly the condition where a coordination error becomes expensive: once one element is closed up, an interface that was only a drawing issue becomes a physical one.",
          "[VERIFY: describe the coordination challenges you actually worked through on this project. Any specifics about sequencing, the interface between the steel hall and the concrete building, or shop drawing turnaround will be far more valuable than general commentary.]",
        ],
        bullets: [
          "Primary steel frame erected alongside completed stone cladding",
          "Multiple trades and programmes running concurrently on one site",
          "Simulator hall, classroom building and logistics elements",
        ],
      },
      {
        heading: "Project facts",
        paragraphs: ["Published project data:"] ,
        bullets: [
          "Client: Riyadh Air",
          "Consultant: Savills / Stylus",
          "Contractor: Youssef Marroun Contracting Co.",
          "Location: Airport Road, GACA Complex, Riyadh, Saudi Arabia",
          "Area: 11,560 m²",
          "Structure: 21 m high steel simulator building plus 3-level concrete building",
          "Category: Training centre",
          "Status: On going",
        ],
      },
    ],
    relatedSlugs: [
      "cladding-for-ksia-guidelines-riyadh-stone-and-coregated-metal",
      "red-sea-central-transportation-hub-and-qc-lab",
      "why-3d-architectural-visualization-matters-before-construction",
    ],
  },
  {
    slug: "red-sea-central-distribution-center-cdc",
    title: "Red Sea Central Distribution Center: 50,600 m² of Logistics at 14 m",
    description:
      "A one-stop-shop logistics warehouse for The Red Sea Real Estate Co. — 14 m high steel structure, 50,600 m², serving food, OS&E and consumables distribution for the Red Sea corridor.",
    category: "PROJECT",
    readingTime: "6 MIN READ",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    projectSlug: "red-sea-central-distribution-center",
    sourceNote:
      "Project facts (client, area, scope, status) are published by Youssef Marroun Contracting Co. in its company profile. Consultant: Khatib & Alami. Statements about my own contribution are marked for verification.",
    keywords: [
      "Red Sea Central Distribution Center",
      "CDC logistics warehouse Red Sea",
      "one stop shop warehouse Saudi Arabia",
      "50,600 sqm logistics building",
      "Red Sea Real Estate Company logistics",
      "14m steel warehouse design",
      "food OS&E consumables distribution centre",
    ],
    intro:
      "This is the largest building in my current portfolio at 50,600 m², and the brief behind it is a single sentence: one place where everything gets stored and dispatched from.",
    sections: [
      {
        heading: "What the building is",
        paragraphs: [
          "The Red Sea Central Distribution Center, referred to on site as the CDC, is a 50,600 m² logistics warehouse for The Red Sea Real Estate Co. in the West Region of Saudi Arabia, with Khatib & Alami as consultant and Youssef Marroun Contracting Co. as contractor.",
          "The published scope describes it as a 14 m high steel structure logistics warehouse building providing a one-stop-shop service, covering bulk storage and delivery for a wide range of generic and brand-specific products — specifically food, OS&E, and consumables.",
          "The same client also delivered the Central Transportation Hub on this project. Delivering both a transport facility and a distribution centre for the same developer, in the same region, gave a useful view of how the two building types differ.",
        ],
      },
      {
        heading: "What one-stop-shop actually requires",
        paragraphs: [
          "The phrase one-stop-shop sounds like a marketing convenience. In practice it is a hard operational requirement, and it changes the building.",
          "Combining food, OS&E and consumables in one facility means a single building has to handle inventory with completely different characteristics. Food has expiry and temperature requirements. OS&E — operational and maintenance equipment — is irregular in size and awkward to rack. Consumables are high-volume and fast-moving. Combining them means the racking strategy, the picking routes, and the internal zoning all have to accommodate the least convenient of those profiles.",
          "The consequence is that a one-stop-shop facility is rarely organised as one space. It is divided into zones with different densities and different handling regimes, which puts the architectural layout, the slab, the loading interface, and the fire strategy in direct tension with each other.",
        ],
        bullets: [
          "14 m high steel structure logistics warehouse",
          "50,600 m² total area",
          "One-stop-shop model covering food, OS&E and consumables",
          "Bulk storage and distribution in a single facility",
        ],
      },
      {
        heading: "The inserted mezzanine",
        paragraphs: [
          "The most significant architectural decision visible in the building is the inserted mezzanine office. Rather than placing administration in a separate block, the office floor is set into the warehouse volume above the operating floor, with a glazed balustrade overlooking the racking and distribution space.",
          "This is efficient in plan terms, and it has a real effect on how the building is used. Supervisory and administrative staff are present above the operation they are coordinating rather than in a separate building across a car park, which changes how quickly a problem on the floor gets escalated.",
          "[VERIFY: was the mezzanine at the level and position shown, and was the level set by the racking height or by the office programme?]",
        ],
      },
      {
        heading: "Reading the interior",
        paragraphs: [
          "The warehouse interior shows the high-bay racking and mezzanine structure working together, with the exposed roof structure, sprinkler distribution, and a clear floor plate marked out for traffic and storage zones.",
          "The long external elevation reads as a single horizontal band rather than a series of separate volumes, which is a common and effective move for a building of this length — it avoids the fragmentation that comes from articulating a 50,000 m² facade.",
          "[VERIFY: add anything specific about documentation or coordination on this project. It is the largest building in the portfolio and readers will expect detail.]",
        ],
      },
      {
        heading: "Project facts",
        paragraphs: ["Published project data:"] ,
        bullets: [
          "Client: The Red Sea Real Estate Co.",
          "Consultant: Khatib & Alami",
          "Contractor: Youssef Marroun Contracting Co.",
          "Location: Red Sea, West Region, Saudi Arabia",
          "Area: 50,600 m²",
          "Structure: 14 m high steel building",
          "Category: Logistics warehouse building",
          "Status: Completed",
        ],
      },
    ],
    relatedSlugs: [
      "red-sea-central-transportation-hub-and-qc-lab",
      "nupco-al-jouf-temperature-controlled-warehouse",
      "architectural-design-and-construction-coordination",
    ],
  },
  {
    slug: "french-fries-processing-facility-sudair",
    title: "Erecting a 15 m Processing Hall in Sudair: French Fries Facility Steelwork",
    description:
      "A 40,000 m² food processing facility in Sudair, Riyadh — a 15 m high steel processing building over four floors, a separate 13 m cold store, and the steel erection sequence behind both.",
    category: "PROJECT",
    readingTime: "6 MIN READ",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    projectSlug: "french-fries-processing-facility",
    sourceNote:
      "Project facts (client, area, scope, status) are published by Youssef Marroun Contracting Co. in its company profile. Consultant: Shahin Engineering. Statements about my own contribution are marked for verification.",
    keywords: [
      "French fries processing facility Saudi Arabia",
      "food processing plant Sudair Riyadh",
      "Agricultural Growth and Processing Company",
      "steel structure food factory design",
      "cold store building design Saudi Arabia",
      "industrial steel erection sequence",
      "15m processing facility architecture",
    ],
    intro:
      "This project is mostly photographs of steelwork, which makes it more useful than it might sound. Reading an erection sequence tells you more about how a building will be coordinated than a finished photograph ever does.",
    sections: [
      {
        heading: "What the project is",
        paragraphs: [
          "The French Fries Processing Facility is a factory building for Agricultural Growth and Processing Co. in Sudair, Riyadh, with Shahin Engineering as consultant and Youssef Marroun Contracting Co. as contractor. The site area is 40,000 m² and the project is ongoing.",
          "The published scope is a 15 m high processing facility steel building with four floors including administration, together with a separate cold store building 13 m high, plus auxiliary buildings.",
          "There are two distinct buildings on the site with two distinct heights, 15 m and 13 m, which is an interesting pairing. A processing hall and a cold store are not simply different sizes of the same thing; they have different thermal requirements, different internal environments, and different reasons for their height.",
        ],
        bullets: [
          "15 m high steel processing facility over four floors",
          "Separate 13 m high cold store building",
          "Auxiliary buildings across a 40,000 m² site",
          "Administration accommodated within the processing building",
        ],
      },
      {
        heading: "Why the four floors matter",
        paragraphs: [
          "Putting administration on four floors inside a 15 m processing building is a vertical stacking decision with real consequences. It keeps the office programme inside the industrial envelope rather than spreading it across the site, which is valuable on a 40,000 m² plot that also has to take a cold store and auxiliary buildings.",
          "It also means the building is not a single clear volume. A four-storey occupied zone inside a 15 m frame needs a different structural grid from the process hall above it, different fire and egress strategy, and a different relationship to the industrial floor. Coordination between the two is where most of the documentation effort on a project like this sits.",
          "[VERIFY: describe how the office floors were integrated with the process hall — separate frame, shared frame, and how services were separated.]",
        ],
      },
      {
        heading: "Reading the erection sequence",
        paragraphs: [
          "The site photographs document the steel erection directly, and they are worth studying as a sequence rather than as images.",
          "The wide view shows the primary portal frames spanning the full 15 m with the crane working the grid, which tells you the frame was erected as discrete bays rather than in large assembled sections. The interior view shows the relationship between the steel frame and precast concrete columns within the same structure, and the final view shows two cranes setting columns over the foundation grid — meaning the erection was being driven from the foundations upward in a deliberate order rather than opportunistically.",
          "For an architectural engineer this matters because erection sequence constrains the documentation. Anything the architect has drawn that the steel contractor needs to build in a different order becomes a shop drawing revision, and anything that cannot be sequenced is a programme risk.",
        ],
        bullets: [
          "Primary portal frames erected in discrete bays",
          "Steel frame working alongside precast concrete columns",
          "Foundation grid established before frame erection",
          "Two cranes managing column setting over the grid",
        ],
      },
      {
        heading: "What the construction phase is actually for",
        paragraphs: [
          "A building that exists only as a steel frame is an unusual thing to publish, and it is a deliberate choice rather than an absence of content. It is the phase where coordination is most visible, because everything is still adjustable.",
          "[VERIFY: this should be your account of what the construction phase looked like from the documentation side — how much of the architectural package was resolved before steel was erected, and what had to change once it was up.]",
          "The general principle is that the value of coordination during construction is entirely in what you resolve early. A decision made before fabrication is a drawing revision. The same decision made after the steel is up is a physical change with a cost attached.",
        ],
      },
      {
        heading: "Project facts",
        paragraphs: ["Published project data:"] ,
        bullets: [
          "Client: Agricultural Growth and Processing Co.",
          "Consultant: Shahin Engineering",
          "Contractor: Youssef Marroun Contracting Co.",
          "Location: Sudair, Riyadh, Saudi Arabia",
          "Area: 40,000 m²",
          "Structure: 15 m high processing building over 4 floors, plus 13 m cold store",
          "Category: Factory building",
          "Status: On going",
        ],
      },
    ],
    relatedSlugs: [
      "coordinating-architecture-and-mep-in-high-bay-warehouses",
      "architectural-project-delivery-in-saudi-arabia",
      "red-sea-central-distribution-center-cdc",
    ],
  },
];
