import { useState } from "react"
import ProductItem from "./ProductItem/ProductItem"
import "../App.css"

export default function ProductList({ moveToCart }) {
    const [products] = useState([
        { id: 101, title: "Psychology", price: 28, photo: "https://images.booksense.com/images/568/458/9781465458568.jpg" },
        { id: 102, title: "Philosophy", price: 42.4, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHts3AOgmZcSG2o3m-Fs1dkfglNm6ymyjaw&s" },
        { id: 103, title: "Biology", price: 12.8, photo: "https://m.media-amazon.com/images/I/81+CjBVdm8L._UF350,350_QL50_.jpg" },
        { id: 104, title: "History", price: 17, photo: "https://m.media-amazon.com/images/I/81tndPuXhSL._AC_UF1000,1000_QL80_.jpg" },
        { id: 105, title: "Math", price: 88, photo: "https://m.media-amazon.com/images/I/911G2nW1exL._AC_UF350,350_QL50_.jpg" },
    ])

    return (
        <div>
            <h3>Products:</h3>
            <div className="list">
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        moveToCart={moveToCart}
                    />
                )}
            </div>
        </div>
    )
}
