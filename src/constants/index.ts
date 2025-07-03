import { IInputForm } from "../interfaces";

export const COLORS = [
  "#A31ACB",
  "#3C2A21",
  "#1F8A70",
  "#820000",
  "#FF0032",
  "#FF5733",
  "#3498DB",
  "#2ECC71",
  "#F1C40F",
  "#9B59B6",
  "#FADBD8",
  "#34495E",
  "#FFA07A",
  "#1F618D",
  "#808000",
];

export const inputFormList: IInputForm[] = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter title",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    placeholder: "Enter description",
  },
  {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Enter price",
  },
  {
    label: "image",
    name: "image",
    type: "text",
    placeholder: "Enter image",
  },
];
