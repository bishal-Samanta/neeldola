import { useState } from "react"
import axios from "axios"
import { nanoid } from "nanoid";


export const AddMessage = () =>{
    //Data Payload
    const payload = {
        text: "",
        author: "Neel",
        date: "",
        
    }

    //States
    const [message , setMessage] = useState(payload);


    //Functions
    const handleChange = (e) =>{
        let value = e.target.value;
        //console.log(value)
        let name = e.target.name;
        
       
        setMessage({...message , [name]:value })

    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        message["nanoid"] = nanoid();
        console.log(message);

        //API Post request Fou uploading
        //Link
        //https://mighty-journey-98679.herokuapp.com/api/messages
        let link = "https://mighty-journey-98679.herokuapp.com/api/messages";
        let data = {
            data: message,
        };


        axios.post(link , data)
        .then((res) =>{
            console.log(res);
        })
        .catch((err) =>{
            console.log(err);
        })
        
        

    }


    return(
        <>
            <h2>Add Message</h2>
            <form action="" onSubmit={(e) =>handleSubmit(e)}>
                <label htmlFor="">Message </label>
                <br />
                    {/* <input type="text" name="text" id="" value={message.text} onChange={(e) => handleChange(e)}/> */}
                    <textarea name="text" id="" onChange={handleChange} value={message.text} cols="30" rows="10"></textarea>
                <br />


                <label htmlFor="">Author</label>
                <br />
                {/* <input type="text" name="author" value={message.author} id="" onChange={(e) => handleChange(e)} /> */}
                <select name="author" id="" onChange={(e) => handleChange(e)}>
                    <option value="Neel">Neel</option>
                    <option value="Dola">Dola</option>
                    <option value="Others">Others</option>
                </select>
                 <br />


                <label htmlFor="">Date</label>
                <br />
                <input type="date" name="date" id="" value={message.date} onChange={(e) => handleChange(e)} />

                <br />
                <input type="submit" name="" id="" />
            </form>
        </>
    )
}

