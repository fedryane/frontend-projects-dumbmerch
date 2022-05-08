import React from "react";
import { data } from "../inc/dummy";
import CategoryProps from "../inc/CategoryProps";
import Navbar from "../inc/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import useQuery
import { useQuery } from "react-query";

// import API
import { API } from "../../config/api";

function Category() {
  let navigate = useNavigate();
  // Fetching categories data from database
  let { data: categorys } = useQuery("categoryCache", async () => {
    const response = await API.get("/categorys");
    return response.data.data.category;
  });

  const handleEdit = (id) => {
    navigate(`/edit-category/${id}`);
  };

  const addCategory = () => {
    navigate("/add-category");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <h2 className="text-danger mt-5 text-lg-start text-center">List Category</h2>
              <div className=" mt-5 text-lg-start text-center ">
                <Link to="/add-category" className="btn btn-dark m-1 px-5" type="button">
                  Add
                </Link>
              </div>
            </div>
            <table className="table table-dark table-striped mt-5">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {categorys?.map((item, index) => (
                <CategoryProps item={item} key={index} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
