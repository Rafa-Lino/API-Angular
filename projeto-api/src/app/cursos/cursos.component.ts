import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public cursos: Curso[] = [];
  public curso = new Curso();

  constructor(
    private service: CursoService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe(
      (response: Curso[]) => {
        this.cursos = response;
      }
    );
  }

  cadastrar() {
    this.service.save(this.curso).subscribe(
      (response: Curso[]) => {
        this.listar();
        this.curso = new Curso();
      }
    );
  }

  excluir(curso: Curso) {
    this.service.excluir(curso).subscribe(
      (response: Curso[]) => {
        this.cursos = response;
      }
    );
  }

  editar(curso: Curso) {
    this.curso = {...curso};
  }

}
