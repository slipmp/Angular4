import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Feature Components
import { OrderListComponent } from './order-list.component';


@NgModule({
    imports : [
        RouterModule.forChild([
            {path:'orders', component: OrderListComponent}
        ])
    ],
    declarations: [
        OrderListComponent
    ]
})
export class OrderModule {

}