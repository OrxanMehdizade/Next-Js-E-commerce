"use client"

import ProductItem from "../../../components/ProductItem";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { fetchData } from "@/utils/fetchData";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([])
  const t =  useTranslations("Admin")

  useEffect(() => {
    const getProducts = async () => {
      const result = await fetchData({ url: "http://localhost:5000/products" });
      setData(result.data.products)
    }

     getProducts()
  }, [])

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-10 pt-10 pb-12">
        <h1 className="text-3xl">{t("products")}</h1>
        <Link
          className="text-orange-500 border-[1px] border-orange-500 px-4 py-2 rounded-[24px]"
          href="/admin/products/add"
        >
          {t("addNewProduct")}
        </Link>
      </div>
      {data.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
};

export default Products;
