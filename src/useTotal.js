import React, {useState} from "react"


export default function useTotal() {
    const [total, setTotal] = useState(0)

    function more() {
        setTotal(prev => prev + 1)
    }
    function less() {
        setTotal(prev => {
          if (prev > 0) {
            return prev - 1
          }
          return 0
        })
    }
    return {total, more, less}
}