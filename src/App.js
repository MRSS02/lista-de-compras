import logo from './logo.svg';
import './App.css';
import ListShow from "./ListShow"
import ShopList from "./ShopList"
import ReactDOM from "react-dom"
import React, { useState, useEffect } from "react"

function App() {

  const sellList = [
    { name: "Sintendo Nwitch",
    description: "O mais novo console da Sintendo",
    price: "3000"},
    { name: "RT 3030",
    description: "O mais novo lançamento de entrada da Nsomia em placas de vídeo",
    price: "5000"},
    { name: "Ascensor cortador de teia 5990 queijo",
    description: "O melhor processador do mundo, construído pela Ame Receba",
    price: "27000"},
    { name: "não inove 11900",
    description: "Churrasqueira de alta potência, projetada pela Dentro Telefônica",
    price: "3200"},
    { name: "não inove 11900 capa",
    description: "Churrasqueira de alta potência e desbloqueada, projetada pela Dentro Telefônica",
    price: "4000"},
    { name: "Team Rocket rx6900xt",
    description: "A placa de vídeo mais rápida do mundo, feita na arquitetura Hey Listen, mas sem suporte a traços rajantes",
    price: "10100"},
    { name: "The Subtitles of Link Skyward Sword de novo edition",
    description: "O clássico jogo do Sintendo URSS, agora para Sintendo Nwitch",
    price: "300"},
    { name: "Hyper Mario All Stars 35 years edition (limitado!!!!!)",
    description: "Jogue clássicos 3D do Hyper Mario, apenas para Sintendo Nwitch!!! Disponível até 31 de junho",
    price: "350"},
    { name: "Punk Eletrônico 2077",
    description: "Jogo do ano, no qual você é um robô punk e pode fazer tudo, inclusive transformar pessoas no cristo redentor",
    price: "300"},
    { name: "Sintendo Nwitch luz",
    description: "Sintendo Nwitch, só que colorido neon e sem a funcionalidade que faz dele um Sintendo Nwitch. Mas tem rgb",
    price: "1700"},


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
      <button className="save" onClick={save}>Salvar</button>
    </div>
  );
}

export default App;
