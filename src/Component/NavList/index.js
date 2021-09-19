import React from "react";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import { withRouter } from "react-router";

function NavList(props) {
  let location = useLocation();
  const {
    list = [
      {
        name: "Home",
        icon: "grid_view",
        route: "/home",
        subList: [
          { name: "Transactions", route: "/alltransaction" },
          { name: "ledger", route: "/ledger" },
        ],
      },
      {
        name: "Cards",
        icon: "credit_card",
        route: "/cards",
        subList: [],
      },
      {
        name: "Invoice",
        icon: "send",
        route: "/invoice",
        subList: [],
      },
      {
        name: "Chart",
        icon: "pie_chart",
        route: "/chart",
        subList: [],
      },
      {
        name: "Transaction",
        icon: "monetization_on",
        route: "/transaction",
        subList: [
          { name: "Submitted", route: "/submitted" },
          { name: "Approval", route: "/approval" },
          { name: "History", route: "/history" },
        ],
      },
      {
        name: "Accounting",
        icon: "receipt_long",
        route: "/accounting",
        subList: [
          { name: "Transactions", route: "/mytransaction" },
          { name: "ledger", route: "/ledger" },
          { name: "Integrations", route: "/integration" },
        ],
      },
      {
        name: "Filter",
        icon: "tune",
        route: "/filter",
        subList: [],
      },
    ],
  } = props;
  const returnMasterList = () => {
    const loc = location?.pathname || "/home";
    return (
      <ul>
        {list?.map((el) => (
          <Link
            key={el.route}
            to={`${el.route}${el.subList?.[0]?.route || ""}`}
          >
            <li className={loc.includes(el.route) ? "active" : ""}>
              <span className="material-icons">{el.icon}</span>
            </li>
          </Link>
        ))}
      </ul>
    );
  };

  const returnSubList = () => {
    const particularList =
      list?.find((el) => location?.pathname.includes(el.route)) || list[0];
    return (
      <div>
        {particularList.name}
        {particularList.subList.length > 0 ? (
          <ul className="nav-sublist-item">
            {particularList.subList?.map((el) => (
              <Link
                key={`${particularList.route}${el.route}`}
                to={`${particularList.route}${el.route}`}
              >
                <li
                  className={
                    `${particularList.route}${el.route}` === location.pathname
                      ? "active"
                      : ""
                  }
                  key={el.route}
                >
                  {el.name}
                </li>
              </Link>
            ))}
          </ul>
        ) : (
          <div className="coming-soon">Coming soon</div>
        )}
      </div>
    );
  };

  return (
    <div className="navlist-wrapper">
      <div className="nav-master-wrapper">
        <div className="logo">V</div>
        <div className="nav-master-list">{returnMasterList()}</div>
      </div>
      <div className="nav-sub-list">{returnSubList()}</div>
    </div>
  );
}

export default withRouter(NavList);
