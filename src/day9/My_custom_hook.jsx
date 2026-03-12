import { useEffect, useState } from "react"
//custom hook to fetch data from an API
let useFetch = (url)=>{
    let [data, setData] = useState([]);
    useEffect(
        ()=>{
            fetch(url)
      .then(response => response.json())
      .then(
        data => setData(data)
      )

        },
        //dependency array
        []
    )
    return [data, setData];

}
export default useFetch