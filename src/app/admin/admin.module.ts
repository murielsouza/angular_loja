import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { PaginaNotFoundAdminComponent } from './pagina-not-found-admin/pagina-not-found-admin.component';
import { CadastroDeProdutoComponent } from './cadastro-de-produto/cadastro-de-produto.component';
import { ListaDeProdutosComponent } from './lista-de-produtos/lista-de-produtos.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, HomeAdminComponent, PaginaNotFoundAdminComponent, CadastroDeProdutoComponent, ListaDeProdutosComponent, ProdutoComponent]
})
export class AdminModule { }
