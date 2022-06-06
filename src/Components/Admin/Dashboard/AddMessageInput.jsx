import { useState } from "react";

export const AddMessageInput = ({getData}) => {
    const payload = {
        author:"",
        text:"",
        date:""
    }
    const [data, setData] = useState(payload)

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setData({...data, [name]:value})
        getData(name, value)
    }
  
    return (
    <>
      <div style={{ border: "1px solid transparent", padding: "25px" }}>
        <textarea
          name="text"
          id=""
          cols="30"
          rows="10"
          style={{
            height: "100%",
            width: "100%",
            background: "#EFE8E8",
            borderRadius: "6px",
            padding: "20px",
            boxSizing: "border-box",
            fontSize: "20px",
          }}
          value={data.text}
          onChange={handleChange}
        ></textarea>
      </div>
      <div
        style={{
          border: "1px solid transparent",
          padding: "25px",
          display: "flex",
          flexDirection: "column",
          paddingLeft: "0px",
        }}
      >
        <select
          name="author"
          id=""
          style={{
            background: "#EFE8E8",
            height: "40px",
            marginBottom: "25px",
            borderRadius: "6px",
            paddingLeft: "10px",
          }}
          onChange={handleChange}
          value={data.author}
        >
          <option value="">Choose Author</option>
          <option value="Neel">Neel</option>
          <option value="Dola">Dola</option>
        </select>
        <input
          type="date"
          name="date"
          id=""
          style={{
            background: "#EFE8E8",
            height: "38px",
            borderRadius: "6px",
            paddingLeft: "10px",
          }}
          placeholder="Choose Date"
          onChange={handleChange}
          value={data.date}
        />
      </div>
    </>
  );
};
