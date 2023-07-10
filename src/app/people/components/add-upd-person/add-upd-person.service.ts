import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddUpdService {

  private url = 'http://localhost:3000/people'

  constructor(private http:HttpClient) { }

  public AddUpdPerson(p_data:any) : Observable <any>{
    p_data={
      nom_per:"HJasdasd",
      pat_per:"HJasdasd",
      mat_per:"HJasdasd",
      nro_doc:"HJasdasd",
      fch_nac:"HJasdasd",
      img_per:File
    }
    return this.http.post<any>(this.url,p_data)

  }
}
