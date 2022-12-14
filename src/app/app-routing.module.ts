import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './shared/error/error.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule), canLoad: [ AuthGuard ], canActivate: [ AuthGuard ] },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404' }
]


@NgModule({
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports :[
    RouterModule
  ]
})
export class AppRoutingModule { }
