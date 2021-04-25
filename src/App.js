import logo from './logo.svg';
import './App.css';
import ListShow from "./ListShow"
import ShopList from "./ShopList"
import ReactDOM from "react-dom"
import React, { useState, useEffect } from "react"

function App() {

  const sellList = [
    { name: "A", descrption: "A", price: "0.5"},
    { name: "B", descrption: "B", price: "0.25"},
    { name: "C", descrption: "C", price: "1"},
  ]
  const [buyList, setBuyList] = useState([]);
  let intializeBuyQuantity = [];
  for (let x = 0; x < sellList.length; x++) intializeBuyQuantity[x] = 0;
  const [totalValue, setTotalValue] = useState(0)
  const [buyQuantity, setBuyQuantity] = useState(intializeBuyQuantity);
  function save() {
    alert("A sua lista foi salva!")
    console.log(JSON.stringify(buyList))
  }

  useEffect(() => {
  let previewTotal = calculateTotal()
  setTotalValue(previewTotal)
  })
  function calculateTotal() {
    let total = 0
    for (let x = 0; x < buyList.length; x++) {
      total += buyList[x].price * buyQuantity[buyList[x].id]
    }
    return total;
  }


  return (
    <div className="App">
      <div id="title">
       <h1>Gerador de Lista de Compras</h1>
       <p>Organize sua lista de compras mais eficientemente com o Gerador de Lista de Compras!</p>
      </div>
      <ShopList sellList={sellList} setBuyQuantity={setBuyQuantity}
      buyList={buyList} setBuyList={setBuyList}
      buyQuantity={buyQuantity} totalValue={totalValue}
      setTotalValue={setTotalValue}/>
      <ListShow sellList={sellList} buyList={buyList}
      buyQuantity={buyQuantity} totalValue={totalValue}/>
      <button onClick={save}>Salvar</button>
    </div>
  );
}

export default App;
