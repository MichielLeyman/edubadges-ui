import I18n from "i18n-js";

I18n.translations.en = {
  routes: {
    backpack: "Backpack",
    "badge-requests": "Badge requests",
    collections: "Collections",
    profile: "Profile",
  },
  header: {
    logout: "Logout",
    nav: {
      badgeclasses: "Badges",
      manage: "Manage",
    },
  },
  login: {
    title: "Never stop learning",
    description:
      "Edubadges are digital certificates and show that the owner has certain skills or knowledge. Edubadges can be issued for both extracurriculair activities and accredited education.",
    student: {
      title: "My Backpack",
      subtitle: "receive and share badges",
      action: "Open your Backpack",
      button: "Log in with your eduID",
      accountCreation: {
        askAccountNo: "<strong>Don't</strong> have a Backpack yet?",
        startAccount: "Start here",
      },
    },
    teacher: {
      title: "Issuer Portal",
      subtitle: "award badges to students",
      action: "Enter the issuer portal",
      button: "Log in via SURFconext",
      accountCreation: {
        askAccount: "<strong>Don't</strong> have access?",
        startAccount: "Contact your institution admin",
      },
    },
    createEduId: {
      askAccountYes: "<strong>Already</strong> have a Backpack?",
      logInAccount: "Log in",
      createAccountButton: "Create an eduID",
      back: "Back",
      title: "Create a Backpack",
      subtitle: "you'll need an eduID",
      step1: "Step 1: Create an eduID",
      step2: "Step 2: Verify your identity",
      welcome: "Welcome to your Backpack",
      awarded: "We’ve awarded you with your first badge😀",
      infoStep2:
        "To be able to further receive eduBadges, <strong>please verify your identity</strong> with your Educational Institution. You can prove this by clicking the button and log in to your institution with your institution account.",
      verification: "Verification succeeded!",
      infoStep3: "You can now receive edubadges in your Backpack.",
      require:
        "To create an edubadges Backpack, you will need an eduID. After creating an eduID you can prove that you are following education in the Netherlands by verifying your institution.",
      steps: {
        step1: "Create an eduID",
        step2: "Verify your institution",
        step3: "Receive & share badges",
      },
    },
  },
  backpack: {
    title: "Your achievements",
  },
  notFound: {
    main: "404 - Not Found",
  },
  teacher: {
    sidebar: {
      search: "Search",
      filters: {
        faculties: "Issuer groups",
        issuers: "Issuers",
        show_all: "Show all",
        show_less: "Show less",
      },
    },
    name: "Name",
    badgeclasses: {
      title: "Badgeclasses",
    },
    issuers: {
      title: "Issuers",
    },
    faculties: {
      title: "Groups",
    },
  },
  manage: {
    tabs: {
      issuers: "Issuers",
      faculties: "Groups",
      badgeclasses: "Badgeclasses",
      badgesRequested: "Requests",
      badgesAwarded: "Recipients",
      badgesRevoked: "Revoked",
    },
    edit: {
      institution: "Edit institution",
      faculty: "Edit faculty",
      issuer: "Edit issuer",
      save: "Save changes",
    },
    new: {
      faculty: "Add new faculty",
      issuer: "Add new issuer",
      badgeclass: "Add new badgeclass",
      save: "Save",
    },
  },
  footer: {
    tip: "Need tips or info?",
    help: "Help & FAQ",
    poweredBy: "Proudly powered by",
    surf: "SURF",
  },
  error: {
    101: "Could not register email address. Address already in use",
    102: "You have already added this address. Verify it",
    103: "Can not remove primary email address",
    104: "Can not remove only email address",
    105: "Can't make unverified email address the primary email address",
    201: "May not enroll: already enrolled",
    202: "May not enroll: you already have been awarded this badge",
    203: "May not enroll: you don't have a student account",
    204: "Invalid enrollment id",
    205: "Enrollment not found",
    206: "Awarded enrollments cannot be withdrawn",
    207: "Users can only withdraw their own enrollments",
    208: "Missing badgeclass id",
    209: "Cannot enroll",
    601: "You do not have permission. Check your assigned role in the Issuer",
    701: "Unspecified share provider",
    702: "Invalid share provider",
  },
  models: {
    institution: {
      created: "Created",
      admin: "Admin",
      brin: "BRIN code",
      description: "Description",
      grading_table: "Grading table",
      no_grading_table: "<no link provided yet>",
      image: "Logo",
      name: "Name",
    },
    faculty: {
      created: "Created",
      admin: "Admin",
      description: "Description",
      name: "Name",
    },
    issuer: {
      description: "Description",
      email: "Contact email address",
      created: "Created",
      admin: "Admin",
      email_header: "Contact",
      url_header: "Website",
      no_url: "<no website provided yet>",
      no_email: "<no email provided yet>",
      image: "Logo",
      name: "Name",
      url: "Website URL",
      faculty: "Group",
    },
    badgeclass: {
      issuer: "Issuer",
      image: "Badge image",
      name: "Name",
      description: "Description",
      criteria_text: "What is required to earn this badge?",
      criteria_url: "Criteria URL",
    },
  },
};
