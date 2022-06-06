import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  Button,
} from "@mui/material";

import { useState } from "react";
import {nanoid} from "nanoid"
import axios from "axios";


export const MessageInput = () => {
  const payload = {
    text: "",
    author: "Neel",
    date: "",
  };

  const [message, setMessage] = useState(payload);

  const handleChange = (event) =>{
    //console.log(event)
    let name = event.target.name;
    let value = event.target.value;
    setMessage({...message , [name]: value});
  }

  const handleSubmit = () =>{
    console.log(message)
    message["nanoid"] = nanoid();

  
        let link = "https://mighty-journey-98679.herokuapp.com/api/messages";
        let data = {
            data: message,
        };


        axios.post(link , data)
        .then((res) =>{
            console.log(res);
            alert("Message added")
        })
        .catch((err) =>{
            console.log(err);
            alert("Ooops something went wrong try later")
        })
  }


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Message</h1>
      <FormControl
        style={{
          width: "25%",
          border: "2px solid transparent",
          display: "block",
          margin: "25px auto",
        }}
      >
        <InputLabel id="demo-simple-select-label" style={{}}>
          By
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={message.author}
          label="Age"
          style={{ width: "100%", height: "45px" }}
          onChange={handleChange}
          name="author"
        >
          <MenuItem value="Neel">Neel</MenuItem>
          <MenuItem value="Dola">Dola</MenuItem>
          <MenuItem value="Other">Others</MenuItem>
        </Select>

        <TextareaAutosize
          maxRows={10}
          minRows={10}
          aria-label="maximum height"
          placeholder="Add Messages"
          onChange={handleChange}
          value={message.text}
          id="message"
          name="text"
          style={{
            width: "100%",
            marginTop: "30px",
            border: "1px solid grey",
            borderRadius: "3px",
            padding: "15px",
            boxSizing: "border-box",
            fontFamily: "sans-serif",
            fontSize: "16px",
          }}
        />

        <input
          type="date"
          onChange={handleChange}
          style={{
            width: "100%",
            boxSizing: "border-box",
            marginTop: "25px",
            height: "45px",
            fontFamily: "sans-serif",
            padding: "15px",
            fontSize: "16px",
          }}
          name="date"
          value={message.date}

        />

        <Button
          variant="contained"
          style={{
            display: "block",
            margin: "25px auto",
            width: "100%",
            height: "45px",
          }}
          onClick={handleSubmit}
        >
          Add Message
        </Button>
      </FormControl>
    </div>
  );
};
