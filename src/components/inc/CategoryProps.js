import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API } from "../../config/api";
import { useNavigate } from "react-router";

const category = function ({ item }) {
  return (
    <tbody>
      <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <div class="d-grid gap-2 d-md-block">
          <Link to={`/edit-category/${item.id}`}>
            <button class="btn btn-success m-1 px-4 " type="button">
              Edit
            </button>
          </Link>
          <button class="btn btn-danger m-1 px-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Delete
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title text-dark" id="exampleModalLabel">
                    Delete Data
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-dark">Are you sure want to delete this data?</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success px-5" data-bs-dismiss="modal">
                    Yes
                  </button>
                  <button type="button" class="btn btn-danger px-5">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </tbody>
  );
};

export default category;
