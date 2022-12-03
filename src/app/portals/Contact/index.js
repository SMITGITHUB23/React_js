import "./Contact.css";
import Contact1 from "../../../assets/images/contactlogo.png";
import React, { useState } from "react";

const Contact = () => {
  const mydata = {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
  };

  const [dataform, updatedataform] = useState(mydata);
  const [thanksmessage, setthanksmassage] = useState(false);

  const Formfield = [
    {
      label: "Name",
      name: "name",
      value: dataform.name,
    },
    {
      label: "Email",
      name: "email",
      value: dataform.email,
    },
    {
      label: "Address",
      name: "address",
      value: dataform.address,
    },
    {
      label: "City",
      name: "city",
      value: dataform.city,
    },
    {
      label: "Zip",
      name: "zip",
      value: dataform.zipcode,
    },
  ];

  function changeEvent(e) {
    updatedataform({
      ...dataform,
      [e.target.name]: e.target.value,
    });
  }

  function submitEvent(e) {
    e.preventDefault();
    console.log(dataform);
    setthanksmassage(!thanksmessage);
    updatedataform({
      ...mydata,
    });
  }

  return (
    <div>
      <div class="back">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Contact1} class="imgcontactlogo" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h1 class="span">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
                <span>-</span>
                <span>U</span>
                <span>S</span>
              </h1>
              <form class="row g-3">
                {Formfield.map((s) => (
                  <div class="col-md-6">
                    <label htmlfor="inputEmail4" class="form-label">
                      {s.label}
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name={s.name}
                      value={s.value}
                      onChange={changeEvent}
                    />
                  </div>
                ))}

                <div class="col-12">
                  <button
                    type="submit"
                    onClick={submitEvent}
                    class="btn btn-primary"
                  >
                    Sign in
                  </button>
                  {thanksmessage && <p> Thank's for Contact us.... </p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
