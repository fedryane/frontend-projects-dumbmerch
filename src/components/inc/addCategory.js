import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";
import { API } from "../../config/api";

function AddCategory() {
  let navigate = useNavigate();
  const [category, setCategory] = useState("");

  const title = "Category admin";
  document.title = "DumbMerch | " + title;

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify({ name: category });

      // Insert category data
      const response = await API.post("/category", body, config);

      navigate("/category");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <form className="card-body d-grid" onSubmit={(e) => handleSubmit.mutate(e)}>
          <h2 className="mb-5 mt-5 text-danger">Add Category</h2>
          <input name="name" onChange={handleChange} type="text" className="form-control py-3 mb-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add category"></input>
          <button to="/category" className="btn btn-success py-3" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCategory;
