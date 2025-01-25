import { useState } from 'react';
import './BuyingInfo.css'



function BuyingInfo() {
  const [price, setPrice] = useState(0);

  const updatePrice = () => {
    var type = document.getElementById("fuel").value;
    var quant = document.getElementById("quantitie").value;

    if (type == "gasolina"){
      setPrice((quant * 6.99).toFixed(2));
    }
    else if (type == "gasolina_aditivada"){
      setPrice((quant * 6.99).toFixed(2));
    }
    else if (type == "alcool"){
      setPrice((quant * 4.15).toFixed(2));
    }
    else if (type == "etanol"){
      setPrice((quant * 4.99).toFixed(2));
    }
    else if (type == "diesel"){
      setPrice((quant * 6.99).toFixed(2));
    }
    else if (type == "diesel_s10"){
      setPrice((quant * 6.99).toFixed(2));
    }
    else{return 0;}
  }

    return (
        
      <>
        <form>
          <div className="wrapper">
            <div className="box1">
              <p>Combustível:</p>
              <select id='fuel' defaultValue={''} onChange={updatePrice}>
                  <option value=''></option>
                  <option value='gasolina'>Gasolina Comun</option>
                  <option value='gasolina_aditivada'>Gasolina Aditivada</option>
                  <option value='diesel'>Diesel</option>
                  <option value='diesel_s10'>Diesel S10</option>
                  <option value='etanol'>Etanol</option>
                  <option value='alcool'>Álcool</option>
              </select>
            </div>
            
            <div className="box2">
              <p>Quantidade (L):</p>
              <input id="quantitie" type='number' min='0.0' step='0.1' onChange={updatePrice}>
              </input>
            </div>

            <div className="box3">
              <input type='hidden' id='price' value={price}></input>
              <p >Preço Final: R$ {price}</p>

              <ul></ul>

            </div>
          </div>
        </form>
      </>
    )
  }
  
  export default BuyingInfo