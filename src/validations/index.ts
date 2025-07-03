import { IAddProductSchema, ITextInputForm } from "../interfaces";

export const AddProductSchema = (product: ITextInputForm) => {
  const errors: IAddProductSchema = {
    title: "",
    description: "",
    image: "",
    price: "",
    color: "",
  };

  function isValidImageUrl(url: string) {
    const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return pattern.test(url);
  }

  if (
    !product.title.trim() ||
    product.title.length < 7 ||
    product.title.length > 50
  ) {
    errors.title = "Title must be between 7 and 50 characters";
  }
  if (
    !product.description.trim() ||
    product.description.length < 30 ||
    product.description.length > 250
  ) {
    errors.description = "Description must be between 30 and 250 characters";
  }
  if (
    !product?.price?.toString().trim() ||
    isNaN(Number(product.price)) ||
    product.price <= 0
  ) {
    errors.price = "Price must be a number";
  }
  if (!product.image.trim() || !isValidImageUrl(product.image)) {
    errors.image = "Image must be a valid URL";
  }
  if (product.color.length === 0) {
    errors.color = "Color must be selected";
  }

  return errors;
};
