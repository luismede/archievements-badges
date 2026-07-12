const DEFAULT_LOCALE = {
    'earnable': 'Earnable',
    'testing': 'In Testing',
    'unobtainable': 'Unobtainable',
    'tiers': 'Tiers',
    'skin-tones': 'Skin Tones',
    'highlights': 'Highlights',
    'select-badge': 'Select a badge from the sidebar',
    'select-badge-desc': 'Click any badge or category to view its guide and details.',
    'difficulty': 'Difficulty',
    'how-to-get': 'How to get',
    'language': 'Language',
    'in-testing': 'In testing',
    'unreachable': 'Unreachable',
    'Very easy': 'Very easy',
    'Easy': 'Easy',
    'Medium': 'Medium',
    'Hard': 'Hard',
    'Default': 'Default',
    'Bronze': 'Bronze',
    'Silver': 'Silver',
    'Gold': 'Gold',
    'Tone 1': 'Tone 1',
    'Tone 2': 'Tone 2',
    'Tone 3': 'Tone 3',
    'Tone 4': 'Tone 4',
    'Tone 5': 'Tone 5',
    'yes': 'Yes',
    'no': 'No',
    'guide-steps': 'Guide',
    'badge': 'Badge',
    'obtainable': 'Obtainable',
    'how-to-achieve': 'How to achieve',
};

const LOCALE_MAP = {
    en: 'en',
    pt: 'pt-BR',
    es: 'es',
    fr: 'fr',
};

const BADGES = {
    'pull-shark': {
        name: 'Pull Shark',
        image: './assets/badges/pull-shark-default.png',
        difficulty: 'Easy',
        description: '2 pull requests merged (or more).',
        status: 'earnable',
        guide: [
            'Fork any repository.',
            'Make changes in your fork, then go to the Pull Requests tab.',
            'Click "Create pull request" and confirm.',
            'After the PR is merged, repeat for a second PR.',
            'You need at least 2 merged pull requests.',
        ]
    },
    'galaxy-brain': {
        name: 'Galaxy Brain',
        image: './assets/badges/GalaxyBrain.png',
        difficulty: 'Medium',
        description: '2 accepted answers (or more).',
        status: 'earnable',
        guide: [
            'Open a discussion page for any project that still needs an answer.',
            'Write a complete, correct answer to the question.',
            'Wait for the question creator to mark your answer as accepted.',
            'You need at least 2 accepted answers.',
        ]
    },
    'quickdraw': {
        name: 'Quickdraw',
        image: './assets/badges/QuickDraw_SkinTone1.png',
        difficulty: 'Very easy',
        description: 'Close an issue or PR within 5 minutes of opening.',
        status: 'earnable',
        guide: [
            'Create a new Issue or Pull Request in any repository.',
            'Write a title and optionally a comment, then submit.',
            'Immediately close the issue or pull request.',
            'You must close it within 5 minutes of opening.',
        ]
    },
    'yolo': {
        name: 'YOLO',
        image: './assets/badges/YOLO_Badge.png',
        difficulty: 'Easy',
        description: 'Merge at least one PR without code review.',
        status: 'earnable',
        guide: [
            'Go to your repository settings and add a collaborator.',
            'Create a new branch and add a file to it.',
            'Open a pull request from that branch.',
        ]
    },
    'starstruck': {
        name: 'Starstruck',
        image: './assets/badges/starstruck-default.png',
        difficulty: 'Hard',
        description: 'Create a repository that has 16 stars or more.',
        status: 'earnable',
        guide: [
            'Create a public repository.',
            'Promote it to reach 16 stars.',
            'Stars from any repositories under your account count.',
        ]
    },
    'pair-extraordinaire': {
        name: 'Pair Extraordinaire',
        image: './assets/badges/pair-extraordinaire-default.png',
        difficulty: 'Hard',
        description: 'Co-author in one or more merged PRs.',
        status: 'earnable',
        guide: [
            'Install GitHub Desktop.',
            'Add your local repository and commit changes.',
            'Create a new branch.',
            'Commit with a co-author by adding "Co-authored-by: name <email>" in the commit message.',
            'Push the branch and open a pull request on GitHub.',
            'Merge the pull request.',
            'The badge is awarded to both the author and co-author.',
        ]
    },
    'public-sponsor': {
        name: 'Public Sponsor',
        image: './assets/badges/GitHubSponsorBadge.png',
        difficulty: 'Medium',
        description: 'Sponsor open source work via GitHub Sponsors.',
        status: 'earnable',
        guide: [
            'Open the GitHub Sponsors page and click "See your top dependencies".',
            'Find a developer or project to sponsor.',
            'Choose a monthly sponsorship tier.',
            'Complete the payment process.',
        ]
    },
    'heart-on-your-sleeve': {
        name: 'Heart On Your Sleeve',
        image: './assets/badges/heart-on-your-sleeve-default.png',
        difficulty: '—',
        description: 'React to something on GitHub with a heart emoji.',
        status: 'testing',
    },
    'open-sourcerer': {
        name: 'Open Sourcerer',
        image: './assets/badges/open-sourcerer-default.png',
        difficulty: '—',
        description: 'Have PRs merged in more than 1 public repository.',
        status: 'testing',
    },
    'arctic-code-vault': {
        name: 'Arctic Code Vault Contributor',
        image: './assets/badges/arctic-code-vault-contributor-default.png',
        difficulty: '—',
        description: 'Contributed code to repositories in the 2020 Archive Program.',
        status: 'unobtainable',
        guide: [
            'This badge was available until February 2020.',
            'It is no longer obtainable.',
        ]
    },
    'mars-2020': {
        name: 'Mars 2020 Contributor',
        image: './assets/badges/mars-2020-contributor-default.png',
        difficulty: '—',
        description: 'Contributed code to repositories in the Mars 2020 Mission.',
        status: 'unobtainable',
        guide: [
            'This badge was available for contributors to the Mars 2020 Mission repositories.',
            'It is no longer obtainable.',
        ]
    },
};

