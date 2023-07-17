# npm-react-typescript-template

This repository serves as a base for creating npm packages using React and TypeScript. It comes preconfigured with a build process and a set of recommended packages for a modern development workflow.

You can read more about that repo [how to create your own npmjs package with typescript and css](https://hackernoon.com/building-efficient-npm-packages-with-react-typescript-and-css-modules-a-comprehensive-guide)

## Features

- **React & TypeScript**: Write your package in modern React with TypeScript for type safety and better developer experience.
- **CSS Modules**: Style your components in isolation using CSS Modules, avoiding CSS conflicts and enabling modular design.
- **ESLint**: Keep your code clean and adhere to the latest best practices in JavaScript and React.
- **Rollup**: Build your package efficiently with Rollup, bundling your React and TypeScript code into a single file for distribution.
- **PostCSS**: Use next-gen CSS features with PostCSS, and let the build process handle compatibility with older browsers.

## Usage

1. **Clone this repository** into a directory of your choice. You can do this with `git clone https://github.com/<username>/npm-react-typescript-template.git`, replacing `<username>` with your GitHub username.

2. **Navigate into the directory** with `cd npm-react-typescript-template`.

3. **Install the dependencies** with `npm install`.

4. **Start developing** your package! The entry point is `src/index.tsx`.

## Building the Package

When you're ready to build your package for distribution, just run `npm run build`. The built package will be in the `dist` directory, ready for publishing to npm.

## Contributing

This project is open for improvements and maintenance. Feel free to fork and make your own modifications.

## License

MIT
