import { useEffect } from "react"


const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} - Sportify`;
    }, [title])
}

export default useSetTitle;