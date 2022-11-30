import React, { useState, useEffect } from "react";
import {v4} from "uuid"
import Admin from "./Admin"
import Form from "./Form"
import Shop from "./Shop"
import DarkMode from "./DarkMode";

export default function App() {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false)
  const [imag, setImag] = useState("")
  const [categ, setCateg] = useState("")
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [valid, setValid] = useState("")
  const [theme, setTheme] = useState("dark")
  const [items, setItems] = useState(() => {
    let data = JSON.parse(localStorage.getItem("items"))
    if(!data) {
        return []
    }
    return data
})

useEffect(() => {
    if(theme === "dark" ) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}, [theme])

function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark")
}

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
    setItems([...items, {id: v4(), name, desc, imag, categ}])

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

function handleOutShopEnterAdmin() {
    setLogin(!login)
    setAdmin(!admin)
}


useEffect(() => {
document.title = "Добро пожаловать"
}, [])

useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
}, [items])


function handleAdminToShop() {
    setAdmin(!admin)
    setLogin(!login)
}


if(login) {
    return (<>
    <div className="min-h-max bg-green-200 dark:bg-slate-500 flex flex-row space-between">
        <div className="min-h-screen container mx-auto px-10" >
        <Shop items={items} login={login} onAdminGoFromShop={handleAdminToShop}/>
        </div>
        <div>
        <button onClick={() => setLogin(false)}
         className="bg-green-300 rounded-3xl px-6 py-3 dark:bg-black dark:text-green-200 hover:underline flex flex-nowrap">Sign out</button>
         </div>
        <div>
        <DarkMode onThemeSwitch={handleThemeSwitch} theme={theme}/>
        </div>
        </div>
    </>)
} else 


if(admin) {
    return (<>
    <div className="min-h-max bg-green-200 dark:bg-slate-500 flex space-between">
    <div className="px-2 py-8">
    <button onClick={handleSignOut} className="text-3xl text-black dark:text-green-200 hover:underline">Sign out</button>
    <button onClick={handleAdminToShop} className="text-3xl text-black dark:text-green-200 hover:underline">Go to shop</button>
    </div>
    <div className="container mx-auto px-10">
    <h1 className="font-bold text-center text-5xl text-black dark:text-green-200">Creating Item</h1>
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
    </div>
    <div className="">
    <DarkMode onThemeSwitch={handleThemeSwitch}
    theme={theme}/>
    </div>
    </div>
    </>)
} 
else if(!admin+!login) {

    return (<>
    <div className="h-screen bg-green-200 dark:bg-slate-500 flex justify-between align-center pt-10">
       <div className="mx-auto">
       <div> 
        <h1 className="font-bold text-black dark:text-green-200 text-5xl text-center pb-14">Welcome</h1>
        </div>
       <div>
       <button className="bg-green-300 rounded-3xl px-6 py-3 dark:bg-black dark:text-green-200 mr-8" onClick={() => setLogin(true)}>Enter like user</button>
        <button className="bg-green-300 rounded-3xl px-6 py-3 dark:bg-black dark:text-green-200" onClick={() => setAdmin(true)}>Enter like admin</button>
       </div>
       </div>
       <div>
       <DarkMode theme={theme} onThemeSwitch={handleThemeSwitch}/>
       </div>
       </div>
      </>
    )
    } 
  }
