import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: WarehouseComponent,
        children: [
            {
                path: 'details',
                component: ListComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
