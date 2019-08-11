import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TranslateModule,
    FormsModule
  ]
})
export class ProductsModule { }
