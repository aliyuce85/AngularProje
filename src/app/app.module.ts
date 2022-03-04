import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrunlerComponent } from './pages/Urunler/urunler.component';
import { UrunlerService } from './services/urunler.service';
import { NotificationComponent } from './notification/notification.component';
import { NotificationService } from './services/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    UrunlerComponent,
    NotificationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [UrunlerService,NotificationService],
  bootstrap: [AppComponent,UrunlerComponent]
  
})
export class AppModule { }
