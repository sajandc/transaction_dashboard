import React from "react";
import Title from "../../CustomComponent/Title";
import { useRouteMatch } from "react-router-dom";

export default function Transaction() {
  const routeMatch = useRouteMatch();
  return (
    <div className="child-wrapper">
      <Title name={routeMatch.params.aId} />
    </div>
  );
}
