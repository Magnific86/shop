import React, { useState, useEffect } from "react";
import uuid from "react-uuid"
import Login from "./Login";
import Admin from "./Admin"
import Form from "./Form"
import Shop from "./Shop"

export default function App() {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false)
  const [imag, setImag] = useState("")
  const [categ, setCateg] = useState("")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [valid, setValid] = useState("")
  const [items, setItems] = useState(() => {
    let data = JSON.parse(localStorage.getItem("items"))
    if(!data) {
        return []
    }
    return data
})



function handleName(e) {
    setName(e.target.value)
}
function handleDesc(e) {
    setDesc(e.target.value)
}
function handleImage(e) {
    setImag(e.target.value)
}
function handleCateg(e) {
    setCateg(e.target.value)
}
function handleSubmit(e) {
    e.preventDefault()

    if(!name) {
        setValid("fill in name")
        return;
    }
    if(!desc) {
        setValid("fill in description")
        return;
    }
    if(!categ) {
        setValid("choose category")
        return;
    }
    setItems([...items, {id: uuid(), name, desc, imag, categ}])

    setName("")
    setDesc("")
    setImag("")
    setCateg("")
    setValid("")
}

function handleSignOut() {
    setLogin(false)
    setAdmin(false)
}


function handleDeleteItem(id) {
    setItems(items.filter(item => item.id !== id))
}

function handleReset() {
    setItems([])
}

useEffect(() => {
document.title = "Добро пожаловать"
}, [])

useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
}, [items])


if(login) {
    return (<>
        <Shop items={items} login={login}/>
        <button onClick={() => setLogin(false)}>Sign out</button>
    </>)
} else 


if(admin) {
    return (<>
    <h1>Create Item</h1>
    <Form 
    name={name}
    desc={desc}
    valid={valid}
    imag={imag}
    categ={categ}
    onImag={handleImage}
    onCateg={handleCateg}
    onName={handleName}
    onDesc={handleDesc}
    onSubmit={handleSubmit}
    />
     <Admin items={items} 
    onDeleteItem={handleDeleteItem}
    admin={admin}
    onReset={handleReset}
    />
    <button onClick={handleSignOut}>Sign out</button>
    </>)
} 
else

    return (<>
        <Login />
        <button onClick={() => setLogin(true)}>Enter like user</button>
        <button onClick={() => setAdmin(true)}>Enter like admin</button>
       
      </>
    )
  }
