import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any[]>(this.API);
  }

  criar(pensamento: any): Observable<any> {
    return this.http.post<any>(this.API, pensamento);
  }

  editar(pensamento: any): Observable<any> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<any>(url, pensamento)
  }

  excluir(id: any): Observable<any> {
    const url = `${this.API}/${id}`
    return this.http.delete(url);
  }

  buscarPorId(id: any): Observable<any> {
    const url = `${this.API}/${id}`
    return this.http.get<any>(url);
  }
}
