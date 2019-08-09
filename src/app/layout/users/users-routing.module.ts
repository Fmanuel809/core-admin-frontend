import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'users/view/:id',
        component: ViewComponent
    },
    {
        path: 'users/add',
        component: AddComponent
    },
    {
        path: 'users/edit/:id',
        component: EditComponent
    },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
