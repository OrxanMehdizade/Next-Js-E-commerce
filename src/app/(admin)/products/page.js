"use client";

import Input from "@/components/Input";
import Select from "@/components/Select";
import { useState } from "react";

const Products = () => {
  const [formData, setFormData] = useState({});

  const categoryOptions = [
    {
      label: "Texnologiya",
      value: "texnologiya",
    },
    {
      label: "Elektronika",
      value: "elektronika",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 h-fit">
      <Input name="title" setFormData={setFormData} />

      <Input name="description" setFormData={setFormData} />

      <Input name="price" setFormData={setFormData} />

      <Select options={categoryOptions} />
    </div>
  );
};

export default Products;
