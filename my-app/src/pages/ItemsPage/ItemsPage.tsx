import "./ItemsPage.css";
import { FC, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import { Item, getItemsByKey } from "../../modules/itunesApi";
import { InputField } from "../../components/InputField/InputField"
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { ItemCard } from "../../components/MusicCard/ItemCard";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { SONGS_MOCK } from "../../modules/mock";

const ItemsPage: FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [music, setMusic] = useState<Item[]>([]);

  const navigate = useNavigate();

  const handleSearch = () => {
    setLoading(true);
    getItemsByKey(searchValue)
      .then((response) => {
        setMusic(
          response.items
        );
        setLoading(false);
      })
      .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени
        setMusic(
          SONGS_MOCK.results.filter((item) =>
            item.item_name
              .toLocaleLowerCase()
              .startsWith(searchValue.toLocaleLowerCase())
          )
        );
        setLoading(false);
        console.log("no response");
      });
  };
  const handleCardClick = (id: number) => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.ITEMS}/${id}`);
  };

  const logoClick = () => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.HOME}`);
  };

  return (
    <div className="space">
      <Header
        onSubmit={logoClick}
      />
      <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.ITEMS }]} />
      <InputField
        value={searchValue}
        setValue={(value) => setSearchValue(value)}
        loading={loading}
        onSubmit={handleSearch}
      />

      {loading && ( //здесь можно было использовать тернарный оператор, но это усложняет читаемость
        <div className="loadingBg">
          <Spinner animation="border" />
        </div>)
      }
      {!loading &&
        (!music.length /* Проверка на существование данных */ ? (
          <div>
            <h1>К сожалению, пока ничего не найдено :(</h1>
          </div>
        ) : (
          <div className="container">
            {music.map((item, index) => (
              <Col key={index}>
                <ItemCard
                  ItemDetailedHandler={() => handleCardClick(item.item_id)}
                  {...item}
                />
              </Col>
            ))}
          </div>
        ))}
    </div>
  );
};

export default ItemsPage;