import React from "react";

const TabelaHead = (props) => (
  <thead>
    <tr>
      <th colSpan="4">Tabela de livros</th>
    </tr>
    <tr>
      <th>ISBN</th>
      <th>
        Título
        <div className="container-setinhas">
          <div onClick={ () => props.ordenarCrescente() }>&#129093;</div>
          <div onCklick={ () => props.ordenarDecrescente() } >&#129095;</div>
        </div>
      </th>
      <th>Autor</th>
      <th></th>
    </tr>
  </thead>
);

export default TabelaHead;