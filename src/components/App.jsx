import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    if(name === "fName") {
      setContact((preValue) => {
        return {fName: value,
        lName: preValue.lName,
        email: preValue.email}
      });
    } else if(name === "lName") {
      setContact(preValue => {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        }
      });
    } else if (name === "email") {
      setContact(preValue => {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        }
      });
    }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" value={contact.fName} onChange={handleChange} placeholder="First Name" />
        <input name="lName" value={contact.lName} onChange={handleChange} placeholder="Last Name" />
        <input name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
