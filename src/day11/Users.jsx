import { useContext, useState } from "react"
import { MyContext } from "./myContext/my_context";

const CompA = ()=>{
    const [apple, setApple]=useState("Apple and Orange");
    return(
        <div>
            <h1>CompA</h1>
            {/* Context Provider to hold the data */}
            <MyContext.Provider value={apple}>
                <CompB/>
            </MyContext.Provider>
            
        </div>
    )
}
export default CompA
const CompB = () =>{
    let data = useContext(MyContext)
    return(
        <div>
            <h1>CompB</h1>
            <b>{data}</b>
            <CompC/>
        </div>
    )
}
const CompC = ()=>{
    let data = useContext(MyContext)
    return(
        <div>
            <h1>CompC</h1>
            <p>{data}</p>

        </div>
    )
}