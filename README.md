# React Meetup Bratislava 3/24

Public repository for a presentation on a React Meetup.

## Main focus

1. Focusing input elements
   1. Autofocus
   2. Accessibility & tab navigation
   3. After an action
2. Technical showcase
   1. Zustand https://github.com/pmndrs/zustand
   2. Tailwind https://tailwindcss.com/
   3. Shadcn/ui https://ui.shadcn.com
   4. TypeScript https://www.typescriptlang.org/

## Technical notes

### Setup

1. `npm create vite@latest react-meetup-ba -- --template=react-ts` 
   (More examples: https://github.com/vitejs/awesome-vite#templates)
2. https://ui.shadcn.com/docs/installation/vite

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### Zustand docs

- https://docs.pmnd.rs/zustand/guides/typescript

### Setup shadcn/ui

- https://ui.shadcn.com/docs/installation/vite
