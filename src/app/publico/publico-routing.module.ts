import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListaDeCategoriasComponent} from './lista-de-categorias/lista-de-categorias.component';
import {PaginaNaoEncontradaComponent} from '../pagina-nao-encontrada/pagina-nao-encontrada.component';
import {AreaProdutosComponent} from './area-produtos/area-produtos.component';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {path: '', component: HomeComponent, children: [
        {path: 'home/produtos', component: AreaProdutosComponent},
        {path: 'home/carrinho', component: CarrinhoComponent}
        ]
    },
    {path: 'login', component: LoginComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
