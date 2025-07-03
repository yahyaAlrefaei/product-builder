import { ISeller } from "../interfaces";
import Circle from "./ui/Circle";
import Img from "./ui/Img";

export interface IPriceAndColorProps {
  price: number;
  color: string[];
  seller?: ISeller;
}

const PriceAndColor = ({ price, color, seller }: IPriceAndColorProps) => {
  const colorsList = color.map((color) => <Circle key={color} color={color} />);
  return (
    <div className="flex justify-between">
      <div className="w-[75%]">
        <div className="flex justify-start gap-1 items-center flex-wrap">
          {colorsList}
        </div>
        <p>{price}$</p>
      </div>
      <Img
        image={seller?.avatar ?? "https://picsum.photos/seed/picsum/200/300"}
        className="rounded-full w-12 h-12 object-fill"
      />
    </div>
  );
};

export default PriceAndColor;
