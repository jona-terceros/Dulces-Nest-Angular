import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { Dulce } from './Dulce';

@Injectable({
  providedIn: 'root'
})
export class DulceService {

  private DulceUrl = 'http://localhost:3000/dulces';

  constructor(private http: HttpClient) { }

  getDulces(): Observable<Dulce[]>
  {
    return this.http.get<Dulce[]>(this.DulceUrl);
  }

  getDulce(id: number): Observable<Dulce>
  {
    const url = `${this.DulceUrl}/${id}`;
    return this.http.get<Dulce>(url);
  }
  searchDulces(id:string): Observable<Dulce[]>{
    if(!id.trim()){
      return of([]);
    }
      return this.http.get<Dulce[]>(`${this.DulceUrl}/?nombre=${id}`);
  }
  addDulce(dulce: Dulce): Observable<Dulce>
  {
    return this.http.post<Dulce>(this.DulceUrl,dulce);
  }
  deleteDulces(id: number): Observable<Dulce>{
    const url = `${this.DulceUrl}/${id}`;
    return this.http.delete<Dulce>(url);
  }
  updateDulces(id: number,dulce: Dulce): Observable<Dulce>{
    return this.http.put<Dulce>(`${this.DulceUrl}/${id}`, dulce);

  }

}
