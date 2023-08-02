import React from "react";

const TabelaFoot = (props) => (
  <tfoot>
    <tr>
      <td colSpan="4">Esta tabela possui {props.qdeLivros} livros</td>
    </tr>
  </tfoot>
);
export default TabelaFoot;