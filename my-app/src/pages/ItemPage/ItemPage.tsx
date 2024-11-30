import "./ItemPage.css";
import { Component, useEffect, useState } from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTES, ROUTE_LABELS } from "../../Routes";
import { useParams } from "react-router-dom";
import { Item, getItemById } from "../../modules/ItemsApi";
import { Spinner } from "react-bootstrap";
import DefaultImage from "../../assets/DefaultImage.jpg";
import { ITEMS_MOCK } from "../../modules/mock";
import { Header } from "../../components/Header/Header";
import { withRouter } from "react-router-dom";

interface IPageState {
  pageData: null | Item;
}

interface IPageProps {
  id: any,
}

type State = IPageState
type Props = IPageProps

export function ItemPage() {
  const { id } = useParams();

  return <ItemPageClass id={id} />;
}

export class ItemPageClass extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  };

  public state: State = {
    pageData: null,
  };

  componentDidMount?() {
    const { id } = this.props
    console.log("componentDidMount");
    if (id) {
      console.log("Id exists");
      getItemById(id)
        .then((response) => {
          //console.log(response)
          this.setState({ pageData: response })
          console.log(this.state.pageData)
        })
        .catch(
          () => {
            const item = ITEMS_MOCK.results.find(
              (item) => String(item.item_id) == String(id)
            )
            this.setState({
              pageData: item,
            })
          } /* В случае ошибки используем мок данные, фильтруем по ид */
        );
    }
  }
  render() {
    if (this.state.pageData == null) {
      return (
        < div className="space" >
          <Header />
        </div>
      );
    }
    else {
      return (
        < div className="space" >
          <Header />
          <BreadCrumbs
            crumbs={[
              { label: ROUTE_LABELS.ITEMS, path: ROUTES.ITEMS },
              { label: this.state.pageData?.item_name || "Альбом" },
            ]}
          />
          {
            this.state.pageData ? ( // проверка на наличие данных, иначе загрузка
              <div className="space">
                <div className="item_page_container">
                  <img src={this.state.pageData.img_link || DefaultImage} className="item_page_half" />
                  <div className="item_page_half">
                    <div className="item_page_title">{this.state.pageData.item_name}</div>
                    <div className="item_page_cost">{this.state.pageData.item_cost} р.</div>
                    <div className="item_page_description">
                      <b>Описание </b><br />
                      <div>
                        {this.state.pageData.long_description}
                      </div>
                      <div className="item_specification">{this.state.pageData.specification.replaceAll('!', '\n')}</div>
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
    }

  }
}

