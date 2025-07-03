import { Toaster } from "react-hot-toast";
import AddModal from "../../components/AddModal";
import DeleteModal from "../../components/DeleteModal";
import Button from "../../components/ui/Button";
import { IProduct } from "../../interfaces";
import useProduct from "./useProduct";

const Products = () => {
  const {
    products,
    inputs,
    isOpen,
    setIsOpen,
    handleSubmit,
    handleClose,
    colorsList,
    selectedColorList,
    isOpenDelete,
    setIsOpenDelete,
    handleDelete,
    setItemDelete,
    itemDelete,
    setSeller,
    errorList,
    productForUpdate,
    seller,
  } = useProduct();

  return (
    <>
      <Toaster />
      <AddModal
        title={productForUpdate ? "Edit Product" : "Add Product"}
        isOpen={isOpen}
        handleSubmit={handleSubmit}
        inputs={inputs}
        colorsList={colorsList}
        selectedColorList={selectedColorList}
        handleClose={handleClose}
        setSeller={setSeller}
        seller={seller}
        errorList={errorList}
        isEdit={!!productForUpdate}
      />
      <DeleteModal
        productName={itemDelete.title}
        title="Delete Product"
        isOpen={isOpenDelete}
        handleClose={() => {
          setIsOpenDelete(false);
          setItemDelete({} as IProduct);
        }}
        handleConfirmDelete={handleDelete}
      />
      <div className="md:flex justify-between items-center w-[80%] mx-auto mb-6">
        <h1 className="text-3xl mb-2 md:mb-0 md:text-5xl font-medium">
          Latest <span className="text-[#5818c3]">Products</span>
        </h1>
        <Button
          onClick={() => setIsOpen(true)}
          variant="success"
          className="!w-fit px-4"
        >
          Add Product
        </Button>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products}
      </div>
    </>
  );
};

export default Products;
