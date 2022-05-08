import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../config/api";
import { useMutation, useQuery } from "react-query";
import Navbar from "../inc/Navbar";

const EditProductProps = function () {
  let navigate = useNavigate();
  const { id } = useParams();

  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview
  const [product, setProduct] = useState({}); //Store product data
  const [form, setForm] = useState({
    image: "",
    name: "",
    desc: "",
    price: "",
    qty: "",
  }); //Store product data

  // Fetching detail product data by id from database
  let { data: products, refetch } = useQuery("productCache", async () => {
    const response = await API.get("/product/" + id);
    console.log(response);
    return response.data.data.products;
  });

  useEffect(() => {
    if (products) {
      setPreview(products.image);
      setForm({
        ...form,
        name: products.name,
        desc: products.desc,
        price: products.price,
        qty: products.qty,
      });
      setProduct(products);
    }

    // if (categoriesData) {
    //   setCategories(categoriesData);
    // }
  }, [products]);

  // Fetching category data
  // let { data: categoriesData, refetch: refetchCategories } = useQuery("categoriesCache", async () => {
  //   const response = await API.get("/categories");
  //   return response.data.categories;
  // });
  // For handle if category selected
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
      if (form.image) {
        formData.set("image", form?.image[0], form?.image[0]?.name);
      }
      formData.set("name", form.name);
      formData.set("desc", form.desc);
      formData.set("price", form.price);
      formData.set("qty", form.qty);
      formData.set("categoryId", categoryId);

      // Insert product data
      const response = await API.patch("/product/" + product.id, formData, config);
      navigate("/product");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  // useEffect(() => {
  //   const newCategoryId = product?.categories?.map((item) => {
  //     return item.id;
  //   });

  //   setCategoryId(newCategoryId);
  // }, [product]);

  return (
    // <div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col">
    //         <form onSubmit={(e) => handleSubmit.mutate(e)}>
    //           {preview && (
    //             <div>
    //               <img
    //                 src={preview}
    //                 style={{
    //                   maxWidth: "150px",
    //                   maxHeight: "150px",
    //                   objectFit: "cover",
    //                 }}
    //                 alt="preview"
    //               />
    //             </div>
    //           )}
    //           <input type="file" id="upload" name="image" hidden onChange={handleChange} />
    //           <label for="upload" className="label-file-add-product">
    //             Upload file
    //           </label>
    //           <div class="mb-3">
    //             <label class="form-label"></label>
    //             <input type="text" class="form-control bg-dark " placeholder="Product name" value={form?.name} onChange={handleChange} name="name" />
    //           </div>
    //           <div class="mb-3">
    //             <label class="form-label"></label>
    //             <textarea class="form-control bg-dark" placeholder="description" value={form?.desc} onChange={handleChange} name="desc"></textarea>
    //           </div>
    //           <div class="mb-3">
    //             <label class="form-label"></label>
    //             <input type="text" class="form-control bg-dark" placeholder="Price" value={form?.price} onChange={handleChange} name="price" />
    //           </div>
    //           <div class="mb-3">
    //             <label class="form-label"></label>
    //             <input type="text" class="form-control bg-dark" placeholder="Qty" value={form?.qty} onChange={handleChange} name="qty" />
    //           </div>
    //           <div class="d-grid gap-2 mt-5">
    //             <button class="btn btn-success px-4" type="submit">
    //               Save
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
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
              <input onChange={handleChange} value={form?.name} name="name" type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name"></input>
              <textarea onChange={handleChange} value={form?.desc} name="desc" id="" cols="30" rows="5" className="form-control mb-3 text-secondary" placeholder="Desc"></textarea>
              <input onChange={handleChange} value={form?.price} name="price" type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price"></input>
              <input onChange={handleChange} value={form?.qty} name="qty" type="text" className="form-control py-3 mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="qty"></input>
              <button className="btn btn-success py-3" type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductProps;
