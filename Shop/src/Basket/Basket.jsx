import BasketItem from "./BasketItem/BasketItem";
import '../App.css'

export default function Basket({ basket, add, minus, removeItem }) {
    return (
        <div>
            <h3>Basket</h3>
            <table>
                <thead>
                    <tr>
                        <th>product</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>subtotal</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket.map(item =>
                            <BasketItem
                                key={item.id}
                                item={item}
                                add={() => add(item.id)}
                                minus={() => minus(item.id)}
                                remove={() => removeItem(item.id)}
                            />
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
