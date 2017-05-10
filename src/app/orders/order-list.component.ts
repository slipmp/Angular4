import { Component, OnInit } from '@angular/core';

import { IOrder } from './order';
import { OrderService } from './order.service'

@Component({
    templateUrl: 'app/orders/order-list.component.html'
})

export class OrderListComponent implements OnInit {

    orders: IOrder[];
    errorMessage: string;

    constructor(private _orderService: OrderService){

    }

    ngOnInit(): void {
        this._orderService.getOrders()
            .subscribe(orders => this.orders = orders,
            error => this.errorMessage = <any>error);
    }
}