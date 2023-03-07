import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  temperature$:any



  constructor(public http:HttpClient) {
  }

getweather(input:any):Observable<any> {
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=1dbd4623517387a989b173dc879c15c6`)
}




}
