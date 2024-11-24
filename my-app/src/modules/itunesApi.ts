export interface Item {
  img_link: string;
  item_name: string;
  short_description: string;
  item_cost: number;
  item_id: number;
  long_description: string;
  specification: string;
}
export interface ItemResult {
  resultCount: number;
  results: Item[];
}

export const getItemsByKey = async (keyWord = ""): Promise<ItemResult> => {
  return fetch(`https://127.0.0.1:7000/search?request=${keyWord}`).then(
    (response) => response.json()
  );
};

export const getItemById = async (
  itemId: number | string
): Promise<ItemResult> => {
  return fetch(`https://127.0.0.1:7000/${itemId}`).then(
    (response) => response.json()
  );
};