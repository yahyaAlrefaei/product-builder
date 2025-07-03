import { ImgHTMLAttributes } from "react";

export interface IImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  image: string;
}

const Img = ({ image, ...props }: IImgProps) => {
  return (
    <img
      src={image}
      alt="product"
      className="w-full h-48 object-cover rounded-lg"
      {...props}
    />
  );
};

export default Img;
