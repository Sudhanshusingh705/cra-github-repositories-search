<div align="center">
  <br>
  <img src="https://www.kindpng.com/picc/m/694-6944052_github-octocat-png-github-inspectocat-github-search-transparent.png" alt="Github Octocat Png Github Inspectocat - Github Search, Transparent Png@kindpng.com" width="300px">
  <h1>🔎  Github repositories search  🔍</h1>
  <strong>Smoothly find github repositories</strong>
</div>
<br>

## 📷 Screenshots


### Desktop
https://user-images.githubusercontent.com/4978810/215914637-5650a3ed-4010-4c03-89e0-d47f9e4d674f.mov

### Mobile
https://user-images.githubusercontent.com/4978810/215918566-17876e2b-a0a4-49c6-82b1-212cc1ad37cd.mov


## 📖 Prerequisites

For development, you will only need Node.js installed on your environment.

### pnPm

I used [pnPm](https://pnpm.io/) to save disk space and boosting installation speed. ([benchmarks](https://pnpm.io/benchmarks))

You should be able to run the following command after the installation procedure [How to install pnPm](https://pnpm.io/installation)

    $ pnpm --version
    7.26.2

<details>
  <summary>Alternatives</summary>

<br>

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).

You should be able to run the following command after the installation procedure [How to install Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs/) .

    $ node --version
    v18.13.0

    $ npm --version
    8.19.3

### Yarn

[Yarn](https://yarnpkg.com/) is a package manager.
You should be able to run the following command after the installation procedure [How to install Yarn](https://yarnpkg.com/getting-started/install) .

    $ yarn --version
    1.22.10
</details>

---

## 🚧 Install

    $ git clone git@github.com:toantd90/cra-github-repositories-search.git
    $ cd cra-github-repositories-search
    $ pnpm install

## 👷 How to run

    $ pnpm start

---

## 💻 Technologies

- [React](https://reactjs.org/) JavaScript library for building user interfaces.

- [Typescript](https://www.typescriptlang.org/) a strict syntactical superset of JavaScript which adds optional static typing.

- [SCSS](https://sass-lang.com/) extend the functionality of an existing CSS of a site like variables, inheritance, and nesting with ease.

- [Prettier](https://prettier.io/) is an opinionated code formatter.

- [React Query](https://react-query-v3.tanstack.com/) makes fetching, caching, synchronizing and updating server state in your React applications a breeze.

- [Chakra UI](https://chakra-ui.com/) is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

- [React Router](https://reactrouter.com/en/main) enables "client side routing".

## 🚶 Approach

- `useThrottle` help to not stress the API with calls once typing every character. Delay time is configurable. (500ms is the default setting)

- [Chakra UI](https://chakra-ui.com/) used to build quick responsive UI. You don't need to write CSS for elements. Elements are also Accessibility supported already.

- In order to provide a smooth pagination I use [React Query](https://react-query-v3.tanstack.com/). It helps to prefetch the next page so users don't need to wait for the data to be fetched. React Query comes with data caching and also keeps the previous data so users can have a nice experience using the app.

## 📔 Notes

- Tools are provided by [Create React App](https://create-react-app.dev/)
- Folder structure is based on my repository at [react-typescript-starter-kit](https://github.com/toantd90/react-typescript-starter-kit)
- React-Query code from my repository at [react-query-examples
](https://github.com/toantd90/react-query-examples)

## ©️ License
MIT
