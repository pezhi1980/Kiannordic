export type Lang = 'da' | 'en';

export const content = {
  da: {
    meta: {
      title: 'Kian Nordic · Apps og værktøjer bygget med AI',
      description:
        'Kian Nordic er et dansk studie, der bygger mobilapps, AI-agenter og skræddersyede værktøjer med AI. Fra idé til lancering, hurtigt og med styr på dine data.',
    },
    nav: { services: 'Ydelser', projects: 'Projekter', process: 'Proces', contact: 'Kontakt', switchLabel: 'English', switchShort: 'EN' },
    hero: {
      title: 'Fra idé til app. Bygget med AI.',
      lead:
        'Vi er et dansk studie, der bruger AI til at bygge mobilapps, agenter og værktøjer hurtigere end traditionel udvikling, uden at gå på kompromis med kvalitet eller dine data.',
      primary: 'Start et projekt',
      secondary: 'Se vores projekter',
    },
    services: {
      title: 'Det bygger vi',
      items: [
        {
          name: 'Apps med AI',
          text: 'Mobil- og webapps, hvor AI gør det tunge arbejde: genkender billeder, forstår tekst, oversætter og foreslår næste skridt.',
          tags: ['iOS og Android', 'Web', 'Flutter', 'Unity'],
        },
        {
          name: 'AI-agenter og automatisering',
          text: 'Agenter, der læser tickets, sorterer henvendelser og udfylder systemer for jer. De kan køre lokalt, så følsomme data bliver i huset.',
          tags: ['Lokale modeller', 'Integrationer', 'Workflows'],
        },
        {
          name: 'Skræddersyede værktøjer',
          text: 'Interne værktøjer, dashboards og hjemmesider, der passer til den måde, I faktisk arbejder på.',
          tags: ['Dashboards', 'Hjemmesider', 'Interne systemer'],
        },
      ],
    },
    projects: {
      title: 'Egne produkter',
      lead: 'Vi bygger også vores egne apps. Det er her, vi afprøver idéerne først.',
      items: [
        { name: 'Kvit', text: 'Tag et billede af kvitteringen, og appen sorterer varerne og viser, hvad du bruger hver uge og måned.', status: 'Under udvikling' },
        { name: 'Daypaint', text: 'Tryk på hver time i døgnet og se, hvordan du faktisk bruger din tid, uge for uge og år for år.', status: 'Under udvikling' },
        { name: 'Foldmeet', text: 'Et puslespil, hvor du folder papiret, så to figurer mødes.', status: 'Under udvikling' },
        { name: 'Hytte Hygge', text: 'Klassiske nordiske bræt- og kortspil online for 2–4 spillere.', status: 'Under udvikling' },
      ],
    },
    process: {
      title: 'Sådan arbejder vi',
      steps: [
        { name: 'Idé', text: 'Vi taler om problemet, før vi taler om funktioner. Én samtale, ét klart mål.' },
        { name: 'Prototype', text: 'Du får tidligt en klikbar prototype, så du kan se og mærke idéen.' },
        { name: 'Test', text: 'Rigtige brugere prøver den. Vi retter det, der ikke virker.' },
        { name: 'Lancering', text: 'Appen går live i App Store, Google Play eller på nettet, og vi bliver ved med at forbedre den.' },
      ],
    },
    why: {
      title: 'Hvorfor Kian Nordic',
      items: [
        { name: 'Hurtigere', text: 'AI skriver en stor del af koden, så tiden går til det, der gør produktet godt.' },
        { name: 'Lavere pris', text: 'Kortere udviklingstid giver en lavere pris, også for små virksomheder.' },
        { name: 'Dine data, dine regler', text: 'Vi følger GDPR og kan holde AI-løsninger lokale, når data er følsomme.' },
        { name: 'Direkte kontakt', text: 'Du taler med den, der bygger din løsning. Ingen mellemled.' },
      ],
    },
    contact: {
      title: 'Lad os bygge noget',
      lead: 'Fortæl kort om din idé, så vender vi tilbage hurtigst muligt.',
      name: 'Navn',
      email: 'E-mail',
      message: 'Hvad vil du bygge?',
      submit: 'Skriv til os',
      note: 'Knappen åbner dit mailprogram med beskeden udfyldt.',
      or: 'Eller skriv direkte til',
      subject: 'Nyt projekt',
    },
    footer: { privacy: 'Privatlivspolitik', cvr: 'CVR-nr.' },
  },
  en: {
    meta: {
      title: 'Kian Nordic · Apps and tools built with AI',
      description:
        'Kian Nordic is a Danish studio building mobile apps, AI agents and custom tools with AI. From idea to launch, fast and with your data under control.',
    },
    nav: { services: 'Services', projects: 'Projects', process: 'Process', contact: 'Contact', switchLabel: 'Dansk', switchShort: 'DA' },
    hero: {
      title: 'From idea to app. Built with AI.',
      lead:
        'We are a Danish studio using AI to build mobile apps, agents and tools faster than traditional development, without compromising on quality or your data.',
      primary: 'Start a project',
      secondary: 'See our projects',
    },
    services: {
      title: 'What we build',
      items: [
        {
          name: 'AI-powered apps',
          text: 'Mobile and web apps where AI does the heavy lifting: recognising images, understanding text, translating and suggesting next steps.',
          tags: ['iOS and Android', 'Web', 'Flutter', 'Unity'],
        },
        {
          name: 'AI agents and automation',
          text: 'Agents that read tickets, sort requests and fill in systems for you. They can run locally, so sensitive data stays in-house.',
          tags: ['Local models', 'Integrations', 'Workflows'],
        },
        {
          name: 'Custom tools',
          text: 'Internal tools, dashboards and websites that fit the way your team actually works.',
          tags: ['Dashboards', 'Websites', 'Internal systems'],
        },
      ],
    },
    projects: {
      title: 'Our own products',
      lead: 'We build our own apps too. That is where we try ideas out first.',
      items: [
        { name: 'Kvit', text: 'Snap a photo of a receipt and the app sorts the items and shows what you spend each week and month.', status: 'In development' },
        { name: 'Daypaint', text: 'Tap each hour of the day and see how you really spend your time, week by week and year by year.', status: 'In development' },
        { name: 'Foldmeet', text: 'A puzzle game where you fold the paper so two figures meet.', status: 'In development' },
        { name: 'Hytte Hygge', text: 'Classic Nordic board and card games online for 2–4 players.', status: 'In development' },
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { name: 'Idea', text: 'We talk about the problem before we talk about features. One conversation, one clear goal.' },
        { name: 'Prototype', text: 'You get a clickable prototype early, so you can see and feel the idea.' },
        { name: 'Test', text: 'Real users try it. We fix what does not work.' },
        { name: 'Launch', text: 'The app goes live on the App Store, Google Play or the web, and we keep improving it.' },
      ],
    },
    why: {
      title: 'Why Kian Nordic',
      items: [
        { name: 'Faster', text: 'AI writes much of the code, so time goes into what makes the product good.' },
        { name: 'Lower cost', text: 'Shorter development time means a lower price, for small businesses too.' },
        { name: 'Your data, your rules', text: 'We follow GDPR and can keep AI solutions local when data is sensitive.' },
        { name: 'Direct contact', text: 'You talk to the person building your solution. No middlemen.' },
      ],
    },
    contact: {
      title: "Let's build something",
      lead: 'Tell us briefly about your idea and we will get back to you as soon as we can.',
      name: 'Name',
      email: 'Email',
      message: 'What do you want to build?',
      submit: 'Write to us',
      note: 'The button opens your email app with the message filled in.',
      or: 'Or write directly to',
      subject: 'New project',
    },
    footer: { privacy: 'Privacy policy', cvr: 'CVR no.' },
  },
} as const;

export const paths = {
  da: { home: '/', privacy: '/privatliv' },
  en: { home: '/en/', privacy: '/en/privacy' },
};
