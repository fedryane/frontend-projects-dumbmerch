import React from "react";
import { Link } from "react-router-dom";

const category = function (props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.category}</td>
        <div class="d-grid gap-2 d-md-block">
          <Link to="/edit-category">
            <button class="btn btn-success m-1 px-4" type="button">
              Edit
            </button>
          </Link>
          <button class="btn btn-danger m-1 px-4" type="button">
            Delete
          </button>
        </div>
      </tr>
    </tbody>
  );
};

export default category;
