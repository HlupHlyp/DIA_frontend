import "./BreadCrumbs.css";
import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import { ROUTES } from "../../Routes";

interface ICrumb {
  label: string;
  path?: string;
}

interface BreadCrumbsProps {
  crumbs: ICrumb[];
}

type Props = Readonly<BreadCrumbsProps>;

export class BreadCrumbs extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
      <ul className="breadcrumbs">
        <li>
          <Link to={ROUTES.HOME}>Главная</Link>
        </li>
        {!!this.props.crumbs.length &&
          this.props.crumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <li className="slash">/</li>
              {index === this.props.crumbs.length - 1 ? (
                <li>{crumb.label}</li>
              ) : (
                <li>
                  <Link to={crumb.path || ""}>{crumb.label}</Link>
                </li>
              )}
            </React.Fragment>
          ))}
      </ul>
    );
  }
}



/*export const BreadCrumbs: FC<BreadCrumbsProps> = (props) => {
  const { crumbs } = props;

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to={ROUTES.HOME}>Главная</Link>
      </li>
      {!!crumbs.length &&
        crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="slash">/</li>
            {index === crumbs.length - 1 ? (
              <li>{crumb.label}</li>
            ) : (
              <li>
                <Link to={crumb.path || ""}>{crumb.label}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
    </ul>
  );
};*/