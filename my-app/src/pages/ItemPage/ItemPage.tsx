import "./ItemPage.css";
import { FC, useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { useParams } from "react-router-dom";
import { Item, getItemById } from "../../modules/ItemsApi";
import { Spinner } from "react-bootstrap";
import DefaultImage from "../../assets/DefaultImage.jpg";
import { ITEMS_MOCK } from "../../modules/mock";
import { Header } from "../../components/Header/Header";

export const ItemPage: FC = () => {
  const [pageData, setPageDdata] = useState<Item>();

  const { id } = useParams(); // ид страницы, пример: "/albums/12"

  useEffect(() => {
    if (!id) return;
    getItemById(id)
      .then((response) => {
        setPageDdata(response)
      })
      .catch(
        () => {
          setPageDdata(
            ITEMS_MOCK.results.find(
              (item) => String(item.item_id) == id
            )
          )
        } /* В случае ошибки используем мок данные, фильтруем по ид */
      );
  }, [id]);

  return (
    <div className="space">
      <Header />
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.ITEMS, path: ROUTES.ITEMS },
          { label: pageData?.item_name || "Альбом" },
        ]}
      />
      {pageData ? ( // проверка на наличие данных, иначе загрузка
        <div className="space">
          <div className="item_page_container">
            <img src={"/minio/" + pageData.img_link || DefaultImage} className="item_page_half" />
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