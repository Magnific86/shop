import React from "react"

export default function Item(props) {
    const {info} = props
   return (<>
    <div>
        <h1>{info.name}</h1>
        <p>{info.desc}</p>
        <img src={info.imag} alt="" />
        <p>{info.categ}</p>
    </div>
    </>)
}