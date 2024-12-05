import "./ItemsPage.css";
import { Component } from "react";
import { Spinner } from "react-bootstrap";
import { Item, getItemsByKey } from "../../modules/ItemsApi";
import { InputField } from "../../components/InputField/InputField"
import { BreadCrumbs } from "../../components/BreadCrumbs/BreadCrumbs";
import { ROUTE_LABELS } from "../../Routes";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { Header } from "../../components/Header/Header";
import { ITEMS_MOCK } from "../../modules/mock";

interface IsPageState {
  items: null | Item[];
  loading: boolean;
  searchValue: string;
}

interface IsPageProps {
}

type State = IsPageState
type Props = IsPageProps

export class ItemsPage extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  };

  public state: State = {
    items: null,
    loading: false,
    searchValue: "",
  };

  componentDidMount?() {
    this.handleSearch()
  }
  handleSearch = () => {
    this.setLoading(true);
    getItemsByKey(this.state.searchValue)
      .then((response) => {
        this.setItems(
          response.items
        );
        this.setLoading(false);
      })
      .catch(() => { // В случае ошибки используем mock данные, фильтруем по имени
        this.setItems(
          ITEMS_MOCK.results.filter((item) =>
            (item.item_name + item.short_description + item.long_description + item.specification).toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
          )
        );
        this.setLoading(false);
      });
  };

  setSearchValue(value: string) {
    this.setState({
      searchValue: value,
    })
  }

  setLoading(value: boolean) {
    this.setState({
      loading: value,
    })
  }

  setItems(value: null | Item[]) {
    this.setState({
      items: value,
    })
  }

  render() {
    if (this.state.items == null) {
      console.log("!!!")
      return (
        < div className="space" >
          <Header />
          <BreadCrumbs
            crumbs={[{ label: ROUTE_LABELS.ITEMS }]}
          />
          <InputField
            value={this.state.searchValue}
            setValue={(value) => this.setSearchValue(value)}
            onSubmit={this.handleSearch}
          />
        </div>
      );
    }
    else {
      return (
        <div className="space">
          <Header />
          <BreadCrumbs crumbs={[{ label: ROUTE_LABELS.ITEMS }]} />
          <InputField
            value={this.state.searchValue}
            setValue={(value) => this.setSearchValue(value)}
            onSubmit={this.handleSearch}
          />

          {this.state.loading && ( //здесь можно было использовать тернарный оператор, но это усложняет читаемость
            <div className="loadingBg">
              <Spinner animation="border" />
            </div>)
          }
          {!this.state.loading &&
            (!this.state.items.length /* Проверка на существование данных */ ? (
              <div>
                <h1>К сожалению, пока ничего не найдено :(</h1>
              </div>
            ) : (
              <div className="container">
                {this.state.items.map((item) => (
                  <ItemCard
                    ItemDetailed={String("items/" + item.item_id)}
                    {...item}
                  />
                ))}
              </div>
            ))}
        </div >

      );
    }

  }
}
