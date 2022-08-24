# Endpoint-builder

> A simple tool for creating a typesafe .js file with an object that holds endpoints.

## About

Endpoint builder creates a .js file and .d.ts file of endpoints based on user config options. Endpoints can be strings or typesafe functions. Can read folder dirs for endpoints or paths can be added manually.

- Built with maintaining endpoints across several apps in mind (fx frontend <-> backend)

---

## Installation

`npm i endpoint-builder`

Add to your package.json scripts:

```
"scripts": {
    "build-endpoints": "endpoint-builder-init"
    ...
}
```

Run `npm run build-endpoints`

- The first run will create the config file in the root dir (endpoint.config.json). Run again after config to build files.

---

## Output example

```
type Example =
  | "an example of prefixing the file with additional types"
  | string;

const ENDPOINTS = {
  BACKEND: {
    GET: {
      AUTHOR: "/:id/:type",
      USER: "/:id/:type",
      POST: "/:id/:type",
    },
  },
  FRONTEND: {
    GET: {
      AUTHOR: (id: number, type: Example) => "author" + "/" + id + "/" + type,
      USER: (id: number, type: Example) => "user" + "/" + id + "/" + type,
      POST: (id: number, type: Example) => "post" + "/" + id + "/" + type,
    },
  },
}
```
