import React, {useEffect, useRef} from "react"

export default function Form(props) {
  const inputRef = useRef()


  useEffect(() => {
    inputRef.current.focus()
  }, [])
    return (<>
    <form onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onName}
          id="item-name"
          placeholder="Название товара"
          className="textfield"
          ref={inputRef}
        />
      </div>
      <div>
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDesc}
          id="item-description"
          placeholder="Описание товара"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="image">Picture</label>
        <input 
        type="text"
        value={props.imag}
        placeholder="картинка (необязательно)"
        onChange={props.onImag}
        />
      </div>
      <div>
       <select name="selection"
       value={props.categ}
       onChange={props.onCateg}
       >Category
       <option>choose category</option>
      <option value="sport">Sport items</option>
      <option value="electronika">Electronics</option>
      <option value="domestic">household goods</option>
      <option value="child">Products for children</option>
      <option value="auto">Auto items</option>
      <option value="pharma">Pharmacy</option>
      </select>
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" value="Добавить"/>
      </div>
    </form>
    </>)
}