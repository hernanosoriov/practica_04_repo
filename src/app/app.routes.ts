import { Routes } from '@angular/router';
import { Componente02Component } from './modulo02/componente02/componente02.component';
import { Componente03Component } from './modulo03/componente03/componente03.component';

export const routes: Routes = [
    { path: '', redirectTo: '/componente2', pathMatch: 'full' },
    {path:'componente2',component: Componente02Component},
    {path:'componente3',component: Componente03Component}

];
