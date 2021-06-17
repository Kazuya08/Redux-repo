/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarNumeroMin, alterarNumeroMax } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  // props.alterarMin(10000);

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMin(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMax(+e.target.value)}
          />
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

function mapDispatchToProps(dispatch) {
  return {
    alterarMin(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMin(novoNumero);
      dispatch(action); //ira chamar todos os reducers e o estado ira mudar
    },
    alterarMax(novoNumero) {
      // action creator -> action
      const action = alterarNumeroMax(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
