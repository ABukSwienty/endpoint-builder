type Example =
  | "an example of prefixing the file with additional types"
  | string;

const ENDPOINTS = {
  BACKEND: {
    GET: {
      AUTHOR: "/:id/:type",
      SOMETHING: "/:id/:type",
      USER: "/:id/:type",
      POST: "/:id/:type",
    },
  },
  FRONTEND: {
    GET: {
      AUTHOR: (id: number, type: Example) => "author" + "/" + id + "/" + type,
      SOMETHING: (id: number, type: Example) =>
        "something" + "/" + id + "/" + type,
      USER: (id: number, type: Example) => "user" + "/" + id + "/" + type,
      POST: (id: number, type: Example) => "post" + "/" + id + "/" + type,
    },
  },
  BASE: {
    AUTHOR: "author",
    SOMETHING: "something",
    USER: "user",
    POST: "post",
  },
};
export default ENDPOINTS;
