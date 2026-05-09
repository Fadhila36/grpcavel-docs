import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Grpcavel',
  tagline: 'Modern gRPC Framework for Laravel',
  favicon: 'img/logo.svg',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://grpcavel.fadhilaabiyyu.my.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fadhila36', // Usually your GitHub org/user name.
  projectName: 'grpcavel', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve docs at the site root
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fadhila36/grpcavel/tree/main/docs-site/',
        },
        blog: false, // Disable blog for now to focus on documentation
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    metadata: [
      {name: 'keywords', content: 'grpc, laravel, php, microservices, roadrunner, framework, api, code-first, protobuf, high performance, backend, enterprise'},
      {name: 'description', content: 'Grpcavel is a high-performance, code-first gRPC framework for Laravel powered by RoadRunner. Build lightning-fast microservices with a Laravel-native developer experience.'},
      {name: 'og:title', content: 'Grpcavel - Modern gRPC Framework for Laravel'},
      {name: 'og:description', content: 'Build lightning-fast microservices with a Laravel-native developer experience.'},
      {name: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    navbar: {
      title: 'Grpcavel',
      logo: {
        alt: 'Grpcavel Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/fadhila36/grpcavel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/introduction',
            },
            {
              label: 'Getting Started',
              to: '/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/fadhila36/grpcavel/issues',
            },
          ],
        },
        {
          title: 'Author',
          items: [
            {
              label: 'Muhammad Fadhila Abiyyu Faris',
              href: 'https://github.com/Fadhila36',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Grpcavel. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'bash', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
