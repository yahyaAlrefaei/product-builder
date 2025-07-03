import Modal from "./ui/Modal";
import Button from "./ui/Button";

export interface IDeleteModalProps {
  isOpen: boolean;
  title: string;
  productName: string;
  handleClose: () => void;
  handleConfirmDelete: () => void;
}

const DeleteModal = ({
  isOpen,
  title,
  handleClose,
  handleConfirmDelete,
  productName,
}: IDeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} title={title}>
      <p>
        Are you sure you want to delete this product "
        <span className="text-red-700">{productName}</span>"?
      </p>
      <div className="flex items-center space-x-3 mt-4">
        <Button type="button" variant="error" onClick={handleConfirmDelete}>
          Yes, Delete It
        </Button>
        <Button type="button" onClick={handleClose} variant="info">
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
