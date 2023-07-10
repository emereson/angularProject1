import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private url = 'http://localhost:3000/people'

  constructor(private http:HttpClient) { }

  public peopleData() : Observable <any>{
    return this.http.get<any>(this.url)

  }
}
