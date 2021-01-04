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

# serve
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
