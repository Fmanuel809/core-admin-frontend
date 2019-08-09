import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
    declarations: [
        UsersComponent,
        AddComponent,
        ViewComponent,
        EditComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        TranslateModule
    ]
})
export class UsersModule { }
