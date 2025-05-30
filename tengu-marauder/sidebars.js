// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'setup/hardware',
        'setup/software',
        'setup/build',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      collapsed: false,
      items: [
        'dev/ros2',
        'dev/bluetooth',
        'dev/esp32',
      ],
    },
    {
      type: 'category',
      label: 'Security Features',
      collapsed: false,
      items: [
        'security/wifi-tools',
        'security/spoofing',
        'security/defense',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Use',
      collapsed: false,
      items: [
        'advanced/swarm',
        'advanced/video',
        'advanced/tracee-integration',
      ],
    },
  ],
};

export default sidebars;

