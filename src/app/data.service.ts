import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getData():Observable<any>{
    return this.http.get('https://mocki.io/v1/547589c9-ff49-4232-a530-61e520c08343');
  }


}
