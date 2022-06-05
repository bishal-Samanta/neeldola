import axios from "axios";
import { useEffect, useState } from "react"

export const GetMessage = () =>{
    const [message , setMessage] = useState([]);
    
    //Network request
    const getData = () =>{
        let link = "https://mighty-journey-98679.herokuapp.com/api/messages"
        axios.get(link)
        .then((res) =>{
            //console.log(res.data.data);
            setMessage(res.data.data)
            
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    //Network request only when required
    useEffect(() =>{
        getData();
    } , [])


    return(
        <>
            <h2>All Messages</h2>
            {message.map((el) => {
                
                return(
                    <div key={el.attributes.nanoid}>
                        <p>{ `Message- ${el.attributes.text} Author - ${el.attributes.author}` }</p>
                    </div>
                )
            })}
        </>
    )
}