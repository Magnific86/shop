import React from "react"

export default function Item(props) {
    const {info} = props
   return (<>
    <div className="flex flex-col px-4 py-6 rounded-lg mx-10">
        <h1 className="text-4xl text-black dark:text-green-200 pb-4">{info.name}</h1>
        <p className="text-1xl text-black dark:text-green-200 pb-4">{info.desc}</p>
        <img src={info.imag} alt="" className="border border-dashed rounded-lg border-slate-800"/>
        <p className="text-3xl text-black dark:text-green-200 pb-4">Category: {info.categ}</p>
    </div>
    </>)
}