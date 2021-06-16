/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Card from "./Card";

export default (props) => {
  return (
    <Card title="Sorteio de um Números" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{23}</strong>
        </span>
      </div>
    </Card>
  );
};
