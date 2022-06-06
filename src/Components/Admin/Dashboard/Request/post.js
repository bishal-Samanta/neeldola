import axios from "axios";

export const post =(link, objData) =>{

        let data = {
            data: objData,
        };


        axios.post(link , data)
        .then((res) =>{
            console.log(res);
            alert("Data Added")
        })
        .catch((err) =>{
            console.log(err);
            alert("Opps something went wrong")
        })
    
}