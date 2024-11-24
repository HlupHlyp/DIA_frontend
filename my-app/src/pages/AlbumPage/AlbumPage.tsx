import "./AlbumPage.css";
import { FC, useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { useParams } from "react-router-dom";
import { Item, getItemById } from "../../modules/itunesApi";
import { Spinner } from "react-bootstrap";
//import { ALBUMS_MOCK } from "../../modules/mock";
import DefaultImage from "../../assets/DefaultImage.jpg";
import { SONGS_MOCK } from "../../modules/mock";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";

export const AlbumPage: FC = () => {
  const [pageData, setPageDdata] = useState<Item>();

  const { id } = useParams(); // ид страницы, пример: "/albums/12"

  const navigate = useNavigate();

  const logoClick = () => {
    // клик на карточку, переход на страницу альбома
    navigate(`${ROUTES.HOME}`);
  };

  useEffect(() => {
    if (!id) return;
    getItemById(id)
      .then((response) => setPageDdata(response.results[0]))
      .catch(
        () =>
          setPageDdata(
            SONGS_MOCK.results.find(
              (item) => String(item.item_id) == id
            )
          ) /* В случае ошибки используем мок данные, фильтруем по ид */
      );
  }, [id]);

  return (
    <div className="space">
      <Header
        onSubmit={logoClick}
      />
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.ITEMS, path: ROUTES.ITEMS },
          { label: pageData?.item_name || "Альбом" },
        ]}
      />
      {pageData ? ( // проверка на наличие данных, иначе загрузка
        <div className="space">
          <div className="item_page_container">
            <img src={pageData.img_link || DefaultImage} className="item_page_half" />
            <div className="item_page_half">
              <div className="item_page_title">{pageData.item_name}</div>
              <div className="item_page_cost">{pageData.item_cost} р.</div>
              <div className="item_page_description">
                <b>Описание </b><br />
                <div>
                  {pageData.long_description}
                </div>
                <div className="item_specification">{pageData.specification.replaceAll('!', '\n')}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="album_page_loader_block">{/* загрузка */}
          <Spinner animation="border" />
        </div>
      )
      }
    </div >
  );
};