/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarNumeroMin } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  props.alterarMin(10000);

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} readOnly />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return {
    alterarMin(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMin(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo);
