
const ENDPOINTS = {
	BACKEND: {
		GET: {
			USER: "/:id",
			POST: "/:id",
		},
		GET_ALL: {
			USER: "",
			POST: "",
		},
			},
	FRONTEND: {
		GET: {
			USER: (id: number) => ("user" + "/" + id),
			POST: (id: number) => ("post" + "/" + id),
		},
		GET_ALL: {
			USER: () => ("user"),
			POST: () => ("post"),
		},
			},
		BASE: {
		USER: "user",
		POST: "post",
	},
};
export default ENDPOINTS