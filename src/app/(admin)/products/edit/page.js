import TextArea from "@/components/TextArea";
import Input from "@/components/Input";
import Select from "@/components/Select";

const EditProduct = async ({ searchParams }) => {
  const productId = searchParams?.productId;
  const response = await fetch(
    `http://localhost:5000/products/product/${productId}`
  );
  const product = await response.json();

  return (
    <form className="grid grid-cols-2 gap-4 h-fit p-[50px]">
      <Input name="title" value={product.title} />

      <TextArea name="description" value={product.description} />

      <Input name="price" value={product.price} />

      <Input name="stock" value={product.stock} />
      <Select
        options={["swdwdwdalam", "saqwdwdwol","wdwdwdwwdw"]}
        value={product.category}
        title="Categories"
      />
    </form>
  );
};

export default EditProduct;
