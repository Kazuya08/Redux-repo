/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Card from "./Card";

export default (props) => {
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{5467}</strong>
        </span>
      </div>
    </Card>
  );
};
