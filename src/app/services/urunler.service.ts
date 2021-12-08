import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrunlerData } from '../pages/Urunler/urunler';

@Injectable()
export class UrunlerService
{
    constructor(private http: HttpClient) { }
    urunlerList :any;
    getAllPosts(): Observable<UrunlerData[]>{
        return this.urunlerList = this.http.get<UrunlerData[]>("http://localhost:60252/AngularTestService/index");
    }    
   
}