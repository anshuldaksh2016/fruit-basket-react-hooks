import React, { useState } from 'react';
import './App.css';

const prices = {
  Apple: 20,
  Banana: 5,
  Mango: 15,
  Papaya: 50,
}

const fruits = ["Apple", "Mango", "Banana", "Papaya"];

const initialState = {};
fruits.forEach(fruit => {

  const price = prices[fruit];
  initialState[fruit] = {
    count: 0,
    price,
  }
})

console.log(initialState)
function App() {

  //const [applesCount, setApplesCount] = useState(1);
  //const [mangoCount, setMangoCount] = useState(0);
  //const [BananaCount, setBananaCount] = useState(0);


  const [basket, setBasket] = useState(initialState);

  let totalFruitsCount = 0;
  let totalFruitsPrice = 0;


  Object.keys(basket).forEach(fruitKey => {
    const fruit = basket[fruitKey];
    totalFruitsCount += fruit.count;
    totalFruitsPrice += fruit.count * fruit.price;

  })




  const taxPercent = 20;
  const taxPrice = (totalFruitsPrice * taxPercent) / 100;

  function addFruitToBasket(fruitKey) {
    console.log(fruitKey);
    // use the setbasket update fxn
    setBasket({
      ...basket,
      [fruitKey]: {
        ...basket[fruitKey],
        count: basket[fruitKey].count + 1,
      },
    });
  }
  function removeFruitsFromBasket(fruitKey) {
    console.log(fruitKey);
    setBasket({
      ...basket,
      [fruitKey]: {
        ...basket[fruitKey],
        count: basket[fruitKey].count - 1,
      }
    })
  }


  return (
    <div className="App">

      <div className="fruits-shop">
        <h2>Fruit Shop</h2>

        {
          Object.keys(basket).map(fruitKey => {
            const fruit = basket[fruitKey];
            return (
              <div>
                <button onClick={() => addFruitToBasket(fruitKey)}>+</button>
                <button onClick={() => removeFruitsFromBasket(fruitKey)}>-</button>
                {fruitKey} :{fruit.count}
              </div>
            )
          })
        }

      </div>


      <hr />


      {/* invoice  */}

      <h3>Invoice</h3>
      <div>Total fruits in the basket : {totalFruitsCount}</div>
      <div>Total fruits price : {totalFruitsPrice} </div>
      <div>Tax percentage : 20%</div>
      <div>Tax Price : {taxPrice}</div>
      <br />
      <div>TOtal price :{taxPrice + totalFruitsPrice} </div>
    </div>
  );
}

export default App;
