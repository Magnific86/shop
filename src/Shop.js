import React, {useState, useEffect} from "react"
import Item from "./Item"

export default function Shop(props) {
    const [basket, setBasket] = useState(false)
    const [total, setTotal] = useState(0)
    const [userlist, setUserlist] = useState(() => {
        let data = JSON.parse(localStorage.getItem("userlist"))
        if(!data) {
            return []
        } 
        return data
    })

    useEffect(() => {
        localStorage.setItem("userlist", JSON.stringify(userlist))
        document.title = `Товаров в магазине: ${props.items.length} Товаров в корзине: ${userlist.length}`
    }, [userlist, basket, total, props.login])

    function handlePlusItem() {
        setTotal(prev => prev + 1)
    }
    function handleMinusItem() {
        if(total > 0) {
            setTotal(prev => prev - 1)
        } 
        setTotal(0)
    }

    function handleDeleteItem(id) {
        setUserlist(userlist.filter(i => i.id !== id))
    }

    function handleAddItem(item) {
        if(userlist.includes(item)) {
            return null
        } else if(!userlist.includes(item)) {
            setUserlist([...userlist, item])
        }
    }

    if(basket) {
        return (<>
        <h1>Shopping cart</h1>
           <ul>
      {userlist.length === 0 && <h3>Add first item</h3>}
      {userlist.length > 0 && userlist.map(item => (
        <li key={item.id}>
            <Item info={item} />
            <button onClick={() => handlePlusItem(item.id)}>+</button>
            <h3>{total}</h3>
            <button onClick={handleMinusItem}>-</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
   </ul>
   <button onClick={() => setBasket(false)}>Back to shop</button>
        </>)
    }
    else if(!basket) {
        return (<>
        <h1>Shop</h1>
        <ul>
    {props.items.map(item => (
        <li key={item.id}>
            <Item info={item} />
          {!userlist.includes(item) && <button onClick={() => handleAddItem(item)}>Add to cart</button>} 
          {userlist.includes(item) && <p>Added</p>  }
        </li>
    ))}
    </ul>
    <button onClick={() => {
        setBasket(true)
    }}>Go to cart</button>
        </>)
    }
}