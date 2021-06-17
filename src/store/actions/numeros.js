// Action Creator
export function alterarNumeroMin(novoNumero) {
  return {
    type: "NUM_MIN_ALTERADO",
    payload: novoNumero,
  };
}
