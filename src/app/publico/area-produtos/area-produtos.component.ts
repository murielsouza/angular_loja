import { Component, OnInit } from '@angular/core';
import {ProdutosService} from '../../produtos.service';
import {Produto} from '../../produto.model';

@Component({
  selector: 'app-area-produtos',
  templateUrl: './area-produtos.component.html',
  styleUrls: ['./area-produtos.component.css']
})
export class AreaProdutosComponent implements OnInit {
  produtos = null;
  status = null;
  constructor(private produtoServices: ProdutosService) {
    this.produtos = produtoServices.carregarProdutos();
  }

  ngOnInit() {


   // ProdutosService.categoriaFiltrada.subscribe(
     //   produtos => {this.produtos = produtos}, () => this.status = false
    //);
  }

}
