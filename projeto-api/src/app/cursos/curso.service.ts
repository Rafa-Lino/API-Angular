import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private url = "http://localhost/api/php/";

  private cursos:  Curso[] = [];

  constructor(
    private http: HttpClient
  ) {
    JSON.parse
  }


  listar(): Observable<Curso[]> {
    return this.http.get(this.url + "listar").pipe(
      map((res:any) => {
        this.cursos = res['cursos'];
        return this.cursos;
      })
    );
  }

  save(curso: Curso): Observable<Curso[]> {
    if(curso.id) {
      return this.atualizar(curso);
    }
    return this.cadastrar(curso);
  }

  private cadastrar(curso: Curso): Observable<Curso[]> {
    return this.http.post(this.url + "cadastrar", { curso: curso }).pipe(
      map((response:any) => {
        this.cursos.push(response["cursos"].pop());
        return this.cursos;
      })
    );
  }

  private atualizar(curso: Curso): Observable<Curso[]> {
    return this.http.put(this.url + "alterar", { curso: curso }).pipe(
      map((response:any) => {
        const index = this.cursos.findIndex(_it => _it.id == curso.id!);
        this.cursos[index] = curso;
        return this.cursos;
      })
    );
  }



  excluir(curso: Curso): Observable<Curso[]> {
    alert(JSON.stringify(curso));
    const params = new HttpParams().set("id", curso.id!.toString());
    return this.http.delete(this.url + "excluir", { body: { curso: curso } }).pipe(
      map((response:any) => {
        this.cursos = this.cursos.filter((_it => _it.id != curso.id));
        return this.cursos;
      })
    );
  }


}
