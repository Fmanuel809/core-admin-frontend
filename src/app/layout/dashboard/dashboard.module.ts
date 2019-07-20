import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule, PageHeaderModule } from '../../shared';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsRoutingModule } from '../charts/charts-routing.module';
import { ChartsComponent } from '../charts/charts.component';

import { UserInfoComponent } from './components/user-info/user-info.component';
import { SiteActivityComponent } from './components/site-activity/site-activity.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        AngularFontAwesomeModule,
        Ng2Charts,
        ChartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent,
        UserInfoComponent,
        SiteActivityComponent,
        ChartsComponent
    ]
})
export class DashboardModule {}
