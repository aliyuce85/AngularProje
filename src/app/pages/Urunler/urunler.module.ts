import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UrunlerService } from 'src/app/services/urunler.service';

import { UrunlerComponent } from './urunler.component';

@NgModule({
  declarations: [
    UrunlerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
  ],
  providers: [ UrunlerService],
  bootstrap: [UrunlerComponent]
})
export class AppModule { }