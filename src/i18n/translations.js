export const typewriterPhrases = {
  en: [
    "Frontend Developer",
    "Game Developer",
    "Musician",
    "Software Engineering Student",
    "Anime Lover",
    "Souls-like Enthusiast",
  ],
  fr: [
    "Développeur Frontend",
    "Développeur de jeux",
    "Musicien",
    "Étudiant en génie logiciel",
    "Amateur d'anime",
    "Fan de Souls-like",
  ],
};

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },

    hero: {
      greeting: "Hey! I'm",
      name: "Jonathan Rodriguez Tames",
      description:
        "Software Engineering student at ÉTS passionate about web, gaming & music",
      badges: ["Lab Instructor @ ÉTS", "Game Dev", "Musician"],
      cta: "Get in touch",
      resume: "Resume",
    },

    about: {
      sectionTitle: "About Me",
      paragraphs: [
        "I'm a Software Engineering student at École de technologie supérieure (ÉTS) in Montréal with a strong drive for building polished, user-focused digital experiences. My journey started with a DEC in Computer Science & Mathematics, and I haven't stopped exploring since.",
        "I'm deeply passionate about three worlds that fuel my creativity: web development, where I craft modern interfaces with frameworks like Angular and React; game development, where I bring ideas to life with Unity and C#; and music, which keeps me inspired. Additionally, I have a deep passion for teaching, which I channel as a Laboratory Instructor at ÉTS, helping students master complex software testing and engineering concepts.",
        "Trilingual in Spanish, French and English, I thrive in diverse, collaborative environments and love turning complex problems into elegant solutions.",
      ],
      funFacts: {
        title: "Fun Facts",
        items: [
          { text: "Game Jams with Unity & C#" },
          { text: "Trilingual : Spanish, French & English" },
          { text: "Builds apps for music teams" },
          { text: "Souls-like enthusiast" },
        ],
      },
    },

    experience: {
      sectionTitle: "Experience",
      jobs: [
        {
          title: "Laboratory Instructor — LOG240: Testing & Maintenance",
          company: "École de technologie supérieure (ÉTS)",
          period: "Jan 2025 – Present",
          details: [
            "Presented laboratory coursework and guided students through practical computer engineering exercises.",
            "Resolved technical inquiries regarding Maven, software testing frameworks, and development environments.",
            "Graded student reports and guided them in the implementation of black-box and white-box testing methodologies.",
            "Assisted students with comprehensive technical documentation and reverse-engineering of unmaintained legacy software.",
          ],
          tags: [
            "Java",
            "Maven",
            "IntelliJ",
            "AssertJ-Swing",
            "JUnit",
            "White-Box Testing",
            "Functional Testing",
          ],
        },
        {
          title: "Frontend Web Developer Intern",
          company: "Evident Scientific",
          period: "Aug 2025 – Dec 2025",
          details: [
            "Developed frontend features using Angular 18, TypeScript, HTML and SCSS for a remote visual inspection platform.",
            "Refactored video streaming components to improve performance and maintainability.",
            "Implemented debugging tools to accelerate issue diagnosis across environments.",
            "Identified and fixed major production bugs, improving platform stability.",
            "Collaborated closely with technical experts and cross-functional teams to deliver high-quality solutions.",
          ],
          tags: ["Angular 18", "TypeScript", "SCSS", "HTML"],
        },
      ],
    },

    education: {
      sectionTitle: "Education",
      degrees: [
        {
          degree: "Bachelor's in Software Engineering",
          school: "École de technologie supérieure (ÉTS)",
          period: "Sep 2023 – Present",
        },
        {
          degree: "DEC in Computer Science & Mathematics",
          school: "Collège de Rosemont",
          period: "Aug 2019 – May 2022",
        },
      ],
    },

    projects: {
      sectionTitle: "Projects",
      softwareTitle: "Software & Web Applications",
      gamesTitle: "Video Games & Game Jams",
      items: [
        {
          title: "Repertory Planner",
          tech: [
            "Angular 20",
            "TypeScript",
            "SCSS",
            "NestJS",
            "MongoDB",
            "Spotify API",
          ],
          description:
            "SaaS platform for music team coordination — plan rehearsals, manage repertoires and sync with Spotify.",
          status: "In Development",
          hasVideo: false,
          link: "https://github.com/Balsero/Repertory-Planner",
        },
        {
          title: "Anime Best Quotes",
          tech: ["React", "JavaScript", "CSS", "Supabase", "PostgreSQL"],
          description:
            "Browse, vote and share the best anime quotes. Community-driven with real-time ranking.",
          hasVideo: false,
          link: "https://animebestquotes.netlify.app",
        },
        {
          title: "Spectral Crusade: Joan's Legacy",
          tech: ["Unity", "C#"],
          description:
            "A Souls-like metroidvania created during a Game Jam — challenging combat, exploration and atmosphere.",
          status: "Game Jam",
          hasVideo: true,
          video: "/videos/spectral_crusade.mp4",
          link: "https://balseros-art-studio.itch.io/spectral-crusade-joans-legacy",
        },
        {
          title: "Resistance of the Forgotten Kingdom",
          tech: ["Unity", "C#"],
          description:
            "Roguelike adventure built during a Game Jam — procedural levels, permadeath and fast-paced action.",
          status: "Game Jam",
          hasVideo: true,
          video: "/videos/resistance_kingdom.mp4",
          link: "https://christian-j-pereda-rives.itch.io/resistance-of-the-forgotten-kingdom",
        },
      ],
    },

    skills: {
      sectionTitle: "Skills",
      categories: [
        {
          name: "Languages",
          items: [
            "Java",
            "C#",
            "C",
            "C++",
            "Python",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
          ],
        },
        {
          name: "Frameworks",
          items: [
            "Angular",
            "React",
            "Astro",
            "NestJS",
            ".NET",
            "Electron",
            "WPF",
            "RxJS",
            "Jest",
            "JUnit",
            "Playwright",
            "Tailwind CSS",
            "SCSS",
          ],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "Redis", "Supabase", "MongoDB"],
        },
        {
          name: "Architecture",
          items: ["RabbitMQ", "gRPC", "API REST", "MVC", "SaaS", "S.O.L.I.D"],
        },
        {
          name: "Tools",
          items: [
            "Git",
            "GitLab",
            "Docker",
            "Kubernetes",
            "Postman",
            "VS Code",
            "IntelliJ",
            "Unity",
            "Unreal Engine",
            "Netlify",
          ],
        },
      ],
    },

    contact: {
      sectionTitle: "Contact",
      heading: "Let's Connect",
      subtitle:
        "Have a project in mind or just want to say hi? Feel free to reach out.",
      email: "jonathan.rodrigueztames@gmail.com",
      linkedin: "jonasrodriguezt",
      github: "Balsero",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send Message",
    },

    footer: {
      credit: "Designed & built with [heart] by Jonathan Rodriguez Tames",
    },
  },

  fr: {
    nav: {
      about: "À propos",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },

    hero: {
      greeting: "Salut ! Je suis",
      name: "Jonathan Rodriguez Tames",
      description:
        "Étudiant en génie logiciel à l'ÉTS passionné par le web, le jeu vidéo et la musique",
      badges: ["Chargé de labo @ ÉTS", "Jeux vidéo", "Musicien"],
      cta: "Me contacter",
      resume: "CV",
    },

    about: {
      sectionTitle: "À propos",
      paragraphs: [
        "Je suis étudiant en génie logiciel à l'École de technologie supérieure (ÉTS) à Montréal, motivé par la création d'expériences numériques soignées et centrées sur l'utilisateur. Mon parcours a commencé avec un DEC en Informatique et Mathématiques, et je n'ai jamais cessé d'explorer depuis.",
        "Trois univers alimentent ma créativité : le développement web, où je conçois des interfaces modernes avec des frameworks comme Angular et React ; le développement de jeux, où je donne vie à des idées avec Unity et C# ; et la musique, qui m'inspire. De plus, j'ai une grande passion pour l'enseignement, que je concrétise en tant que Chargé de laboratoire à l'ÉTS, aidant les étudiants à maîtriser les concepts complexes de tests et d'ingénierie logicielle.",
        "Trilingue en espagnol, français et anglais, je m'épanouis dans des environnements collaboratifs et diversifiés, et j'adore transformer des problèmes complexes en solutions élégantes.",
      ],
      funFacts: {
        title: "Faits amusants",
        items: [
          { text: "Game Jams avec Unity et C#" },
          { text: "Trilingue : espagnol, français et anglais" },
          { text: "Crée des apps pour des équipes musicales" },
          { text: "Passionné de Souls-like" },
        ],
      },
    },

    experience: {
      sectionTitle: "Expérience",
      jobs: [
        {
          title: "Chargé de laboratoire — LOG240 : Tests et maintenance",
          company: "École de technologie supérieure (ÉTS)",
          period: "Janvier 2025 – Présent",
          details: [
            "Présenter les travaux de laboratoire et accompagner les étudiants dans les exercices pratiques.",
            "Répondre aux questions techniques liées à Maven, aux tests logiciels et aux environnements de développement.",
            "Corriger les travaux et guider les étudiants dans l’implémentation de tests de boîte noire et de boîte blanche.",
            "Soutenir la rédaction de documentation technique et la réingénierie d’un logiciel non maintenu.",
          ],
          tags: [
            "Java",
            "Maven",
            "IntelliJ",
            "AssertJ-Swing",
            "JUnit",
            "Test boîte blanche",
            "Test fonctionnel",
          ],
        },
        {
          title: "Stagiaire développeur web frontend",
          company: "Evident Scientific",
          period: "Août 2025 – Déc. 2025",
          details: [
            "Développé des fonctionnalités frontend avec Angular 18, TypeScript, HTML et SCSS pour une plateforme d'inspection visuelle à distance.",
            "Refactorisé les composants de streaming vidéo pour améliorer la performance et la maintenabilité.",
            "Implémenté des outils de débogage pour accélérer le diagnostic de problèmes dans différents environnements.",
            "Identifié et corrigé des bogues majeurs en production, améliorant la stabilité de la plateforme.",
            "Collaboré étroitement avec des experts techniques et des équipes multidisciplinaires pour livrer des solutions de qualité.",
          ],
          tags: ["Angular 18", "TypeScript", "SCSS", "HTML"],
        },
      ],
    },

    education: {
      sectionTitle: "Formation",
      degrees: [
        {
          degree: "Baccalauréat en génie logiciel",
          school: "École de technologie supérieure (ÉTS)",
          period: "Sep. 2023 – Présent",
        },
        {
          degree: "DEC en Informatique et Mathématiques",
          school: "Collège de Rosemont",
          period: "Août 2019 – Mai 2022",
        },
      ],
    },

    projects: {
      sectionTitle: "Projets",
      softwareTitle: "Applications Web & Logiciels",
      gamesTitle: "Jeux Vidéo & Game Jams",
      items: [
        {
          title: "Repertory Planner",
          tech: [
            "Angular 20",
            "TypeScript",
            "SCSS",
            "NestJS",
            "MongoDB",
            "Spotify API",
          ],
          description:
            "Plateforme SaaS de coordination pour équipes musicales — planification de répétitions, gestion de répertoires et synchronisation avec Spotify.",
          status: "En développement",
          hasVideo: false,
          link: "https://github.com/Balsero/Repertory-Planner",
        },
        {
          title: "Anime Best Quotes",
          tech: ["React", "JavaScript", "CSS", "Supabase", "PostgreSQL"],
          description:
            "Parcourez, votez et partagez les meilleures citations d'anime. Classement communautaire en temps réel.",
          hasVideo: false,
          link: "https://animebestquotes.netlify.app",
        },
        {
          title: "Spectral Crusade: Joan's Legacy",
          tech: ["Unity", "C#"],
          description:
            "Un metroidvania de type Souls-like créé lors d'un Game Jam — combats exigeants, exploration et atmosphère immersive.",
          status: "Game Jam",
          hasVideo: true,
          video: "/videos/spectral_crusade.mp4",
          link: "https://balseros-art-studio.itch.io/spectral-crusade-joans-legacy",
        },
        {
          title: "Resistance of the Forgotten Kingdom",
          tech: ["Unity", "C#"],
          description:
            "Aventure roguelike créée lors d'un Game Jam — niveaux procéduraux, permadeath et action effrénée.",
          status: "Game Jam",
          hasVideo: true,
          video: "/videos/resistance_kingdom.mp4",
          link: "https://christian-j-pereda-rives.itch.io/resistance-of-the-forgotten-kingdom",
        },
      ],
    },

    skills: {
      sectionTitle: "Compétences",
      categories: [
        {
          name: "Langages",
          items: [
            "Java",
            "C#",
            "C",
            "C++",
            "Python",
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
          ],
        },
        {
          name: "Frameworks",
          items: [
            "Angular",
            "React",
            "Astro",
            "NestJS",
            ".NET",
            "Electron",
            "WPF",
            "RxJS",
            "Jest",
            "JUnit",
            "Playwright",
            "Tailwind CSS",
            "SCSS",
          ],
        },
        {
          name: "Bases de données",
          items: ["PostgreSQL", "Redis", "Supabase", "MongoDB"],
        },
        {
          name: "Architecture",
          items: ["RabbitMQ", "gRPC", "API REST", "MVC", "SaaS", "S.O.L.I.D"],
        },
        {
          name: "Outils",
          items: [
            "Git",
            "GitLab",
            "Docker",
            "Kubernetes",
            "Postman",
            "VS Code",
            "IntelliJ",
            "Unity",
            "Unreal Engine",
            "Netlify",
          ],
        },
      ],
    },

    contact: {
      sectionTitle: "Contact",
      heading: "Restons en contact",
      subtitle:
        "Vous avez un projet en tête ou simplement envie de dire bonjour ? N'hésitez pas à me contacter.",
      email: "jonathan.rodrigueztames@gmail.com",
      linkedin: "jonasrodriguezt",
      github: "Balsero",
      formName: "Nom",
      formEmail: "Courriel",
      formMessage: "Message",
      formSend: "Envoyer",
    },

    footer: {
      credit: "Conçu et développé avec [heart] par Jonathan Rodriguez Tames",
    },
  },
};
