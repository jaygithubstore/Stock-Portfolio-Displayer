import React from 'react'
import './StatsRow.css'
import StockSVG from './stock.svg'
import { db } from "./firebase";

function StatsRow(props) {

  const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

  const className = percentage < 0 ? "negative__percentage" : "positive__percentage";

  const buyStock = () => {
    db.collection('myStocks')
    .where("ticker", "==", props.name)
    .get()
    .then((querySnapshot)=>{
      if(!querySnapshot.empty) {
        querySnapshot.forEach(function(doc) {
          db.collection('myStocks')
          .doc(doc.id)
          .update({
            shares: parseInt(doc.data().shares) + 1
          })
        })
      }
      else {
        db.collection('myStocks')
        .add({
          ticker: props.name,
          shares : 1
        })
      }
      
    })
  }
    
  return (
    <div className="row" onClick={buyStock}>
      <div className="row__intro">
        <h1>{props.name}</h1>
        <p>{props.shares && (props.shares + " shares")}
        </p>
      </div>
      <div className="row__chart">
        <img src={StockSVG} height={16}/>
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p style={{ color: percentage === 0 ? 'white' : (percentage < 0 ? 'red' : 'green') }}>{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow