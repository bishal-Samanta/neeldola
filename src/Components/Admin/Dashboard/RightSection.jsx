import { useState } from "react";
import { AddMessageInput } from "./AddMessageInput";
import { nanoid } from "nanoid";
import { post } from "./Request/post";

const css = {
  rightDiv: {
    width: `${100 - 18}%`,
    background: "#40363C",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
};

export const RightSection = ({ query }) => {
  let data = {
    message: {
      heading: "Add Message",
      payload: {
        author: "",
        date: "",
        text: "",
        nanoid:""
      },
      link:"https://mighty-journey-98679.herokuapp.com/api/messages"
    },
    photo: {
      heading: "Add Photo",
    },
  };
  const [objdata, setObjData] = useState(data[query].payload);

  const getData = (name, value) => {
    setObjData({ ...objdata, [name]: value });
  };

  const handleSave = () => {
      objdata["nanoid"] = nanoid();
      console.log(objdata);
      post(data[query].link , objdata);  
      
  };

  console.log(query);
  return (
    <>
      <div style={css.rightDiv}>
        <div
          style={{
            display: "flex",
            width: "70%",
            justifyContent: "space-between",
            margin: "65px auto",
            alignItems: "center",
            border: "1px solid transparent",
          }}
        >
          <div style={{ color: "#FFFFFF", fontSize: "25px" }}>
            {data[query].heading}
          </div>
          <div
            style={{
              width: "150px",
              background: "#4179CC",
              borderRadius: "15px",
              height: "50px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              cursor: "pointer",
            }}
            onClick={handleSave}
          >
            Save
          </div>
        </div>
        <div
          style={{
            width: "70%",
            background: "#D3D3D3",
            borderRadius: "6px",
            margin: "0 auto",
            height: "550px",
            marginTop: "-40px",
            display: "grid",
            gridTemplateColumns: "65% 35%",
          }}
        >
          {query == "message" ? (
            <AddMessageInput getData={getData} />
          ) : query == "photo" ? (
            "Photos"
          ) : (
            "Other"
          )}
        </div>
      </div>
    </>
  );
};
