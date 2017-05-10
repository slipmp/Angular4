import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrderService } from './order.service'
//Feature Components
import { OrderListComponent } from './order-list.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports : [
        SharedModule,
        RouterModule.forChild([
            {path:'orders', component: OrderListComponent}
        ])
    ],
    declarations: [
        OrderListComponent
    ],
    providers: [
        OrderService
    ]
})
export class OrderModule {

}