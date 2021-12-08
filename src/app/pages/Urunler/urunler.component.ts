import { Component, OnInit } from '@angular/core';
import { UrunlerService } from '../../services/urunler.service';
import { UrunlerData } from './urunler';

@Component({
  selector: 'urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.scss']
})
export class UrunlerComponent implements OnInit {

    urunlerList:UrunlerData[]=[];
    sonuc=0;
    ilkDeger=0;
    ikinciDeger=0;
    
  constructor(private postService: UrunlerService) { }
  
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (gelen: UrunlerData[]) => {
        debugger;
        let data = gelen;
        this.urunlerList=data;
      }
    );
  }
   
  topla(){
      this.sonuc=(++this.ilkDeger)+(++this.ikinciDeger);
  }
  cikar(){
    this.sonuc=this.ilkDeger-this.ikinciDeger;
    }
    bolme(){
        this.sonuc=this.ilkDeger/this.ikinciDeger;
    }
    carpma(){
        this.sonuc=this.ilkDeger*this.ikinciDeger;
    }
}
