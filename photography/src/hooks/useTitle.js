import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title=`${title} -photography`
    },[title])
}

export default useTitle;