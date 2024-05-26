import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
 
  constructor( private http:HttpClient ) { }

  getPersonajes(){
    let url=`${environment.marvelHost}/v1/public/characters?apikey=${environment.apiKey}`;

    return this.http.get(`${url}`).pipe(map((data:any)=>data.data.results));
  }

  getPersonaje( id: string ){
    let url=`${environment.marvelHost}/v1/public/characters/${id}?apikey=${environment.apiKey}`
    
    return this.http.get(`${url}`).pipe(map((data:any)=>data.data.results[0]));
  }

  getInfo( url: string ){
    let provitionalUrl = url+`?apikey=${environment.apiKey}`;
    let httpsUrl = provitionalUrl.replace('http','https');    
    
    return this.http.get(`${httpsUrl}`).pipe(map((data:any)=>data.data.results[0]));
  }
}
