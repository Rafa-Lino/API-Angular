import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL Base:
  url = "http://localhost/api-angular/php/";

  //vetor de curso
  vetor:Curso[];


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }



  //funções

  cadastrar(): void {
    alert("cadastro");

  }

  selecionar():void {
    alert("selecao");
  }

  alterar():void {
    alert("alterar");
  }

  excluir():void {
    alert("excluir");
  }

}
