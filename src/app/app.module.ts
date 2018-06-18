import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PaginaNaoEncontradaComponent} from './pagina-nao-encontrada/pagina-nao-encontrada.component';

import {PublicoModule} from './publico/publico.module';
import {AdminModule} from './admin/admin.module';
import {PublicoRoutingModule} from './publico/publico-routing.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {ProdutosService} from './produtos.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    PublicoModule,
    AdminModule,
    PublicoRoutingModule,
    AdminRoutingModule,
    AppRoutingModule

  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
