import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("be_my_val", "routes/be_my_val.tsx"),
  route("yes", "routes/yes.tsx"),
  route("gallery", "routes/gallery.tsx"),
] satisfies RouteConfig;
