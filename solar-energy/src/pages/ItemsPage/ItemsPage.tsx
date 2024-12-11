import "./ItemsPage.css";
import { useEffect, FC, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Item, getItemsByKey } from "../../modules/ItemsApi";
import { InputField } from "../../components/InputField/InputField"
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { ITEMS_MOCK } from "../../modules/mock";
import { useSearch, setSearchAction } from '../../slices/searchSlice'
import { useDispatch } from "react-redux"

const ItemsPage: FC = () => {
  const dispatch = useDispatch()
  const search = useSearch()
  //const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<Item[]>([])

  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    getItemsByKey(search)
      .then((response: any) => {
        setItems(
          response.items
        );
        setLoading(false);
      })
      .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени

        setItems(
          ITEMS_MOCK.results.filter((item) =>
            (item.item_name + item.short_description + item.long_description + item.specification).toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
        );
        setLoading(false);
      });
  };
  const handleCardClick = (id: number) => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.ITEMS}/${id}`);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="space">
      <Header />
      <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.ITEMS }]} />
      <InputField
        value={search}
        setValue={(value) => (dispatch(setSearchAction(value)))}
        loading={loading}
        onSubmit={handleSearch}
      />

      {loading && ( //здесь можно было использовать тернарный оператор, но это усложняет читаемость
        <div className="loadingBg">
          <Spinner animation="border" />
        </div>)
      }
      {!loading &&
        (!items.length /* Проверка на существование данных */ ? (
          <div>
            <h1>К сожалению, пока ничего не найдено :(</h1>
          </div>
        ) : (
          <div className="container">
            {items.map((item) => (
              <ItemCard
                ItemDetailedHandler={() => handleCardClick(item.item_id)}
                {...item}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default ItemsPage;