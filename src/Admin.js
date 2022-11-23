import React, {useEffect} from "react"
import Item from "./Item"


export default function Admin(props) {
console.log(props.items);

useEffect(() => {
    document.title = `Привет админ! Товаров в магазине: ${props.items.length}`
}, [props.admin, props.items])

    return (<>
    {props.items.length === 0    && <h1>Add first item</h1>}
    {props.items && 
    <>  
    <ul>
   {props.items.map(item => (
       <li key={item.id}>
           <Item info={item}/>
           <button onClick={() => props.onDeleteItem(item.id)}>Delete</button>
       </li>
   ))}
</ul> 
<button onClick={props.onReset}>Delete all</button>
</>
}
    </>)
}