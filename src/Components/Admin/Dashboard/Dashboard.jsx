import { useState } from "react"
import { LeftNavbar } from "./LeftNaavbar"
import { RightSection } from "./RightSection"

export const Dashboard = () =>{
    const [query, setQuery] = useState("message");

    const getQuery = (data) =>{
        setQuery(data);
    }

    return(
        <>
            <div style={{display: "flex"}}>
            <LeftNavbar getQuery={getQuery}/>
            <RightSection query={query}/>
            </div>
           
        </>
    )
}