import { FormEvent, ReactNode } from "react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import Select from "./ui/Select";
import { IAddProductSchema, ISeller } from "../interfaces";
import ErrorMessage from "./ui/ErrorMessage";

export interface IAddModalProps {
  isOpen: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputs: ReactNode;
  colorsList: ReactNode;
  selectedColorList: ReactNode;
  handleClose: () => void;
  title: string;
  setSeller: (seller: ISeller) => void;
  errorList: IAddProductSchema;
  isEdit: boolean;
  seller: ISeller;
}

const AddModal = ({
  isOpen,
  handleSubmit,
  inputs,
  colorsList,
  selectedColorList,
  handleClose,
  title,
  setSeller,
  errorList,
  isEdit,
  seller,
}: IAddModalProps) => {
  return (
    <Modal isOpen={isOpen} title={title}>
      <form onSubmit={handleSubmit}>
        {inputs}
        <div className="flex justify-start gap-1 items-center flex-wrap mb-2">
          {selectedColorList}
        </div>
        <div className="flex justify-start gap-1 items-center flex-wrap">
          {colorsList}
        </div>
        <ErrorMessage title={errorList.color} key={"error-color"} />
        <Select setSeller={setSeller} seller={seller} />
        <div className="flex items-center space-x-3 mt-4">
          <Button type="submit" variant="success">
            {isEdit ? "Edit Product" : "Add Product"}
          </Button>
          <Button type="button" onClick={handleClose} variant="error">
            Close
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddModal;
