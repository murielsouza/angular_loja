import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AreaProdutosComponent} from '../publico/area-produtos/area-produtos.component';
import {HomeComponent} from '../publico/home/home.component';
import {CarrinhoComponent} from '../publico/carrinho/carrinho.component';
import {HomeAdminComponent} from './home-admin/home-admin.component';

const routes: Routes = [
    {path: 'admin', component: HomeAdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
