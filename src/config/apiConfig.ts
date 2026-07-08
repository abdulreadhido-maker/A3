export const apiConfig = {

  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",

  timeout: 30000,

  headers: {

    "Content-Type": "application/json",

    Accept: "application/json"

  },

  endpoints: {

    auth: "/auth",

    users: "/users",

    projects: "/projects",

    courses: "/courses",

    payments: "/payments",

    notifications: "/notifications",

    contact: "/contact",

    settings: "/settings",

    upload: "/upload",

    search: "/search"

  }

} as const;
