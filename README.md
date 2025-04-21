# U8.COM

This is an attempt to set a project up to replicate and improve upon u8.com.

## Framework7 CLI Options

This application is a Framework7 app created with following options:

```
{
  "cwd": "C:\\Users\\User\\Documents\\ced\\gaming-website",
  "type": [
    "pwa"
  ],
  "name": "gamingwebsite",
  "framework": "react",
  "template": "tabs",
  "bundler": "vite",
  "cssPreProcessor": "scss",
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkMode": true,
    "iconFonts": true
  },
  "customBuild": false
}
```

## Install Dependencies

For the installation of dependencies listed in `package.json`, just run:

```
npm install
```

## NPM Scripts

- 🔥 `start` - run development server
- 🔧 `dev` - run development server
- 🔧 `build` - build web app for production

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.

## Assets

Assets (icons, splash screens) source images are located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Coding Principles

- Consistency: Stick to the conventions laid out in this document.
- Readability: Write your code as if the next person to maintain it is a member of the Italian Mafia and knows your address. It should be legible and easy to follow.
- Comments: Comment your code whenever necessary, but please. Avoid obvious comments.
- Naming conventions: Use camel case for naming variables, and upper case for constants. Make the file names so clear it's almost obvious.
- Commits and pull requests: As much as possible, make commits descriptive. For pull requests, including changelogs are encouraged for ease of review. NO COMMITS SHALL BE MADE DIRECTLY INTO THE "dev" BRANCH UNLESS IT'S A HIGH PRIORITY CHANGE.
- Responsibility: Anyone who breaks the repository will spend the night fixing it "ALL BY THEMSELVES".
