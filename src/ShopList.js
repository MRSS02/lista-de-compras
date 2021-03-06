import "./index.css"
import ReactDOM from 'react-dom';

function ShopList(props) {

  function addItem(element, index) {
    let newBuyQuantity = props.buyQuantity.slice()
    newBuyQuantity[index] += 1;
    if (props.buyQuantity[index] == 0) {
      props.setBuyList([...props.buyList, { name: element.name,
      description: element.description,
      price: element.price,
      id: index,
      }])
    }
    props.setBuyQuantity([...newBuyQuantity])

  }

  function removeItem(index) {
    let newBuyQuantity = props.buyQuantity.slice()
    if (props.buyQuantity[index] != 0) {
      newBuyQuantity[index] -= 1;
    }
    if (props.buyQuantity[index] == 1) {
      let newList = [...props.buyList]
      newList.splice(props.buyList.indexOf(props.buyList.find(item => item.id === index)), 1)
      console.log(props.buyList.indexOf(props.buyList.find(item => item.id === index)))
      props.setBuyList([...newList])
    }
    props.setBuyQuantity([...newBuyQuantity])
  }

  function renderTextContent(element, index) {
      return (
        <div className="ListedItem">
          <div className="ListedDetails">
            <p>
              <h3>{element.name}</h3>
               <br />

              R${Math.floor(element.price)},
              {(element.price - Math.floor(element.price)).toFixed(2).substring(2)}
            </p>

              <button className="button" onClick={() => removeItem(index)}> - </button>
              <button className="button" onClick={() => addItem(element, index)}> + </button>

          </div>
          <p>{element.description}</p>
          <img src={process.env.PUBLIC_URL + element.image}
          className="image" alt="imagem"></img>
        </div>
      )
  }

  let renderedText = (
    <div id="ShopList">
      {props.sellList.map((element, index) =>
        renderTextContent(element, index))}
    </div>
  );

  return renderedText;
}

export default ShopList;
