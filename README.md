# Vuetify (Default)

This is the official scaffolding tool for Vuetify, designed to give you a head start in building your new Vuetify application. It sets up a base template with all the necessary configurations and standard directory structure, enabling you to begin development without the hassle of setting up the project from scratch.

## ❗️ Important Links

- 📄 [Docs](https://vuetifyjs.com/)
- 🚨 [Issues](https://issues.vuetifyjs.com/)
- 🏬 [Store](https://store.vuetifyjs.com/)
- 🎮 [Playground](https://play.vuetifyjs.com/)
- 💬 [Discord](https://community.vuetifyjs.com)

## 💿 Install

Set up your project using your preferred package manager. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [yarn](https://yarnpkg.com/getting-started)                   | `yarn install` |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install`  |
| [pnpm](https://pnpm.io/installation)                          | `pnpm install` |
| [bun](https://bun.sh/#getting-started)                        | `bun install`  |

After completing the installation, your environment is ready for Vuetify development.

## ✨ Features

- 🖼️ **Optimized Front-End Stack**: Leverage the latest Vue 3 and Vuetify 3 for a modern, reactive UI development experience. [Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/en/)
- 🗃️ **State Management**: Integrated with [Pinia](https://pinia.vuejs.org/), the intuitive, modular state management solution for Vue.
- 🚦 **Routing and Layouts**: Utilizes Vue Router for SPA navigation and vite-plugin-vue-layouts for organizing Vue file layouts. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- 💻 **Enhanced Development Experience**: Benefit from TypeScript's static type checking and the ESLint plugin suite for Vue, ensuring code quality and consistency. [TypeScript](https://www.typescriptlang.org/) | [ESLint Plugin Vue](https://eslint.vuejs.org/)
- ⚡ **Next-Gen Tooling**: Powered by Vite, experience fast cold starts and instant HMR (Hot Module Replacement). [Vite](https://vitejs.dev/)
- 🧩 **Automated Component Importing**: Streamline your workflow with unplugin-vue-components, automatically importing components as you use them. [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- 🛠️ **Strongly-Typed Vue**: Use vue-tsc for type-checking your Vue components, and enjoy a robust development experience. [vue-tsc](https://github.com/johnsoncodehk/volar/tree/master/packages/vue-tsc)

These features are curated to provide a seamless development experience from setup to deployment, ensuring that your Vuetify application is both powerful and maintainable.

## 💡 Usage

This section covers how to start the development server and build your project for production.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

(Repeat for npm, pnpm, and bun with respective commands.)

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building for Production

To build your project for production, use:

```bash
yarn build
```

(Repeat for npm, pnpm, and bun with respective commands.)

# Vuetify Developer Code Challenge Requirements

## Overview

The goal of this challenge is to build a blog application using Vue and Vuetify, following the provided requirements. This will help assess your understanding of Vuetify, ability to follow instructions, and code cleanliness.

## Project Setup

- Create a new Vue project using the Vuetify create plugin.
- Select the **Essentials Preset** when setting up the project.

## Blog Application Features

- A **Home Page** to display blog content.
- A **CRUD System** for managing blog posts, including:
  - **Create:** Ability to add new blog posts.
  - **Read:** Display all blog posts.
  - **Update:** Edit existing blog posts.
  - **Delete:** Remove blog posts.
- Each blog post must have the following fields:
  - **Title**
  - **Text** (blog content)
  - **Author**
  - **Date**
- No authentication, validation, or database is required.
- Application state must persist through page refresh.

## Customization & Styling

- You can use any customization settings within Vuetify.
- **Custom CSS is NOT allowed.**
- Plugins from the Vue ecosystem may be used, but minimal usage is preferred (Everything included with the Essentials preset is okay).

## Submission Instructions

- The project must be **shared publicly on GitHub**.
- Submit the GitHub repository link to **[hello@vuetifyjs.com](mailto\:hello@vuetifyjs.com)**.
- The **email subject must be exactly:** `Vuetify Developer Code Challenge`.
  - Any deviation from this subject line will result in your submission not being counted.

## FAQ

| Question                                       | Answer                                                                                                                                                     |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can I add authentication if I want to?         | **Yes.**                                                                                                                                                   |
| Can I add a database if I want to?             | **Yes.**                                                                                                                                                   |
| Can I use plugins from the Vue ecosystem?      | **Yes.** Minimal usage is preferred.                                                                                                                       |
| Can I use vanilla Vuetify styling?             | **Yes.**                                                                                                                                                   |
| Can I copy a design I found online?            | **Yes.** This is encouraged.                                                                                                                               |
| What is the deadline?                          | **Sunday, March 9th.**                                                                                                                                     |
| How long should this take?                     | **Estimated time: 2-5 hours.**                                                                                                                             |
| Why is the challenge length 2-5 hours?         | Open Source development often requires spending time on things that do not directly benefit you. This challenge helps assess commitment and understanding. |
| Will I receive a response if I'm not selected? | **Yes.** All participants will be notified of their selection status.                                                                                      |
| Can I update my submission after sending it?   | **Yes.** Updates are encouraged until the deadline.                                                                                                        |
| Can I withdraw my application?                 | **Yes.** Either by sending an email to hello@vuetifyjs.com or simply don't submit a coding challenge.                                                      |

## Final Thoughts

One of my first major coding challenges was "Build a Blog," and it played a pivotal role in shaping my career. It not only tested my ability to structure and manage a project but also helped me develop a deeper understanding of fundamental web technologies. Over the years, I’ve found that this challenge remains one of the best ways to assess a developer’s grasp of core concepts, their ability to follow exact requirements, and their approach to writing clean, maintainable code. Whether you’re refining your skills or proving your expertise, this is an opportunity to showcase your proficiency. Good luck!

