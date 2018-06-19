import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';
import { ListaDeCategoriasComponent } from './lista-de-categorias/lista-de-categorias.component';
import { HomeComponent } from './home/home.component';
import { AreaProdutosComponent } from './area-produtos/area-produtos.component';
import { PublicoComponent } from './publico/publico.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import {FormsModule} from '@angular/forms';
import {ProdutosService} from '../produtos.service';

@NgModule({
  imports: [
    CommonModule,
    PublicoRoutingModule,
    FormsModule
  ],
  providers: [ProdutosService],
  declarations: [ListaDeCategoriasComponent, HomeComponent, AreaProdutosComponent, PublicoComponent, RodapeComponent, MenuComponent, LoginComponent, CarrinhoComponent]
})
export class PublicoModule { }
