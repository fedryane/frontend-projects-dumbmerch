import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import Navbar from "../inc/Navbar";

const AddProducts = () => {
  let navigate = useNavigate();

  // const [categories, setCategories] = useState([]); //Store all category data
  // const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [form, setForm] = useState({
    image: "",
    name: "",
    desc: "",
    price: "",
    qty: "",
  }); //Store product data

  // Fetching category data
  // const getCategories = async () => {
  //   try {
  //     const response = await API.get('/categories');
  //     setCategories(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // For handle if category selected
  // const handleChangeCategoryId = (e) => {
  //   const id = e.target.value;
  //   const checked = e.target.checked;

  //   if (checked) {
  //     // Save category id if checked
  //     setCategoryId([...categoryId, parseInt(id)]);
  //   } else {
  //     // Delete category id from variable if unchecked
  //     let newCategoryId = categoryId.filter((categoryIdItem) => {
  //       return categoryIdItem != id;
  //     });
  //     setCategoryId(newCategoryId);
  //   }
  // };

  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("name", form.name);
      formData.set("desc", form.desc);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      // formData.set('categoryId', categoryId);

      console.log(form);

      // Insert product data
      const response = await API.post("/product", formData, config);
      console.log(response);

      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  });

  // useEffect(() => {
  //   getCategories();
  // }, []);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <form className="card-body d-grid" onSubmit={(e) => handleSubmit.mutate(e)}>
              {preview && (
                <div>
                  <img
                    src={preview}
                    style={{
                      maxWidth: "150px",
                      maxHeight: "150px",
                      objectFit: "cover",
                    }}
                    alt="preview"
                  />
                </div>
              )}
              <input type="file" id="upload" name="image" hidden onChange={handleChange} />
              <div className="mb-4">
                <label for="upload" className="btn btn-dark mb-3 text-white ">
                  Upload file
                </label>
              </div>
              <input onChange={handleChange} name="name" type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name"></input>
              <textarea onChange={handleChange} name="desc" id="" cols="30" rows="5" className="form-control mb-3 text-secondary" placeholder="Desc"></textarea>
              <input onChange={handleChange} name="price" type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"></input>
              <input onChange={handleChange} name="qty" type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="qty"></input>
              <Button className="btn btn-success py-3" type="submit">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
