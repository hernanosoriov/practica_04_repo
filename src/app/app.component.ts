import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01Component } from './modulo01/componente01/componente01.component';
import { Componente02Component } from './modulo02/componente02/componente02.component';
import { Componente03Component } from './modulo03/componente03/componente03.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Componente01Component,Componente02Component,Componente03Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica04_app';
}
