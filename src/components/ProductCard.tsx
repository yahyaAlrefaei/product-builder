import { IProduct } from "../interfaces";
import InfoCard from "./InfoCard";
import PriceAndColor from "./PriceAndColor";
import Button from "./ui/Button";
import Img from "./ui/Img";

export interface IProductCardProps extends IProduct {
  onDelete: (id: number) => void;
  onEdit: (productItem: IProduct) => void;
}

const ProductCard = ({
  id,
  color,
  description,
  image,
  price,
  title,
  onDelete,
  seller,
  onEdit,
}: IProductCardProps) => {
  return (
    <div className="space-y-3 rounded-lg border border-gray-300 p-3 duration-500">
      <Img image={image} />
      <InfoCard title={title} description={description} />
      <PriceAndColor price={price} color={color} seller={seller} />
      {id && (
        <div className="flex items-center justify-between gap-3">
          <Button
            onClick={() =>
              onEdit({ id, title, description, price, color, image, seller })
            }
          >
            Edit
          </Button>

          <Button onClick={() => onDelete(id)} variant="error">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
