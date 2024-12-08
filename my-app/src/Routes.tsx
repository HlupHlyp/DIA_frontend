export const ROUTES = {
  HOME: "/",
  ITEMS: "/items",
}
export type RouteKeyType = keyof typeof ROUTES;
export const ROUTE_LABELS: { [key in RouteKeyType]: string } = {
  HOME: "Главная",
  ITEMS: "Элементы",
};