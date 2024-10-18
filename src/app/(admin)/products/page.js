const Products = async () => {
  const response = await fetch("http://localhost:5000/products");
  const products = await response.json();

  return (
    <div className="">
      {products.map((item) => (
        <ProductItem item={item} />
      ))}
    </div>
  );
};

export default Products;
