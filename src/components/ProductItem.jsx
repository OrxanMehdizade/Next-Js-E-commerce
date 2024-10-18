const ProductItem = ({ item }) => {
  return (
    <div className="flex">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.stock}</p>
      <p>{item.category}</p>
    </div>
  );
};

export default ProductItem;
