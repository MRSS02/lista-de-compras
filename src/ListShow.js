import "./index.css"
import ReactDOM from 'react-dom';


function ListShow(props) {

  function renderTextContent(element, index) {
      return (
        <div className="ListedItem">
          <h3>{element.name}</h3>
          <p className="ListedDetails">
            {element.description} <br />
            Quantidade: {props.buyQuantity[element.id]}<br />
            Valor: R${Math.floor(element.price)},
            {(element.price - Math.floor(element.price)).toFixed(2).substring(2)}
          </p>
        </div>
      )
  }

  let renderedText = (
    <div id="ListShow">
      {props.buyList.map((element, index) =>
        renderTextContent(element, index))}
      <br />
      <div>
        Valor total: R${Math.floor(props.totalValue)},
        {(props.totalValue - Math.floor(props.totalValue)).toFixed(2).substring(2)}
      </div>
    </div>
  );

  return renderedText;
}

export default ListShow;
