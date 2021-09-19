import React, { useEffect, useState } from "react";
import { ToggleTab, Drawer, Table } from "../../CustomComponent";
import TransactionDetails from "../TransactionDetail";
import "./style.scss";

export default function TableWrapper(props) {
  const [value, setValue] = useState("all");
  const [selectedTransaction, setSelectedTransation] = useState([]);
  const [clickedrow, onRowClicked] = useState({});

  useEffect(() => {
    setValue("all");
  }, [props.parentTab]);

  const tableHeaderCol = () => {
    return [
      { text: "Owner", key: "owner", Col: (cell) => cell },
      {
        text: "Merchant",
        key: "merchant",
        showTitle: true,
        Col: (cell) => cell,
      },
      {
        text: "Amount",
        key: "amount",
        className: "amount",
        Col: (cell) => <div className="amount">{cell}</div>,
      },
      { text: "Date", key: "date", Col: (cell) => cell },
      {
        text: "Status",
        key: "status",
        Col: (cell) => <span className="status">{cell}</span>,
      },
      {
        text: "",
        key: "",
        Col: (cell) => (
          <span className="action">
            {
              <div>
                <span className="material-icons green">thumb_up</span>
                <span className="material-icons margin-l-5 red">
                  thumb_down_alt
                </span>
              </div>
            }
          </span>
        ),
      },
      {
        text: "",
        key: "",
        Col: (cell) => <span className="material-icons receipt">receipt</span>,
      },
    ];
  };
  return (
    <div className="table-wrapper">
      <div className="toggle-header">
        <ToggleTab
          tabs={[
            { text: "All", value: "all" },
            { text: "incomplete", value: "incomplete" },
            { text: "review pending", value: "review_pending" },
            { text: "pending to verify", value: "pending_to_verify" },
            { text: "pending to sync", value: "pending_to_sync" },
            { text: "synced", value: "synced" },
          ]}
          value={value}
          onChange={(val) => {
            props.onChildTabChange(val);
            setValue(val);
          }}
          variant="secondary"
        />
      </div>
      <div className="table-data-wrapper">
        <Table
          data={props.data}
          header={tableHeaderCol()}
          onSelectAll={(event, val) => setSelectedTransation(val)}
          onSelectParticular={(event, val) => {
            event.stopPropagation();
            setSelectedTransation(val);
          }}
          selectedRow={selectedTransaction}
          onClickRow={(event, row) => onRowClicked(row)}
        />
      </div>
      {selectedTransaction.length > 0 && (
        <div className={`selected-transaction`}>
          <div className="d-flex">
            {`${selectedTransaction.length} Transaction Selected`}
            <div className="export">
              <span className="material-icons margin-r-5">pin_invoke</span>
              export
            </div>
          </div>
          <div>
            <span className="material-icons green">thumb_up</span>
            <span className="material-icons margin-l-5 red">
              thumb_down_alt
            </span>
          </div>
        </div>
      )}
      <Drawer
        id={clickedrow?.id}
        open={Object.keys(clickedrow).length > 0}
        onClose={() => onRowClicked({})}
      >
        <TransactionDetails transaction={clickedrow} />
      </Drawer>
    </div>
  );
}
