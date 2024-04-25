import { IProductProps } from "@/interfaces/interface.product";
export interface CartBoxProps extends IProductProps {
  numberProducts: number
  totalPrice: number
}