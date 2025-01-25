import './Buttons.css'
import '../BuyingInfo/BuyingInfo.jsx'
import { useState } from 'react';

function storeData(type, quant, price){
  const exactTime = new Date();
  var dateTime = exactTime.getDate() + "/" + (exactTime.getMonth()+1) + "/" + exactTime.getFullYear() + " - " 
                 + exactTime.getHours() + ":" + exactTime.getMinutes() + ":" + exactTime.getSeconds();

  var entry = dateTime + " | Tipo: " + type + " | Litros: " + quant + " | Preço: " + price;

  let list = document.getElementById('report');
  let li = document.createElement("li");
  li.innerText = entry;
  list.appendChild(li);
}

function Buttons() {
    const [isVisible, setVisible] = useState(false);

    return (
        
      <>
        <div className='group'>
          <button onClick={()=>storeData(document.getElementById("fuel").value, 
                           document.getElementById("quantitie").value, 
                           document.getElementById("price").value)}>Vender</button>
        </div>
      </>
    )
  }
  
  export default Buttons