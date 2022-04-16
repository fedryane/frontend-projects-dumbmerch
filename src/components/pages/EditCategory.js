import React from "react";
import Navbar from "../inc/Navbar";
function EditCategory() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="text-light mt-5 text-lg-start text-center">Edit Category</h2>
          <div className="col"></div>
          <input type="text" className="from-label my-5 py-1 bg-dark border-light" />
          <div class="d-grid gap-2">
            <button class="btn btn-success px-4" type="button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCategory;
