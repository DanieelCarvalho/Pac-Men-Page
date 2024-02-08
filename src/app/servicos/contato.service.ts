import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  // private url : string: "API"
  constructor(private http: HttpClient) {}

  // enviarMensagem(obj: Contato ): Observable<Contato>{
  //   return this.http.post(`${this.url}/enviar`, obj)
  // }
}
