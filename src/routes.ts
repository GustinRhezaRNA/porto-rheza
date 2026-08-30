import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./pages/HomePage.tsx"),
  route("projects/:slug", "./pages/ProjectDetail.tsx"),
] satisfies RouteConfig;
