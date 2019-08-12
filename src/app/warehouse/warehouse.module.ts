import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseComponent } from './warehouse.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../shared/pipes/search.pipe';

@NgModule({
  declarations: [WarehouseComponent, HeaderComponent, FooterComponent, ListComponent, SearchPipe],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    FormsModule
  ]
})
export class WarehouseModule { }
