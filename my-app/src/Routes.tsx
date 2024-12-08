export const ROUTES = {
  HOME: "/solar_plant_calc_front",
  ITEMS: "/solar_plant_calc_front/items",
}
export type RouteKeyType = keyof typeof ROUTES;
export const ROUTE_LABELS: { [key in RouteKeyType]: string } = {
  HOME: "Главная",
  ITEMS: "Элементы",
};