const TIERS = {
    'starstruck': {
        name: 'Starstruck',
        image: './assets/badges/starstruck-default.png',
        levels: [
            { label: 'Default', image: './assets/badges/starstruck-default.png', count: '16 stars' },
            { label: 'Bronze', image: './assets/badges/StarStruck_Bronze.png', count: '128 stars' },
            { label: 'Silver', image: './assets/badges/StarStruck_Silver.png', count: '512 stars' },
            { label: 'Gold', image: './assets/badges/StarStruck_Gold.png', count: '4096 stars' },
        ]
    },
    'pull-shark': {
        name: 'Pull Shark',
        image: './assets/badges/pull-shark-default.png',
        levels: [
            { label: 'Default', image: './assets/badges/pull-shark-default.png', count: '2 PRs' },
            { label: 'Bronze', image: './assets/badges/PullShark_Bronze.png', count: '16 PRs' },
            { label: 'Silver', image: './assets/badges/PullShark_Silver.png', count: '128 PRs' },
            { label: 'Gold', image: './assets/badges/PullShark_Gold.png', count: '1024 PRs' },
        ]
    },
    'galaxy-brain': {
        name: 'Galaxy Brain',
        image: './assets/badges/GalaxyBrain.png',
        levels: [
            { label: 'Default', image: './assets/badges/GalaxyBrain.png', count: '2 answers' },
            { label: 'Bronze', image: './assets/badges/GalaxyBrain_Bronze.png', count: '8 answers' },
            { label: 'Silver', image: './assets/badges/GalaxyBrain_Silver.png', count: '16 answers' },
            { label: 'Gold', image: './assets/badges/GalaxyBrain_Gold.png', count: '32 answers' },
        ]
    },
    'pair-extraordinaire': {
        name: 'Pair Extraordinaire',
        image: './assets/badges/pair-extraordinaire-default.png',
        levels: [
            { label: 'Default', image: './assets/badges/pair-extraordinaire-default.png', count: '1 PR' },
            { label: 'Bronze', image: './assets/badges/PairExtraordinaire_Bronze.png', count: '10 PRs' },
            { label: 'Silver', image: './assets/badges/PairExtraordinaire_Silver.png', count: '24 PRs' },
            { label: 'Gold', image: './assets/badges/PairExtraordinaire_Gold.png', count: '48 PRs' },
        ]
    },
};

const HIGHLIGHTS = [
    { name: 'Pro', obtainable: true, how: 'Use GitHub Pro' },
    { name: 'Developer Program Member', obtainable: true, how: 'Join the GitHub Developer Program' },
    { name: 'Security Bug Bounty Hunter', obtainable: true, how: 'Hunt security vulnerabilities at bounty.github.com' },
    { name: 'GitHub Campus Expert', obtainable: false, how: 'Participate in the GitHub Campus Program' },
    { name: 'Security Advisory Credit', obtainable: true, how: 'Submit an advisory to the GitHub Advisory Database' },
    { name: 'Discussion answered', obtainable: false, how: 'Have your reply marked as the answer' },
];

const SKIN_TONES = [
    { tone: 'Default', emoji: '👋', image: './assets/badges/QuickDraw_SkinTone1.png' },
    { tone: 'Tone 1', emoji: '👋🏻', image: './assets/badges/quickdraw-tone1.png' },
    { tone: 'Tone 2', emoji: '👋🏼', image: './assets/badges/quickdraw-tone2.png' },
    { tone: 'Tone 3', emoji: '👋🏽', image: './assets/badges/quickdraw-tone3.png' },
    { tone: 'Tone 4', emoji: '👋🏾', image: './assets/badges/quickdraw-tone4.png' },
    { tone: 'Tone 5', emoji: '👋🏿', image: './assets/badges/quickdraw-tone5.png' },
];
