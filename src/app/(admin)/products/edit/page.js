"use client";

import CustomComponents from "@/components/CustomComponents";
import Select from "@/components/Select";
import { useEffect, useState } from "react";

const EditProduct = ({ searchParams }) => {
  const [product, setProduct] = useState({});

  const handleInputChange = (name, value) => {
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const getProductData = async () => {
    const productId = searchParams?.productId;
    const response = await fetch(
      `http://localhost:5000/products/product/${productId}`
    );
    const product = await response.json();
    setProduct(product);
  };

  useEffect(() => {
    getProductData();
  }, [searchParams]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 h-fit p-[50px]"
    >
      <CustomComponents.Input
        title="Title"
        inputName="title"
        inputValue={product.title}
        handleInputChange={handleInputChange}
      />

      <CustomComponents.Input
        title="Description"
        inputName="description"
        inputValue={product.description}
        handleInputChange={handleInputChange}
      />

      <CustomComponents.Input
        title="Price"
        inputName="price"
        inputType="number"
        inputValue={product.price}
        handleInputChange={handleInputChange}
      />

      <CustomComponents.Input
        title="Stock"
        inputName="stock"
        inputValue={product.stock}
        handleInputChange={handleInputChange}
      />
      <CustomComponents.Select
        title="Categories"
        options={["swdwdwdalam", "saqwdwdwol", "wdwdwdwwdw"]}
        inputName="category"
        inputValue={product.category}
        handleInputChange={handleInputChange}
      />
      <CustomComponents.Input
        title="Gallery"
        fileType=".jpg, .jepg, .png, .svg, .webp"
        inputType="file"
        inputName="gallery"
        handleInputChange={handleInputChange}
      />
      <button
        type="submit"
        className="border-[1px] border-blue-800 bg-blue-500 text-white py-3 rounded-md"
      >
        Save
      </button>
    </form>
  );
};

export default EditProduct;
