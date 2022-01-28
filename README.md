# Nano JSX Template

A [Nano JSX](https://nanojsx.github.io/) Template for building Isomorphic JSX Apps.

## Download

```bash
# download
npx degit nanojsx/template nano

# directory
cd nano

# install
npm i

# development
npm start

# production
npm run build

# serve (on http://localhost:3000/)
npm run serve
```

## Structure

```bash
root
├── public            # all your static files
├── src
│    ├── client       # bundles for hydration
│    ├── components   # your custom components
│    ├── layouts      # your app's layouts
│    ├── pages        # your pages
│    └── server       # all server-side code
```

Every file in `/client` will be bundles separately.

## TODOs

All the things below will hopefully be implemented soon.

- Auto refresh browser on changes
- Improve Service Worker cache strategy
- Pre-Render to static HTML

## LazyLoading ChunkLoadError on localhost

On localhost you may experience the following error when LazyLoading while switching routes:

```
Uncaught (in promise) ChunkLoadError: Loading chunk
```

This is related to the disabled browser option:

```
Allow invalid certificates for resources loaded from localhost.
```

**Fix for Google Chrome**

In the Chrome address bar, type [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost) and **enable** the option.

**Fix for Firefox**

No supported option to disable for localhost only.
