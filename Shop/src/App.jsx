import { useState } from "react"
import ProductList from "./ProductList/ProductList"
import Basket from "./Basket/Basket"
import './App.css'

export default function App() {
  const [basket, setBasket] = useState([])

  const moveToCart = product => {
    const existingProduct = basket.find(p => p.id === product.id);
    if (existingProduct) {
      setBasket(
        basket.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  }

  const add = id => {
    setBasket(basket.map(p =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    ))
  }

  const minus = id => {
    setBasket(basket.map(p =>
      p.id === id && p.quantity > 1
        ? { ...p, quantity: p.quantity - 1 }
        : p
    ))
  }

  const removeItem = id => {
    setBasket(basket.filter(p => p.id !== id))
  }

  return (
    <div className="app-container">
      <h2>Shop</h2>
      <div className="layout">
        <ProductList moveToCart={moveToCart}/>
        <Basket
          basket={basket}
          add={add}
          minus={minus}
          removeItem={removeItem}
        />
      </div>
    </div>
  )
}
