import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationService } from '../services/notification.service';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NotificationService
   
  ],
  providers: [ NotificationService],
  bootstrap: [NotificationComponent]
})
export class AppModule { }