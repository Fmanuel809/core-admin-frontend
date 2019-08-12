import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'view/:id',
        component: ViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
