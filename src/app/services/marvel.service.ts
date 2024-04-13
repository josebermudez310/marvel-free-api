import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  url='https://gateway.marvel.com/v1/public/characters?apikey=e10449344c3ed4d23dbc39c2bf657aa8&hash=ac9cd13f55ac10371645a0126b7f009c&ts=abcdefghijk';
 
  constructor( private http:HttpClient ) { }

  getPersonajes()
  {
    return this.http.get(`${this.url}`).pipe(map((data:any)=>data.data.results));
  }

  getPersonaje(id:string)
  {
    let url=`https://gateway.marvel.com/v1/public/characters/${id}?apikey=e10449344c3ed4d23dbc39c2bf657aa8&hash=ac9cd13f55ac10371645a0126b7f009c&ts=abcdefghijk`
    return this.http.get(`${url}`).pipe(map((data:any)=>data.data.results[0]));
  }

  getInfo(url:string)
  {
    let url1=url+'?apikey=e10449344c3ed4d23dbc39c2bf657aa8&hash=ac9cd13f55ac10371645a0126b7f009c&ts=abcdefghijk'.replace('http','https');
    return this.http.get(`${url1}`).pipe(map((data:any)=>data.data.results[0]));
  }
}
