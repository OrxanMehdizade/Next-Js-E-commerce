import ProductItem from "@/components/ProductItem";

const Products = async () => {
  const response = await fetch("http://localhost:5000/products");
  const data = await response.json();

  return (
    <div className="w-full">
      <h1 className="text-3xl ml-10 mt-10 mb-12">Products</h1> 
      {data.products.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
};

export default Products;
