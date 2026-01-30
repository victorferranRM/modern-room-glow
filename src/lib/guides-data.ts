// Guides data structure for documentation hub

export interface Guide {
  id: string;
  title: string;
  description: string;
  type: 'Setup' | 'Installation' | 'How-to' | 'FAQ' | 'Best Practice';
  category: string;
  readTime: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  href: string;
}

export interface GuideCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  guides: Guide[];
}

export const guideCategories: GuideCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Essential guides to begin using the platform',
    icon: 'Rocket',
    guides: [
      {
        id: 'welcome',
        title: 'Welcome to Roomonitor',
        description: 'An overview of the platform and its core features',
        type: 'How-to',
        category: 'getting-started',
        readTime: '3 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/welcome',
      },
      {
        id: 'quick-start',
        title: 'Quick Start Guide',
        description: 'Get up and running in under 10 minutes',
        type: 'Setup',
        category: 'getting-started',
        readTime: '8 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/quick-start',
      },
      {
        id: 'account-setup',
        title: 'Setting Up Your Account',
        description: 'Configure your profile, team, and preferences',
        type: 'Setup',
        category: 'getting-started',
        readTime: '5 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/account-setup',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation Guides',
    description: 'Step-by-step device installation instructions',
    icon: 'Wrench',
    guides: [
      {
        id: 'device-installation',
        title: 'Device Installation Manual',
        description: 'Complete guide to installing monitoring devices',
        type: 'Installation',
        category: 'installation',
        readTime: '12 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/device-installation',
      },
      {
        id: 'sensor-placement',
        title: 'Optimal Sensor Placement',
        description: 'Best practices for positioning sensors in your property',
        type: 'Best Practice',
        category: 'installation',
        readTime: '6 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/sensor-placement',
      },
      {
        id: 'network-requirements',
        title: 'Network Requirements',
        description: 'WiFi and connectivity setup for devices',
        type: 'Installation',
        category: 'installation',
        readTime: '4 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/network-requirements',
      },
    ],
  },
  {
    id: 'configuration',
    title: 'Product Setup & Configuration',
    description: 'Customize and configure the platform to your needs',
    icon: 'Settings',
    guides: [
      {
        id: 'alert-thresholds',
        title: 'Configuring Alert Thresholds',
        description: 'Set custom noise and occupancy alert levels',
        type: 'Setup',
        category: 'configuration',
        readTime: '7 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/alert-thresholds',
      },
      {
        id: 'notification-settings',
        title: 'Notification Settings',
        description: 'Choose how and when you receive alerts',
        type: 'Setup',
        category: 'configuration',
        readTime: '4 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/notification-settings',
      },
      {
        id: 'pms-integration',
        title: 'PMS Integration Setup',
        description: 'Connect your property management system',
        type: 'Setup',
        category: 'configuration',
        readTime: '10 min',
        difficulty: 'Advanced',
        href: '/resources/guides/guide/pms-integration',
      },
      {
        id: 'user-permissions',
        title: 'Managing User Permissions',
        description: 'Set up team roles and access levels',
        type: 'How-to',
        category: 'configuration',
        readTime: '5 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/user-permissions',
      },
    ],
  },
  {
    id: 'operations',
    title: 'Operations & Best Practices',
    description: 'Get the most out of your monitoring setup',
    icon: 'Target',
    guides: [
      {
        id: 'daily-monitoring',
        title: 'Daily Monitoring Workflow',
        description: 'Recommended daily routines for property managers',
        type: 'Best Practice',
        category: 'operations',
        readTime: '6 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/daily-monitoring',
      },
      {
        id: 'incident-response',
        title: 'Incident Response Protocol',
        description: 'How to handle alerts and escalations effectively',
        type: 'How-to',
        category: 'operations',
        readTime: '8 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/incident-response-guide',
      },
      {
        id: 'reporting-analytics',
        title: 'Understanding Reports & Analytics',
        description: 'Make data-driven decisions with platform insights',
        type: 'How-to',
        category: 'operations',
        readTime: '7 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/reporting-analytics',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & FAQs',
    description: 'Solutions to common questions and issues',
    icon: 'HelpCircle',
    guides: [
      {
        id: 'device-offline',
        title: 'Device Shows Offline',
        description: 'Steps to troubleshoot connectivity issues',
        type: 'FAQ',
        category: 'troubleshooting',
        readTime: '4 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/device-offline',
      },
      {
        id: 'false-alerts',
        title: 'Reducing False Alerts',
        description: 'Fine-tune sensitivity to minimize false positives',
        type: 'FAQ',
        category: 'troubleshooting',
        readTime: '5 min',
        difficulty: 'Intermediate',
        href: '/resources/guides/guide/false-alerts',
      },
      {
        id: 'common-questions',
        title: 'Frequently Asked Questions',
        description: 'Answers to the most common platform questions',
        type: 'FAQ',
        category: 'troubleshooting',
        readTime: '10 min',
        difficulty: 'Beginner',
        href: '/resources/guides/guide/faq',
      },
    ],
  },
];

export const getAllGuides = (): Guide[] => {
  return guideCategories.flatMap(category => category.guides);
};

export const searchGuides = (query: string): Guide[] => {
  const lowerQuery = query.toLowerCase();
  return getAllGuides().filter(
    guide =>
      guide.title.toLowerCase().includes(lowerQuery) ||
      guide.description.toLowerCase().includes(lowerQuery) ||
      guide.type.toLowerCase().includes(lowerQuery)
  );
};
