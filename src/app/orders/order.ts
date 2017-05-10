import { IProduct } from '../products/product';

export interface IOrder {
    orderId: number;
    orderDate: string;
    products: IProduct[];
}