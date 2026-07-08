export const routesConfig = {

  home: "/",

  about: "/about",

  services: "/services",

  pricing: "/pricing",

  portfolio: "/portfolio",

  blog: "/blog",

  contact: "/contact",

  login: "/login",

  register: "/register",

  dashboard: "/dashboard",

  projects: "/dashboard/projects",

  courses: "/courses",

  settings: "/dashboard/settings",

  profile: "/dashboard/profile",

  notifications: "/dashboard/notifications",

  orders: "/dashboard/orders"

} as const;



export type RouteKey =
keyof typeof routesConfig;
