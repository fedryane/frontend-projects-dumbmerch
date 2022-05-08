import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

const ProductProps = function ({ item }) {
  const navigate = useNavigate();

  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
    setConfirmDelete(true);
  };

  let { data: product, refetch } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data.data.product;
  });

  const deleteById = async (id) => {
    try {
      await API.delete(`/product/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (confirmDelete) {
      // close modal confirm delete data
      handleClose();
      // execute delete data by id function
      deleteById(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  return (
    <tbody>
      <tr className="align-middle">
        <th scope="row ">{item.id}</th>
        <td>
          <img src={item.image} alt="foto" style={{ width: "100px" }} />
        </td>
        <td className="text-center align-middle">{item.name}</td>
        <td className="text-center align-middle ">{item.desc}</td>
        <td className="text-center align-middle">{item.price}</td>
        <td className="text-center align-middle">{item.qty}</td>
        <td className="align-middle">
          <div class="d-grid gap-2 d-md-block ms-5 align-middle">
            <Link to={`/edit-product/ ${item.id}`}>
              <button class="btn btn-success m-1 px-4" type="button">
                Edit
              </button>
            </Link>
            <button onClick={() => handleDelete(item.id)} class="btn btn-danger m-1 px-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content" show={show} onHide={handleClose}>
                  <div class="modal-header border-white">
                    <h5 class="modal-title text-dark fw-bolder" id="exampleModalLabel">
                      Delete Data
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body text-dark">Are you sure want to delete this data?</div>
                  <div class="modal-footer border-white">
                    <button onClick={handleDelete} class="btn btn-success px-5" data-bs-dismiss="modal">
                      Yes
                    </button>
                    <button onClick={handleClose} class="btn btn-danger px-5" data-bs-dismiss="modal">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProductProps;
