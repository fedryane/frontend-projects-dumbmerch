import React from "react";
import { data } from "../inc/dummy";
import CategoryProps from "../inc/CategoryProps";
import Navbar from "../inc/Navbar";

function Category() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-light mt-5 text-lg-start text-center">List Category</h3>
            <table className="table table-dark table-striped mt-5">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Category Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {data.map((item) => {
                return <CategoryProps id={item.id} category={item.category} />;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
