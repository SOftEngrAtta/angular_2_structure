import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      AdminRoutingModule],
  declarations: [AdminComponent, SidebarComponent, HeaderComponent]
})
export class AdminModule { }
