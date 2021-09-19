import React, { useEffect, useState } from "react";
import Title from "../../CustomComponent/Title";
import ToggleTab from "../../CustomComponent/ToggleTab";
import TableWrapper from "../TableWrapper";
import SearchBox from "../SearchBox";
import { useRouteMatch } from "react-router-dom";

export default function Accounting() {
  const [value, setValue] = useState("cards");
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    getData("cards", "all");
  }, []);

  const getData = (param1, param2) => {
    const url = `./${param1}/${param2}.json`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((dt) => {
        setData(dt.data);
        setOriginalData(dt.data);
      })
      .catch(() => {
        setData([]);
        setOriginalData([]);
      });
  };

  const onSearchBoxChange = (val) => {
    let dt = [];
    dt = [...originalData].filter((el) => {
      if (el.merchant.toLowerCase().includes(val)) {
        return el;
      }
    });
    setData(dt);
  };

  const routeMatch = useRouteMatch();

  const returnSubComponent = () => {
    switch (routeMatch?.params?.aId) {
      case "mytransaction": {
        return (
          <React.Fragment>
            <div className="margin-t-50 margin-b-30">
              <ToggleTab
                tabs={[
                  { text: "cards", value: "cards" },
                  { text: "bill pay", value: "bill_pay" },
                  { text: "reimbursement", value: "reimbursement" },
                  { text: "others", value: "others" },
                ]}
                value={value}
                onChange={(val) => {
                  setValue(val);
                  getData(val, "all");
                }}
                variant="primary"
              />
            </div>
            <SearchBox onChange={onSearchBoxChange} />
            <TableWrapper
              data={data}
              onChildTabChange={(val) => getData(value, val)}
              parentTab={value}
            />
          </React.Fragment>
        );
      }
      case "ledger": {
        return <div className="margin-t-50 margin-b-30">Coming Soon</div>;
      }
      case "integration": {
        return <div className="margin-t-50 margin-b-30">Coming Soon</div>;
      }
    }
  };

  return (
    <div className="child-wrapper">
      <Title name={routeMatch.params.aId} />
      {returnSubComponent()}
    </div>
  );
}
