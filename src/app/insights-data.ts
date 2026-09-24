export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  intro: string;
  sections: InsightSection[];
  relatedSlugs: string[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "from-concept-to-construction-the-architectural-design-process",
    title: "From Concept to Construction: The Architectural Design Process",
    description:
      "A practical guide to the architectural design process, from the first brief and concept to technical documentation, coordination, and construction handover.",
    category: "ARCHITECTURE",
    readingTime: "8 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "architectural design process",
      "architectural design Saudi Arabia",
      "architectural documentation",
      "construction coordination",
    ],
    intro:
      "A successful building is rarely the result of one dramatic idea. It is the outcome of a sequence of clear decisions, each one tested against the brief, the site, the budget, the people who will use the space, and the realities of construction.",
    sections: [
      {
        heading: "A project starts with decisions",
        paragraphs: [
          "The early phase of an architectural project is often described as concept development, but the most important work happens before the first image is made. The team needs to understand the purpose of the building, who will occupy it, how it should perform, what constraints shape it, and what success will look like.",
          "A useful brief turns aspirations into measurable questions. What are the required adjacencies? How should daylight and movement work? Which decisions can be made now, and which need specialist input? A clear brief gives design, visualization, and construction teams a shared reference point.",
        ],
      },
      {
        heading: "Concept development makes the idea testable",
        paragraphs: [
          "Concept development is where an architectural idea becomes spatial. Sketches, massing studies, diagrams, and early 3D models help the team test proportion, access, circulation, views, and relationships between spaces.",
          "The strongest concept is not simply the most expressive image. It is the idea that can absorb change. A good concept can explain why a wall is located where it is, how daylight enters a room, and how the building can be documented and built.",
        ],
        bullets: [
          "Test the idea at multiple scales before refining details.",
          "Compare options instead of defending the first proposal.",
          "Record assumptions that may affect cost, approval, or construction.",
        ],
      },
      {
        heading: "Design development turns the concept into a system",
        paragraphs: [
          "During design development, the project moves from broad spatial ideas toward coordinated decisions. Plans, sections, elevations, material decisions, structural interfaces, and technical requirements begin to relate to one another.",
          "This is where design intent should become explicit. If a ceiling is important to the acoustic experience, that intention needs to be communicated through coordination. If a material must be durable in a high-use area, the specification and detail should reflect that decision.",
        ],
      },
      {
        heading: "Documentation is part of the design",
        paragraphs: [
          "Architectural documentation connects the design conversation to the people who will construct and maintain the building. Drawings need to be legible, consistent, and useful in the field, not simply complete on paper.",
          "Revit, AutoCAD, schedules, and detail information should work as a connected system. The goal is not more information; it is the right information, available at the moment a decision is needed.",
        ],
      },
      {
        heading: "Construction is the final test",
        paragraphs: [
          "Construction reveals what the design has clarified and what it has left ambiguous. Site conditions, procurement, sequencing, trades, and workmanship can change the assumptions made in the office.",
          "Good architectural design process management treats construction as a continuation of design. Questions are answered early, changes are recorded, and lessons from the site are fed back into the documentation so the project can move forward with fewer surprises.",
        ],
        bullets: [
          "Coordinate before fabrication, not after installation.",
          "Keep decisions visible to the full project team.",
          "Treat handover information as part of the design deliverable.",
        ],
      },
    ],
    relatedSlugs: [
      "what-does-an-architectural-engineer-do",
      "architectural-design-and-construction-coordination",
      "revit-autocad-and-modern-architectural-documentation",
    ],
  },
  {
    slug: "what-does-an-architectural-engineer-do",
    title: "What Does an Architectural Engineer Do?",
    description:
      "Learn how an architectural engineer connects design intent, technical documentation, construction coordination, and practical project delivery.",
    category: "PROFESSIONAL INSIGHT",
    readingTime: "7 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "Architectural Engineer Saudi Arabia",
      "Architectural Engineer Riyadh",
      "architectural engineering",
      "construction project delivery",
    ],
    intro:
      "Architecture and engineering meet at the point where an idea has to become a building. An architectural engineer works across that boundary, making sure the design is not only expressive but also buildable, coordinated, and useful.",
    sections: [
      {
        heading: "The role is broader than drawing",
        paragraphs: [
          "The architectural engineer is involved in the relationship between the building and the people who use it. That includes spatial planning, technical documentation, design review, material decisions, construction information, and the ongoing conversation between design teams and site teams.",
          "The exact scope changes from project to project. In one setting the work may focus on shop drawings and technical packages; in another it may include design development, BIM coordination, site review, and handover support.",
        ],
      },
      {
        heading: "Design and technical thinking",
        paragraphs: [
          "Architecture requires an understanding of proportion, circulation, access, light, and the way a space supports its function. Engineering adds the need to understand how those intentions are dimensioned, detailed, checked, and transferred into buildable information.",
          "This is why architectural engineering is not simply a software skill. Revit and AutoCAD can help produce and organize information, but the engineer still needs to know what the information means and how it will behave in the project.",
        ],
        bullets: [
          "Translate design intent into measurable components.",
          "Check that spaces, systems, and details can work together.",
          "Resolve issues before they become expensive site changes.",
        ],
      },
      {
        heading: "Coordination is a core responsibility",
        paragraphs: [
          "Buildings are delivered by many specialist parties. Coordination means understanding where responsibilities meet and making sure information is shared at the right time. A drawing issue may be technical, but it often affects schedule, procurement, and construction sequence.",
          "Clear coordination reduces uncertainty. It gives consultants and contractors a reliable basis for decisions and gives the project a better chance of progressing with fewer avoidable conflicts.",
        ],
      },
      {
        heading: "Site experience changes the design",
        paragraphs: [
          "Site visits expose information that may not be visible in a model: actual dimensions, access constraints, sequencing, work already completed, and the difference between an intended detail and the conditions on the ground.",
          "For an Architectural Engineer in Riyadh or elsewhere in Saudi Arabia, that connection between documentation and site reality is especially important. Local requirements, project teams, and construction conditions all shape how information must be applied.",
        ],
      },
      {
        heading: "A practical professional profile",
        paragraphs: [
          "The most useful architectural engineers are able to move between scales. They can discuss the intention of a project with a client, explain a technical issue to a consultant, and support a site team with a detail that is clear enough to use.",
          "That range makes architectural engineering a highly practical discipline. It values technical knowledge, but it also depends on communication, documentation discipline, and respect for the people who will build the work.",
        ],
      },
    ],
    relatedSlugs: [
      "from-concept-to-construction-the-architectural-design-process",
      "the-role-of-architectural-engineering-in-construction-projects",
      "architectural-project-delivery-in-saudi-arabia",
    ],
  },
  {
    slug: "the-role-of-architectural-engineering-in-construction-projects",
    title: "The Role of Architectural Engineering in Construction Projects",
    description:
      "Understand how architectural engineering supports construction projects through design development, technical packages, site coordination, compliance, and handover.",
    category: "CONSTRUCTION",
    readingTime: "8 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "architectural engineering in construction",
      "construction coordination",
      "architectural documentation",
      "Saudi Arabia construction projects",
    ],
    intro:
      "Construction projects carry more information than any single drawing can contain. Architectural engineering gives that information a structure, checks how it relates to the design, and helps the project team make decisions in the real conditions of a building site.",
    sections: [
      {
        heading: "The design-to-site bridge",
        paragraphs: [
          "A construction project is a conversation between design intent and physical execution. The architect defines the spatial and visual intention; engineers and specialists translate that intention into systems; contractors and site teams test it through the work.",
          "Architectural engineering supports that conversation by keeping the building logic visible across all three levels. It helps ensure that a detail is not only attractive on a sheet but also compatible with the structure, services, finishes, and sequence around it.",
        ],
      },
      {
        heading: "Pre-construction information",
        paragraphs: [
          "Before fabrication and installation, the project needs a reliable information set. Shop drawings, working drawings, schedules, material details, and coordination models can expose questions while there is still time to answer them.",
          "The quality of pre-construction information affects the quality of site decisions. When a drawing is ambiguous, the site may fill the gap with an assumption. When a detail is coordinated, the team can focus on execution rather than interpretation.",
        ],
        bullets: [
          "Coordinate architectural information with structural and MEP requirements.",
          "Make dimensions, tolerances, and interfaces explicit.",
          "Record revisions so the site works from the current information.",
        ],
      },
      {
        heading: "Site coordination and compliance",
        paragraphs: [
          "Construction introduces changing conditions. Work already completed, available materials, access routes, and sequencing can affect how the remaining project is delivered. Site coordination is the process of connecting those realities to the intended design and the documented requirements.",
          "Compliance is part of this work, but it should be treated as project-specific and verified against the current authority and contract requirements. Architectural documentation supports compliance by making the design and approved decisions legible and traceable.",
        ],
      },
      {
        heading: "Quality and handover",
        paragraphs: [
          "Quality control is not only about spotting defects. It is about maintaining the design intent through the final stages of the project. Reviews, inspections, snag discussions, and close-out information all need to connect back to the approved design information.",
          "A well-supported handover gives the client and facility team a building they can understand and operate. It is also a final test of whether the architectural engineering process was clear, coordinated, and practical from beginning to end.",
        ],
      },
    ],
    relatedSlugs: [
      "what-does-an-architectural-engineer-do",
      "architectural-design-and-construction-coordination",
      "architectural-project-delivery-in-saudi-arabia",
    ],
  },
  {
    slug: "architectural-design-and-construction-coordination",
    title: "Architectural Design and Construction Coordination",
    description:
      "A practical guide to connecting architectural design intent with construction documentation, site decisions, and reliable project delivery.",
    category: "COORDINATION",
    readingTime: "7 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "architectural design and construction coordination",
      "construction coordination",
      "architectural documentation",
      "Revit architectural design",
    ],
    intro:
      "A design can be clear on paper and still become difficult to build if the information between disciplines is not coordinated. Coordination is the discipline of making the parts of a project agree before they become expensive problems on site.",
    sections: [
      {
        heading: "Coordination starts with intent",
        paragraphs: [
          "The most useful coordination begins with an understanding of why a design decision was made. A window position may be about daylight, privacy, structure, acoustics, or a combination of requirements. Without that context, a reviewer can see a conflict but cannot propose the right response.",
          "Clear architectural intent gives the project team a shared reference. It allows technical decisions to protect the design rather than simply remove an obstruction from a drawing.",
        ],
      },
      {
        heading: "Information needs a hierarchy",
        paragraphs: [
          "Not every issue should be solved at the same level of detail. A coordination meeting may use a model or diagram to resolve a spatial conflict, while a shop drawing is used to confirm fabrication information. A detail is then needed where the interface requires precise dimensions.",
          "This hierarchy keeps the project focused. It also reduces the temptation to add unnecessary detail before the major decisions are stable.",
        ],
        bullets: [
          "Resolve major interfaces before refining small details.",
          "Use the right drawing or model for the question being asked.",
          "Keep the source of truth clear for the whole team.",
        ],
      },
      {
        heading: "Questions should travel with the decision",
        paragraphs: [
          "A coordination issue is not resolved when someone gives an answer in a meeting. The answer needs to be communicated, documented, and checked by the people who will use it. A marked-up drawing, a model view, or a written response can each work, provided the project has a clear convention.",
          "When information is scattered across email threads and personal files, the risk of using an outdated decision increases. A shared information structure makes the project more resilient.",
        ],
      },
      {
        heading: "Coordination continues through handover",
        paragraphs: [
          "The final stages of construction are still coordination stages. Changes made during commissioning, snagging, or finishing work need to be reflected in the final record. The team should know which details were changed, which items remain outstanding, and what information the client will receive.",
          "Good coordination is not administrative overhead. It is a way of protecting the design intent while making the project buildable.",
        ],
      },
    ],
    relatedSlugs: [
      "from-concept-to-construction-the-architectural-design-process",
      "the-role-of-architectural-engineering-in-construction-projects",
      "revit-autocad-and-modern-architectural-documentation",
    ],
  },
  {
    slug: "why-3d-architectural-visualization-matters-before-construction",
    title: "Why 3D Architectural Visualization Matters Before Construction",
    description:
      "Learn how 3D architectural visualization helps teams test space, communicate design intent, and reduce uncertainty before construction begins.",
    category: "VISUALIZATION",
    readingTime: "6 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "3D architectural visualization",
      "architectural rendering",
      "architectural design Saudi Arabia",
      "design communication",
    ],
    intro:
      "3D architectural visualization is often described as a presentation tool. Its more valuable role happens earlier: it gives a project team a way to see, test, and discuss the building before the decisions become expensive to change.",
    sections: [
      {
        heading: "A model makes spatial ideas discussable",
        paragraphs: [
          "Plans and sections are precise, but they can make spatial experience abstract. A 3D model lets a team look at proportion, visibility, movement, daylight, and material relationships in one shared view.",
          "That shared view is valuable because it creates a common reference. A client, designer, consultant, and contractor can point to the same condition instead of interpreting separate drawings differently.",
        ],
      },
      {
        heading: "Visualization is a design test",
        paragraphs: [
          "A model can reveal that a corridor feels too long, that a room does not receive the intended light, or that a façade is difficult to read from the approach. These are design findings, not failures.",
          "The earlier a team can test an idea, the more options remain for responding. A change in a concept model may be a design decision; the same change after drawings are approved may become a variation, cost, or delay.",
        ],
        bullets: [
          "Test circulation and sightlines before they are built into details.",
          "Compare material and daylight options in context.",
          "Use images to support decisions, not replace technical information.",
        ],
      },
      {
        heading: "It aligns expectations",
        paragraphs: [
          "A clear architectural rendering can help a client understand the intended atmosphere, scale, and experience. That shared expectation is valuable when design, procurement, and construction happen across different teams and schedules.",
          "The image should be honest about what is known and what is still being developed. A visualization is most useful when it communicates the current design intent rather than creating an expectation the technical project cannot support.",
        ],
      },
      {
        heading: "Visualization and documentation work together",
        paragraphs: [
          "The strongest workflow connects visualization to the design model and the construction information set. A material or geometry decision made in a visual study can be carried into Revit, AutoCAD, specifications, and coordination views.",
          "That connection is why 3D architectural visualization is not separate from architectural documentation. It is another way of testing and communicating the same architectural decisions.",
        ],
      },
    ],
    relatedSlugs: [
      "from-3d-model-to-final-architectural-rendering",
      "from-concept-to-construction-the-architectural-design-process",
      "architectural-design-and-construction-coordination",
    ],
  },
  {
    slug: "from-3d-model-to-final-architectural-rendering",
    title: "From 3D Model to Final Architectural Rendering",
    description:
      "A practical workflow for turning an architectural 3D model into a clear, believable final architectural rendering without losing design accuracy.",
    category: "RENDERING",
    readingTime: "7 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "architectural rendering",
      "3D architectural visualization",
      "architectural model",
      "visualization workflow",
    ],
    intro:
      "A convincing architectural rendering is the result of many decisions, not one dramatic texture or lighting setup. The final image becomes useful when it communicates the design accurately, supports a project decision, and remains connected to the model behind it.",
    sections: [
      {
        heading: "Start with an accurate model",
        paragraphs: [
          "The rendering workflow begins before the camera is placed. Geometry, proportions, openings, materials, and visible construction details need to be settled enough for the image to represent the design honestly.",
          "A model that is still missing critical interfaces may produce a beautiful image, but it can also hide a coordination issue. Modeling and rendering should therefore remain connected to the architectural design process.",
        ],
      },
      {
        heading: "Materials need more than a texture",
        paragraphs: [
          "Material realism comes from scale, reflectivity, surface variation, and the way a surface responds to light. A tile, timber, metal, or plaster finish can look different at a different scale or orientation, so material testing should happen in the model context.",
          "The goal is not to make every surface look busy. The material should support the architectural intention and help the viewer understand the space.",
        ],
        bullets: [
          "Check texture scale against real-world dimensions.",
          "Test roughness and reflectivity under different light conditions.",
          "Keep the material library aligned with the specification.",
        ],
      },
      {
        heading: "Camera, light, and atmosphere",
        paragraphs: [
          "The camera determines what the viewer understands first. A wide view can communicate massing and context; a closer view can show material, proportion, and the quality of light inside a space.",
          "Lighting should support the architecture rather than disguise it. Sun direction, sky conditions, interior sources, and reflections can all help explain how the building is expected to be experienced.",
        ],
      },
      {
        heading: "Post-production with restraint",
        paragraphs: [
          "Post-production can improve clarity, but excessive effects can make an image feel detached from the project. A restrained workflow should correct contrast, refine exposure, organize visual emphasis, and remove distractions while preserving the design information.",
          "Before delivery, compare the final image with the model, drawing set, and agreed design intent. If the render introduces an element that is not part of the design, the image needs review before it is used to communicate a decision.",
        ],
      },
    ],
    relatedSlugs: [
      "why-3d-architectural-visualization-matters-before-construction",
      "architectural-design-and-construction-coordination",
      "revit-autocad-and-modern-architectural-documentation",
    ],
  },
  {
    slug: "architectural-project-delivery-in-saudi-arabia",
    title: "Architectural Project Delivery in Saudi Arabia",
    description:
      "A practical overview of architectural project delivery in Saudi Arabia, including coordination, documentation, site review, local requirements, and handover.",
    category: "SAUDI ARABIA",
    readingTime: "8 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "Architectural Engineer Saudi Arabia",
      "Architectural Engineer Riyadh",
      "architectural design Saudi Arabia",
      "architectural project delivery",
    ],
    intro:
      "Architectural project delivery in Saudi Arabia requires more than moving a design from an office to a site. Teams need clear information, coordination with local requirements, and the ability to respond to the practical conditions of a fast-moving construction environment.",
    sections: [
      {
        heading: "Regional context changes the workflow",
        paragraphs: [
          "Every project has a local context. Site conditions, authority processes, procurement methods, consultant structures, climate, and construction sequencing can shape the way information is reviewed and approved.",
          "For an Architectural Engineer in Riyadh, that context is part of the technical work. A design decision should be evaluated against the project requirements and the applicable current guidance, not against a generic assumption about how buildings are delivered.",
        ],
      },
      {
        heading: "Documentation must be ready for review",
        paragraphs: [
          "Projects that involve consultants, contractors, and authority review depend on documentation that is organized and easy to question. Drawings need clear revision information, consistent references, and a visible relationship between plans, sections, details, and schedules.",
          "A technical package is not only a collection of sheets. It is a communication system that helps different parties understand the same building.",
        ],
        bullets: [
          "Confirm the current project and authority requirements before submission.",
          "Keep revisions, comments, and approvals traceable.",
          "Coordinate architectural information with the wider project team.",
        ],
      },
      {
        heading: "Site review keeps documentation connected",
        paragraphs: [
          "Site reviews are an opportunity to compare the intended detail with the work in progress. They can reveal sequencing issues, missing information, material questions, and conditions that need to be reflected in the drawings.",
          "The value of a site review depends on preparation and follow-up. A useful review records the observation, identifies the decision required, and communicates the result to the people who need to act.",
        ],
      },
      {
        heading: "Handover is part of project delivery",
        paragraphs: [
          "A project is not complete when the last visible task is finished. Handover requires the final information, outstanding items, quality checks, and records to be understood by the client and the team responsible for the next phase.",
          "For architectural project delivery, the strongest outcome is a building that can be operated and understood, supported by documentation that reflects what was actually built.",
        ],
      },
    ],
    relatedSlugs: [
      "what-does-an-architectural-engineer-do",
      "the-role-of-architectural-engineering-in-construction-projects",
      "architectural-design-and-construction-coordination",
    ],
  },
  {
    slug: "revit-autocad-and-modern-architectural-documentation",
    title: "Revit, AutoCAD and Modern Architectural Documentation",
    description:
      "Understand how Revit architectural design and AutoCAD documentation work together in a coordinated architectural information workflow.",
    category: "DOCUMENTATION",
    readingTime: "7 MIN READ",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    keywords: [
      "Revit architectural design",
      "architectural documentation",
      "AutoCAD architectural drawings",
      "BIM coordination",
    ],
    intro:
      "Revit and AutoCAD are often described as competing tools, but they can support different parts of the same architectural information system. The important question is not which tool is used; it is whether the information is organized, coordinated, and useful to the project.",
    sections: [
      {
        heading: "Revit supports model-based information",
        paragraphs: [
          "Revit architectural design is valuable when the project benefits from a model that connects spaces, components, views, and requirements. A model can help a team test relationships and understand how a change affects several views.",
          "The model is most useful when its data is disciplined. Naming, parameters, levels, grids, families, and shared coordinates need to be managed so that the information remains understandable to the next person.",
        ],
      },
      {
        heading: "AutoCAD supports precise documentation",
        paragraphs: [
          "AutoCAD remains valuable for detailed architectural documentation, survey information, specialist layouts, and the kind of precise 2D work that needs to be read and edited in a familiar drawing environment.",
          "A CAD sheet should not be treated as an isolated file. It needs a clear relationship to the model, the project standards, the revision process, and the other documents that form the construction information set.",
        ],
        bullets: [
          "Agree naming, layering, scales, and line types before production begins.",
          "Keep references between model views and CAD details visible.",
          "Issue only the current, coordinated information to the site.",
        ],
      },
      {
        heading: "The important connection is coordination",
        paragraphs: [
          "Modern architectural documentation can include Revit models, AutoCAD drawings, schedules, specifications, and exported views. These tools should not create separate versions of the truth.",
          "A coordinated workflow identifies where each tool is strongest, then establishes a clear method for transferring information between them. That method may include shared references, model views, agreed templates, and review checkpoints.",
        ],
      },
      {
        heading: "Documentation is a deliverable",
        paragraphs: [
          "The quality of documentation is judged by the people who use it. A designer may need a model view, a consultant may need a coordinated drawing, and a contractor may need a detail that is clear at construction scale.",
          "Good architectural documentation makes the design intention available at the right level of detail. It is a practical bridge between design thinking and construction action.",
        ],
      },
    ],
    relatedSlugs: [
      "from-concept-to-construction-the-architectural-design-process",
      "architectural-design-and-construction-coordination",
      "from-3d-model-to-final-architectural-rendering",
    ],
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: InsightArticle) {
  return article.relatedSlugs
    .map((slug) => getInsightArticle(slug))
    .filter((item): item is InsightArticle => Boolean(item));
}
