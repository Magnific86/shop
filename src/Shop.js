import React, {useState, useEffect} from "react"
import Item from "./Item"
import  useTotal from "./useTotal"

export default function Shop(props) {
    const [basket, setBasket] = useState(false)
    const {total, more, less} = useTotal()
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
    }, [userlist, basket, total, props.login, props.items])



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

    function handleResetBasket() {
        setUserlist([])
    }

    if(basket) {
        return (<>
        <div className="flex flex-col align-center min-h-screen">
        <h1 className="text-4xl text-black dark:text-green-200 text-center mb-10 pt-16">Shopping cart</h1>
           <ul className="list-none flex flex-wrap justify-center pt-10">
      {userlist.length === 0 && <h3 className="text-5xl text-black dark:text-green-200 text-center hover:underline" onClick={() => setBasket(false)}
      >Add first item!</h3>}
      {userlist.length > 0 && userlist.map(item => (
        <li key={item.id}>
            <Item info={item} />
            <div className="flex">
            <button onClick={more} className="text-2xl text-white dark:text-green-200 rounded-full
            bg-black dark:bg-greeb-200 px-4 py-2">+</button>
            <h3 className="text-3xl text-black dark:text-green-200 px-6">{total}</h3>
            <button onClick={less}
            className="text-2xl text-white dark:text-green-200 rounded-full
            bg-black dark:bg-greeb-200 px-4 py-2"
            >-</button>
             <button onClick={() => handleDeleteItem(item.id)}
             className="text-2xl text-white dark:text-green-200 rounded-full
             bg-black dark:bg-greeb-200 px-4 py-2 hover:bg-red-500 align-center ml-4"
             >Delete</button>
             </div>
        </li>
      ))}
   </ul>
   <div className="flex justify-between">
   {userlist.length > 0 && <button onClick={handleResetBasket}
    className="text-2xl text-red-700 rounded-full bg-red-400 hover:underline px-4 py-2 mx-auto mt-10">Delete all</button>}
   <button onClick={() => setBasket(false)}
    className="text-2xl bg-black text-green-200 dark:text-green-200 dark:bg-black rounded-full hover:underline px-4 py-2">Back to shop</button>
   </div>
   </div>
        </>)
    }
    else if(!basket) {
        return (<>
        <div className="text-center flex space-between">
            <div className="">
            <button onClick={() => setBasket(!basket)}
             className="bg-green-300 rounded-3xl px-6 py-3 dark:bg-black dark:text-green-200 text-center">
                Go to cart
            </button>
            </div>
            <div className="container mx-auto">
        <h1 className="text-5xl text-black dark:text-green-200 font-bold pb-10 text-center">Shop</h1>
        <ul className="list-none flex flex-wrap mx-15 justify-center text-center">
    {props.items.map(item => (
        <li key={item.id}>
            <Item info={item} />
          {!userlist.includes(item) && <button onClick={() => handleAddItem(item)}
           className="bg-green-300 rounded-3xl px-6 py-3 dark:bg-black dark:text-green-200"
          >Add to cart</button>} 
          {userlist.includes(item) && <p>Added</p>  }
        </li>
    ))}
    </ul>
    </div>
    </div>
        </>)
    }
}