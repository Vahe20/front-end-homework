import '../../App.css'

export default function BasketItem({ item, add, minus, remove }) {
    return (
        <tr>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
            <td>
                <td><button onClick={add}>+</button></td>
                <td><button onClick={minus}>-</button></td>
                <td><button onClick={remove}>x</button></td>
            </td>
        </tr>
    )
}
