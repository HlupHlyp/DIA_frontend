import { dest_api } from "../../target_config"

export interface Item {
  img_link: string;
  item_name: string;
  short_description: string;
  item_cost: number;
  item_id: number;
  long_description: string;
  specification: string;
  item_type: string;
  item_voltage: number;
  item_capacity: number;
  item_power: number;
}
export interface ItemResult {
  resultCount: number;
  results: Item[];
}

export const getItemsByKey = async (keyWord = ""): Promise<ItemResult> => {
  return fetch(`api/items/?search_request=${keyWord}`).then(
    (response) => response.json()
  );
};

export const getItemById = async (itemId: number | string): Promise<ItemResult> => {
  return fetch('/api' + '/items/' + itemId + '/', { method: "GET", credentials: 'include' }).then(
    (response) => response.json()
  );
};