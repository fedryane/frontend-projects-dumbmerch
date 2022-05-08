import React, { useState, useEffect } from "react";
import Navbar from "../inc/Navbar";
import { useParams, useNavigate } from "react-router";
import { useQuery, useMutation } from "react-query";
import { API } from "../../config/api";

function EditCategory() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [category, setCategory] = useState({ name: "" });

  let { refetch } = useQuery("categoryCache", async () => {
    const response = await API.get("/category/" + id);
    console.log(response);
    setCategory({ name: response.data.data.category.name });
    console.log(response.data.data.category.name);
  });

  const handleChange = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(category);

      const response = await API.patch("/category/" + id, body, config);
      console.log(response);
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
          <h2 className="mb-5 mt-5 text-danger">Edit Category</h2>
          <input value={category.name} name="name" onChange={handleChange} type="text" className="form-control py-3 mb-5" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="edit category"></input>
          <button to="/category" className="btn btn-success py-3" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditCategory;
