import "./index.css"
import ReactDOM from 'react-dom';

function ShopList(props) {

  function addItem(index) {
    let newBuyQuantity = props.buyQuantity.slice()
    newBuyQuantity[index] += 1;
    props.setBuyQuantity(newBuyQuantity)
    if (props.buyQuantity[index] == 0) {
      props.setList([...props.list, props.listedElements[index]]);
      props.setPrice([...props.price, props.listedPrice[index]]);
      props.setId([...props.id, index])
    }
  }

  function removeItem(index) {
    if (props.buyQuantity[index] != 0) {
      let newBuyQuantity = props.buyQuantity.slice()
      newBuyQuantity[index] -= 1;
      props.setBuyQuantity(newBuyQuantity)
    }
    if (props.buyQuantity[index] == 0) {
      let newList = [...props.list]
      newList.splice(props.id.indexOf(index), 1)
      let newPrice = [...props.price]
      newPrice.splice(props.id.indexOf(index), 1)
      props.setList(newList);
      props.setPrice(newPrice);
    }
  }

  function renderTextContent(element, index) {
      return (
        <div className="ListedItem">
          <p className="ListedDetails">
            {element} <br />
            R${Math.floor(props.listedPrice[index])},
            {(props.listedPrice[index] - Math.floor(props.listedPrice[index])).toFixed(2).substring(2)}
          </p>
          <button onClick={() => removeItem(index)}> - </button>
          <button onClick={() => addItem(index)}> + </button>
        </div>
      )
  }

  let renderedText = (
    <div id="ShopList">
      {props.listedElements.map((element, index) =>
        renderTextContent(element, index))}
    </div>
  );

  return renderedText;
}

export default ShopList;
