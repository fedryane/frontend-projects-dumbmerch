import React from "react";
import { Link } from "react-router-dom";

const ProductProps = function (props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>
          <img src={props.image} alt="foto" style={{ width: "100px" }} />
        </td>
        <td className="text-center">{props.tittle}</td>
        <td className="text-center">{props.desc}</td>
        <td className="text-center">{props.harga}</td>
        <td className="text-center">{props.stock}</td>
        <td>
          <div class="d-grid gap-2 d-md-block ms-5">
            <Link to="/edit-product">
              <button class="btn btn-success m-1 px-4" type="button">
                Edit
              </button>
            </Link>
            <button class="btn btn-danger m-1 px-3 " type="button">
              Delete
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductProps;
