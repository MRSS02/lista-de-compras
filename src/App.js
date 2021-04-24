import logo from './logo.svg';
import './App.css';
import ListShow from "./ListShow"
import ShopList from "./ShopList"
import ReactDOM from "react-dom"
import React, { useState, useEffect } from "react"

function App() {

  let listedElements = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"
  ]
  let listedPrice = [
    "0.25", "0.5", "1", "5.25", "4", "5", "6", "7", "8", "9"
  ]
  let initializeBuyQuantity = []
  for (let x = 0; x < listedElements.length; x++)
   initializeBuyQuantity[x] = 0;
  const [list, setList] = useState([]);
  const [price, setPrice] = useState([]);
  const [id, setId] = useState([]);
  const [buyQuantity, setBuyQuantity] = useState(initializeBuyQuantity);
  const [totalValue, setTotalValue] = useState(0)

  useEffect(() => {
  let previewTotal = calculateTotal()
  setTotalValue(previewTotal)
  })
  function calculateTotal() {
    let total = 0
    for (let x = 0; x < listedElements.length; x++) {
      total += listedPrice[x] * buyQuantity[x]
    }
    return total;
  }


  return (
    <div className="App">
      <div id="title">
       <h1>Gerador de Lista de Compras</h1>
       <p>Organize sua lista de compras mais eficientemente com o Gerador de Lista de Compras!</p>
      </div>
      <ShopList listedElements={listedElements} price={price}
      setPrice={setPrice} listedPrice={listedPrice}
      setBuyQuantity={setBuyQuantity} setList={setList}
      buyQuantity={buyQuantity} list={list}
      id={id} setId={setId}
      setTotalValue={setTotalValue} totalValue={totalValue}/>
      <ListShow buyQuantity={buyQuantity} price={price} list={list}
      totalValue={totalValue} id={id}/>
    </div>
  );
}

export default App;
