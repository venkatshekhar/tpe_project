import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//main component
import { AppComponent } from './app.component';

//services
import { HttpService } from './shared/services/http.service';
import { WindowService } from './shared/services/window.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { KeycloakService } from './shared/services/keycloak.service';
import { UserDetailService } from './shared/services/user-detail.service';


//modules
import { AppRoutingModule } from './app.routing';
import { PaginationModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table';
import { ResponsiveModule } from 'ng2-responsive';
import { ModalModule } from "ng2-modal";
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { Ng2KeycloakModule } from '@ebondu/angular2-keycloak';

//components
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TopbarComponent } from './component/layout/topbar/topbar.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { BarchartComponent } from './component/widget/barchart/barchart.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/login/login.component';
import { InsightPatchComponent } from './component/widget/insight-patch/insight-patch.component';
import { LogReportsComponent } from './component/widget/log-reports/log-reports.component';
import { TableComponent } from './component/widget/table/table.component';
import { MultilineChartComponent } from './component/widget/multiline-chart/multiline-chart.component';
import { PieChartComponent } from './component/widget/pie-chart/pie-chart.component';
import { DonutChartComponent } from './component/widget/donut-chart/donut-chart.component';
import { AreaChartComponent } from './component/widget/area-chart/area-chart.component';
import { LightingComponent } from './component/lighting/lighting.component';
import { LightInsightpatchComponent } from './component/widget/light-insightpatch/light-insightpatch.component';
import { ModalboxComponent } from './component/shared/modalbox/modalbox.component';
import { ModaldialogComponent } from './component/shared/modaldialog/modaldialog.component';
import { MonitoringComponent } from './component/widget/monitoring/monitoring.component';
import { AlertTableComponent } from './component/widget/alert-table/alert-table.component';
import { NotificationComponent } from './component/notification/notification.component';
import { PoolsComponent } from './component/pools/pools.component';
import { IrrigationComponent } from './component/irrigation/irrigation.component';
import { DevicesComponent } from './component/devices/devices.component';
import { ConfigurationComponent } from './component/configuration/configuration.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    BarchartComponent,
    MainComponent,
    LoginComponent,
    InsightPatchComponent,
    LogReportsComponent,
    TableComponent,
    MultilineChartComponent,
    PieChartComponent,
    DonutChartComponent,
    AreaChartComponent,
    LightingComponent,
    LightInsightpatchComponent,
    ModalboxComponent,
    ModaldialogComponent,
    MonitoringComponent,
    AlertTableComponent,
    NotificationComponent,
    PoolsComponent,
    IrrigationComponent,
    DevicesComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ResponsiveModule,
    CommonModule,
    PaginationModule.forRoot(),
    TabsModule,
    Ng2TableModule,
    Ng2KeycloakModule,
    ModalModule,
    BootstrapModalModule
  ],
  providers: [
    HttpService,
    WindowService,
    AuthenticationService,
    KeycloakService,
    UserDetailService

  ],
  entryComponents: [
    ModaldialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
