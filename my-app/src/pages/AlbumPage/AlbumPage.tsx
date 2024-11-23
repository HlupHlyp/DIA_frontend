import "./AlbumPage.css";
import { FC, useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { useParams } from "react-router-dom";
import { Item, getItemById } from "../../modules/itunesApi";
import { Col, Row, Spinner, Image } from "react-bootstrap";
//import { ALBUMS_MOCK } from "../../modules/mock";
import DefaultImage from "../../assets/DefaultImage.jpeg";
import { SONGS_MOCK } from "../../modules/mock";

export const AlbumPage: FC = () => {
  const [pageData, setPageDdata] = useState<Item>();

  const { id } = useParams(); // ид страницы, пример: "/albums/12"

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
    <div>
      <BreadCrumbs
        crumbs={[
          { label: ROUTE_LABELS.ALBUMS, path: ROUTES.ALBUMS },
          { label: pageData?.item_name || "Альбом" },
        ]}
      />
      {pageData ? ( // проверка на наличие данных, иначе загрузка
        <div className="container">
          <Row>
            <Col md={6}>
              <p>
                Альбом: <strong>{pageData.item_name}</strong>
              </p>
              <p>
                Исполнитель: <strong>{pageData.item_name}</strong>
              </p>
            </Col>
            <Col md={6}>
              <Image
                src={pageData.img_link || DefaultImage} // дефолтное изображение, если нет artworkUrl100
                alt="Картинка"
                width={100}
              />
            </Col>
          </Row>
        </div>
      ) : (
        <div className="album_page_loader_block">{/* загрузка */}
          <Spinner animation="border" />
        </div>
      )}
    </div>
  );
};