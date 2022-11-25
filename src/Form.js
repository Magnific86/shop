import React, {useEffect, useRef} from "react"

export default function Form(props) {
  const inputRef = useRef()


  useEffect(() => {
    inputRef.current.focus()
  }, [])
    return (<>
    <form onSubmit={props.onSubmit} className="text-center flex flex-col p-4 justify-start w-full">
      <div className="">
        <label htmlFor="item-name" className="text-3xl text-black dark:text-green-200 pr-8">Название</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onName}
          id="item-name"
          placeholder="Название товара"
          className="p-4 outline-none bg-transparent w-96 border-b border-black dark:border-green-200"
          ref={inputRef}
        />
      </div>
      <div>
        <label htmlFor="item-description" className="text-3xl text-black dark:text-green-200 pr-8">Описание</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDesc}
          id="item-description"
          placeholder="Описание товара"
          className="p-4 outline-none bg-transparent w-96 border-b border-black dark:border-green-200"
        />
      </div>
      <div>
        <label htmlFor="image" className="text-3xl text-black dark:text-green-200 pr-8">Picture</label>
        <input 
        type="text"
        value={props.imag}
        placeholder="url картинки (необязательно)"
        onChange={props.onImag}
        className="p-4 outline-none bg-transparent w-96 border-b border-black dark:border-green-200"
        />
      </div>
      <div>
       <select name="selection"
       value={props.categ}
       onChange={props.onCateg}
       className="bg-green-200 outline-none text-2xl text-black dark:text-green-200 dark:bg-slate-500 mt-8"
       >Category
       <option>Choose category</option>
      <option value="sport">Sport items</option>
      <option value="electronika">Electronics</option>
      <option value="domestic">household goods</option>
      <option value="child">Products for children</option>
      <option value="auto">Auto items</option>
      <option value="pharma">Pharmacy</option>
      </select>
      </div>
      <div className="form-footer">
        <div className="text-3xl text-red-700 font-bold pb-4">{props.valid}</div>
        <input type="submit" value="Добавить" className="py-4 text-4xl bg-green-200 text-black dark:text-green-200 dark:bg-slate-500 "/>
      </div>
    </form>
    </>)
}