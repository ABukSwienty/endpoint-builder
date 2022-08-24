# Endpoint-builder

> A simple tool for creating a typesafe .js file with an object that holds endpoints.

<br>

## About

Endpoint builder creates a .js file and .d.ts file of endpoints based on user config options. Endpoints can be strings or typesafe functions. Can read folder dirs for endpoints or paths can be added manually.

- Built with maintaining endpoints across several apps in mind (fx frontend <-> backend)

---

<br>

## Installation

```console
npm i endpoint-builder
```

Add to your package.json scripts:

```json
"scripts": {
    "build-endpoints": "endpoint-builder-init"
    ...
}
```

Run `npm run build-endpoints`

- The first run will create a config file at the root of your project (i.e. the first folder to include node_modules) (endpoint.config.json). Run again after config to build files.

---

<br>

## Output example

**Typescript file which is compiled to js**

```typescript
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
};

export default ENDPOINTS;
```

<br>

## Config options

| Option              | Description                                                                                                                                              | Defaults    | Type                   | Required |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------- | -------- |
| `const-name`        | The name of the endpoint object.                                                                                                                         | `ENDPOINTS` | string                 | no       |
| `file-prefixes`     | Add any additional information to add to the beginning of the endpoints file such as types or imports                                                    | `""`        | string[]               | no       |
| `slug-type`         | The slug identifier that is used when endpoint suffixes are typed. **Must contain `*slug*`.**                                                            | `:id*slug*` | string                 | no       |
| `include-path-name` | Include the path name in the endpoint. Can be overriden by parents                                                                                       | `false`     | boolean                | no       |
| `path-type`         | The type of path the endpoint should return — function                                                                                                   | `"string"`  | "string" OR "function" | no       |
| `parents`           | Nests all paths under parent keys. Useful if you need a distinction between an `ENDPOINT.FRONTEND` and an `ENDPOINT.BACKEND`. [More info here](#parents) | `null`      | Object                 | no       |
| `paths`             | Manually add endpoint paths as string array                                                                                                              | `null`      | string[]               | no       |
| `folders`           | Read a directory to get path names. Will automatically remove file extensions. [More info here](#folders-options).                                       | `null`      | Object                 | no       |
| `endpoints`         | The endpoint keys [More info here](#endpoint-options).                                                                                                   | Object      | `null`                 | **yes**  |

---

<br>

> For autocomplete help there is a json schema which can be found here: node_modules/endpoint-builder/endpoint.schema.json. Add as below to your **endpoint.config.json** file.

```json
"$schema": "node_modules/endpoint-builder/endpoint.schema.json",
```

<br>

---

### Endpoint options

| Option       | Description                                                                                                                           | Defaults | Type     | Required |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- | -------- |
| `excludeAll` | Will exclude all paths.                                                                                                               | `false`  | boolean  | no       |
| `exclude`    | Will exclude paths.                                                                                                                   | `[]`     | string[] | no       |
| `include`    | Will include paths.                                                                                                                   | `[]`     | string[] | no       |
| `suffix`     | Suffixes to be added at the end of the path. Supports types **IF** followed by a colon: ['id:number', 'type:string', 'custom-suffix'] | `""`     | string[] | no       |
| `custom`     | Custom paths.                                                                                                                         | `null`   | Object   | no       |

---

<br>

### Folders options

| Option    | Description                                            | Defaults | Type     | Required |
| --------- | ------------------------------------------------------ | -------- | -------- | -------- |
| `path`    | The path to the folder **relative** to the config file | `""`     | string   | no       |
| `exclude` | The dir items to exclude                               | `[]`     | string[] | no       |
| `include` | The dir items to include                               | `[]`     | string[] | no       |

---

<br>

### Parents options

| Option              | Description                                  | Defaults                                         | Type                     | Required |
| ------------------- | -------------------------------------------- | ------------------------------------------------ | ------------------------ | -------- |
| `path-type`         | The type of path the endpoint should return. | include-path-name ([see above](#config-options)) | `"string" OR "function"` | no       |
| `include-path-name` | Include the path name in the endpoint.       | include-path-name ([see above](#config-options)) | `boolean`                | no       |

<br>

## Example endpoint.json.config

```json
{
  "$schema": "node_modules/endpoint-builder/endpoint.schema.json",
  "slug-type": ":*slug*",
  "include-path-name": false,
  "include-base-paths": true,
  "path-type": "string",
  "const-name": "ENDPOINTS",
  "endpoints": {
    "GET": {
      "suffix": ["id:number", "type:Example"]
    },
    "GET_ALL": {}
  },
  "file-prefixes": [
    "type Example = \"an example of prefixing the file with additional types\" | string"
  ],
  "folders": {
    "SRC": {
      "path": "./test-read-src"
    }
  },
  "parents": {
    "BACKEND": {
      "path-type": "string",
      "include-path-name": false
    },
    "FRONTEND": {
      "path-type": "function",
      "include-path-name": true
    }
  },
  "paths": ["user", "post"]
}
```
