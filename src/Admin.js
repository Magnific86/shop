import React, {useEffect} from "react"
import Item from "./Item"


export default function Admin(props) {
console.log(props.items);

useEffect(() => {
    document.title = `Привет админ! Товаров в магазине: ${props.items.length}`
}, [props.admin, props.items])

    return (<>
    {props.items.length === 0    && <h1 className="text-4xl text-black dark:text-green-200 text-center">Add first item</h1>}
    {props.items && 
    <>  
    <ul className="list-none flex flex-wrap mx-15 justify-center min-h-screen">
   {props.items.map(item => (
       <li key={item.id}>
           <Item info={item}/>
           <button onClick={() => props.onDeleteItem(item.id)} className="text-3xl text-black dark:text-green-200 pb-4">Delete</button>
       </li>
   ))}
</ul> 
<button onClick={props.onReset} className="text-4xl text-red-700 rounded-full bg-red-400 hover:underline px-4 py-2">Delete all</button>
</>
}
    </>)
}