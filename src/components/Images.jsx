"use client";

const Images = () => {
  const addImage = async ({e}) => {
    console.log(e)
    // const response = await fetch("http://localhost:5000/products/addImage", {
    //   method: "POST",
    //   body: "",
    //   headers: {
    //     "Content-Type": "multiform/form-data",
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
  };
  return (
    <div>
      {/* <form action={(e)=>{
        addImage(e);
      }}>
        <input type="file" />
        <button>Upload</button>
      </form> */}
    </div>
  );
};

export default Images;
