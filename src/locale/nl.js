import I18n from "i18n-js";

I18n.translations.nl = {
  routes: {
    backpack: "Backpack",
    "badge-requests": "Badge verzoeken",
    collections: "Collecties",
    profile: "Profiel"
  },
  header: {
    logout: "Logout",
    nav: {
      badgeclasses: "Badges",
      manage: "Manage"
    }
  },
  login: {
    title: "Leven lang ontwikkelen",
    description:
      "Edubadges zijn digitale certificaten die aantonen dat de eigenaar bepaalde vaardigheden of kennis bezit. Edubadges kunnen worden uitgereikt voor zowel extracurriculaire activiteiten als geaccrediteerd onderwijs.",
    student: {
      title: "Mijn Backpack",
      subtitle: "ontvang en deel badges",
      action: "Open je Backpack",
      button: "Log in met je eduID",
      accountCreation: {
        askAccountNo: "Nog <strong>geen</strong> Backpack?",
        startAccount: "Klik hier"
      }
    },
    teacher: {
      title: "Uitgeversportaal",
      subtitle: "ken badges toe aan studenten",
      action: "Ga naar het uitgeversportaal",
      button: "Log in via SURFconext",
      accountCreation: {
        askAccount: "Nog <strong>geen</strong> toegang?",
        startAccount: "Neem contact op met de instellingsbeheerder"
      }
    },
    createEduId: {
      askAccountYes: "Al <strong>wel</strong> een Backpack?",
      logInAccount: "Log in",
      createAccountButton: "Maak een eduID aan",
      back: "Terug",
      title: "Maak een Backpack aan",
      subtitle: "je hebt een eduID nodig",
      step1: "Stap 1: Maak een eduID aan",
      require:
        "Om een edubadges Backpack aan te maken heb je een eduID nodig. Na het aanmaken van een eduID kan je je onderwijsinstelling verifiëren.",
      steps: {
        step1: "Maak een eduID aan",
        step2: "Verifieer je instelling",
        step3: "Ontvang & deel badges"
      }
    }
  },
  backpack: {
    title: "Behaalde badges"
  },
  notFound: {
    main: "404 - Not Found"
  },
  teacher: {
    sidebar: {
      search: "Zoeken",
      filters: {
        faculties: "Issuer groepen",
        issuers: "Issuers",
        show_all: "Toon meer",
        show_less: "Toon minder"
      }
    },
    badgeclasses: {
      title: "Badgeclasses"
    },
    issuers: {
      title: "Issuers"
    },
    faculties: {
      title: "Groepen"
    }
  },
  manage: {
    tabs: {
      issuers: "Issuers",
      faculties: "Groepen",
      badgeclasses: "Badgeclasses",
      badgesRequested: "Aanvragen",
      badgesAwarded: "Ontvangers",
      badgesRevoked: "Ingetrokken"
    },
    edit: {
      institution: "Wijzig instituut",
      faculty: "Wijzig groep",
      issuer: "Wijzig issuer"
    }
  },
  footer: {
    tip: "Tip of info nodig?",
    help: "Help & FAQ",
    poweredBy: "Trots aangeboden door",
    surf: "SURF"
  },
  error: {
    101: "Kan emailadres niet registreren. Het adres is al in gebruik",
    102: "Je hebt dit emailadres al toegevoegd. Je moet nog verifieren",
    103: "Kan niet het primaire emailadres verwijderen",
    104: "Kan niet het enige emailadres verwijderen",
    105: "Verifieer het emailadres voordat je het adres primair maakt",
    201: "Kan niet enrollen: je bent al enrolled",
    202: "Kan niet enrollen: je hebt deze badge al",
    203: "Kan niet enrollen: je hebt geen studentenaccount",
    204: "Ongeldige enrollment id",
    205: "Enrollment niet gevonden",
    206: "Awarded enrollments kunnen niet teruggetrokken worden",
    207: "Gebruikers kunnen alleen eigen enrollments terugtrekken",
    208: "Missende badgeclass id",
    209: "Kan niet enrollen",
    601: "Geen toegang. Check je assigned role in de Issuer",
    701: "Ongespecifieerde share provider",
    702: "Ongeldige share provider"
  },
  models: {
    institution: {
      brin: "BRIN code",
      description: "Beschrijving",
      grading_table: "Grading table",
      image: "Logo",
      name: "Naam"
    }
  }
};
