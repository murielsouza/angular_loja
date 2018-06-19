import { Injectable, EventEmitter } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Categoria} from './categoria.model';
import {Produto} from './produto.model';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos = null;
  API_URL = 'http://localhost:3000';
  static categoriaFiltrada = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  listarCategorias(){
      return this.http.get(this.API_URL + '/categorias?_sort=nome&_order=asc');
  }

  filtrarProdutosCategoria(id: number){
      ProdutosService.categoriaFiltrada.emit(this.http.get<any[]>(this.API_URL + '/produtos?categoriaId=' + id));
  }

  //carregarProdutos(){
  //    return this.produtos;
  //}
}
