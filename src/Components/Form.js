import React from "react";
import { useState } from "react";

const Form = ({ packageSelected }) => {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    let data = {
      ...formData,
      package: packageSelected,
    };
    try {
      let res = await fetch("https://www.example.com/post", {
        method: "POST",
        body: JSON.stringify(data),
      });
      let resJSON = await res.json();
      if (res.status === 200) {
        setFormData("");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="purchase-title">Purchase</h1>
      <form action="" className="purchase-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          required
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender</label>
        <input
          type="text"
          id="gender"
          name="gender"
          required
          onChange={handleChange}
        />

        <input
          type="submit"
          className="submit"
          onClick={handleSubmit}
          disabled={!packageSelected ? true : false}
          value="Complete Purhcase"
        ></input>

        {!packageSelected ? (
          <h5>Please select an insurance package to purchase.</h5>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Form;
