import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {ProdutosService} from '../../produtos.service';
import {Router} from '@angular/router';
import {Categoria} from '../../categoria.model';

@Component({
  selector: 'app-lista-de-categorias',
  templateUrl: './lista-de-categorias.component.html',
  styleUrls: ['./lista-de-categorias.component.css']
})
export class ListaDeCategoriasComponent implements OnInit {
  categorias = null;
  produtos = null;
  status = null;

  constructor(private produtosService: ProdutosService, private router: Router) {
    this.listarCategorias();
  }

    listarCategorias(){
        this.produtosService.listarCategorias().subscribe(
           categorias => {this.categorias = categorias}, () => this.status = false
        );
    }

  ngOnInit() {
  }

    onFiltrar(categoria: Categoria){
        this.produtosService.filtrarProdutosCategoria(categoria.id);
        this.router.navigate(['home/produtos']);
    }

}
