import "./index.css"
import ReactDOM from 'react-dom';


function ListShow(props) {

  function renderTextContent(element, index) {
      return (
        <div className="ListedItem">
          <p className="ListedDetails">
            {element} <br />
            Quantidade: {props.buyQuantity[props.id[index]]}<br />
            Valor: R${Math.floor(props.price[index])},
            {(props.price[index] - Math.floor(props.price[index])).toFixed(2).substring(2)}
          </p>
        </div>
      )
  }

  let renderedText = (
    <div id="ListShow">
      {props.list.map((element, index) =>
        renderTextContent(element, index))}
      <br />
      Valor total: R${Math.floor(props.totalValue)},
      {(props.totalValue - Math.floor(props.totalValue)).toFixed(2).substring(2)}

    </div>
  );

  return renderedText;
}

export default ListShow;
