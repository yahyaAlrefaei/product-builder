import { FormEvent, Fragment, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Circle from "../../components/ui/Circle";
import ErrorMessage from "../../components/ui/ErrorMessage";
import Input from "../../components/ui/Input";
import { COLORS, inputFormList } from "../../constants";
import { IAddProductSchema, IProduct, ISeller } from "../../interfaces";
import { products as productsData } from "../../lib/fakeData";
import { AddProductSchema } from "../../validations";
import { people } from "../../components/ui/Select";
import toast from "react-hot-toast";

const defaultValues: IProduct = {
  title: "",
  description: "",
  price: null as unknown as number,
  color: [],
  image: "",
};

const defaultErrorsValues: IAddProductSchema = {
  title: "",
  description: "",
  price: "",
  image: "",
  color: "",
};

const useProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [dataInput, setDataInput] = useState<IProduct>(defaultValues);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [productList, setProductList] = useState<IProduct[]>(productsData);
  const [itemDelete, setItemDelete] = useState<IProduct>(defaultValues);
  const [seller, setSeller] = useState<ISeller>(people[0]);
  const [productForUpdate, setProductForUpdate] = useState<IProduct>();
  const [errorList, setErrorList] =
    useState<IAddProductSchema>(defaultErrorsValues);

  const handleDelete = () => {
    if (!itemDelete.id) return;
    try {
      setProductList((prev) =>
        prev.filter((item) => item.id !== itemDelete.id)
      );
      setIsOpenDelete(false);
      toast.success("Product deleted successfully");
    } catch (error: { message: string } | any) {
      toast.error(error?.message as string);
    }
  };

  const handleOpenDeleteModal = (item: IProduct) => {
    setIsOpenDelete(true);
    setItemDelete(item);
  };

  const handleOpenUpdateModal = (product: IProduct) => {
    console.log(product);
    setIsOpen(true);
    setProductForUpdate(product);
    setDataInput((oldItem) => ({ ...oldItem, ...product }));
    setSelectedColor(product.color);
    product.seller && setSeller(product.seller);
  };

  const products = productList.map((product: IProduct) => (
    <ProductCard
      key={product.id}
      {...product}
      onDelete={() => handleOpenDeleteModal(product)}
      onEdit={() => handleOpenUpdateModal(product)}
    />
  ));

  const inputs = inputFormList.map((input) => (
    <Fragment key={`box-${input.name}`}>
      <Input
        key={input.name}
        {...input}
        value={dataInput[input.name]}
        onChange={(e) => {
          setDataInput({ ...dataInput, [input.name]: e.target.value });
          setErrorList((prev) => ({ ...prev, [input.name]: "" }));
        }}
      />
      <ErrorMessage key={`error-${input.name}`} title={errorList[input.name]} />
    </Fragment>
  ));

  const handleSelectedColor = (color: string) => {
    setErrorList((prev) => ({ ...prev, color: "" }));
    if (selectedColor.includes(color)) {
      setSelectedColor((prev) => prev.filter((item) => item !== color));
      return;
    }

    setSelectedColor((prev) => [...prev, color]);
  };

  const colorsList = COLORS.map((color) => (
    <Circle
      key={color}
      color={color}
      onClick={() => handleSelectedColor(color)}
    />
  ));

  const selectedColorList = selectedColor.map((color) => (
    <div
      className="px-1 py-[0.5px] rounded-lg text-white text-[13px]"
      key={color}
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  ));

  const handleClose = () => {
    setIsOpen(false);
    setDataInput(defaultValues);
    setErrorList(defaultErrorsValues);
    setSelectedColor([]);
    setProductForUpdate(undefined);
  };

  const generateDate = (data: IProduct, prev: IProduct[]) => {
    console.log("prev", prev);

    if (productForUpdate) {
      prev = prev.map((item) => {
        if (item.id === productForUpdate.id) {
          return {
            ...item,
            ...data,
            color: selectedColor,
            seller: seller,
          };
        }
        return item;
      });
      return [...prev];
    } else {
      return [
        {
          ...data,
          id: 6 + data.title.length,
          seller: seller,
        },
        ...prev,
      ];
    }
  };

  const validationFormInputs = () => {
    const hasErrorMessage =
      Object.values(AddProductSchema(dataInput)).some(
        (message) => message === ""
      ) &&
      Object.values(AddProductSchema(dataInput)).every(
        (message) => message === ""
      );
    if (!hasErrorMessage) {
      setErrorList(AddProductSchema(dataInput));
      return;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    dataInput.color = selectedColor;
    e.preventDefault();
    validationFormInputs();
    try {
      setProductList((prev) => generateDate(dataInput, prev));
      toast.success(
        productForUpdate
          ? "Product updated successfully"
          : "Product added successfully"
      );
      setDataInput(defaultValues);
      setErrorList(defaultErrorsValues);
      setSelectedColor([]);
      setIsOpen(false);
      setProductForUpdate(undefined);
    } catch (error: { message: string } | any) {
      toast.error(error?.message as string);
    }
  };

  return {
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
  };
};

export default useProduct;
