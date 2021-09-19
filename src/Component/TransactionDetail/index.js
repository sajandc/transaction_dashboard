import React from "react";
import { ToggleTab } from "../../CustomComponent";
import "./style.scss";

export default function TransactionDetails({ transaction }) {
  const [value, setValue] = React.useState("details");
  const { merchant, status, amount, date, owner = "" } = transaction;
  return (
    <div>
      <ToggleTab
        tabs={[
          { text: "Details", value: "details" },
          { text: "Activity", value: "activity" },
        ]}
        value={value}
        onChange={(val) => setValue(val)}
        variant="primary"
        wrapperStyle={{ textAlign: "center", fontSize: "14px" }}
      />
      <div className="transaction-header">
        <div className="grediant-background">
          <div className="icon-container">
            <span className="status">{status}</span>
            <span className="material-icons icon">flatware</span>
          </div>
        </div>

        <div className="child-container">
          <div className="info">
            <div className="merchant">{merchant}</div>
            <div className="detail-amount">{amount}</div>
            <div className="date">{date}</div>
          </div>
          <div>
            <span className="owner">{owner.slice(0, 1)}</span>
            {owner}
          </div>
          <div>
            <span className="material-icons owner">cloud_queue</span>
            {owner}
          </div>
        </div>
        <div className="footer">
          <button>
            <span className="material-icons green">thumb_up</span> Okay
          </button>
          <button>
            <span className="material-icons red">thumb_down_alt</span>
            Not Okay
          </button>
          <button>
            <span className="material-icons orange">chat_bubble</span>Need Details
          </button>
        </div>
      </div>
    </div>
  );
}
