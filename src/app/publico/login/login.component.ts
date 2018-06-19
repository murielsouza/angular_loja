import { Component, OnInit } from '@angular/core';
import  {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import  {LogonService} from '../logon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuario: string;
    senha: string;
    erro = null;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    entrar() {
        this.authService.auth(this.usuario, this.senha)
            .subscribe(usuarios => {
                if (usuarios.length > 0) {
                    this.erro = null;
                  if (usuarios[0].isAdm === true ){
                      this.authService.set(usuarios[0]);
                      this.router.navigate(['admin']);
                  }
                  if (usuarios[0].isAdm === false) {
                    this.authService.set(usuarios[0]);
                    this.router.navigate(['']);
                  }
                } else {
                    this.erro = 'Login ou senha incorretos';
                }
            });
    }
}