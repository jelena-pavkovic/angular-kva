import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Cart } from './components/cart/cart';
import { UserProfile } from './components/user-profile/user-profile';
import { About } from './components/about/about';
import { authGuard } from './guards/auth-guard';
import { A } from '@angular/cdk/keycodes';

export const routes: Routes = [
    { path: '', component: Home }, // Početna sa igračkama
    { path: 'login', component: Login },
    { path: 'about', component: About },
    { path: 'register', component: Register },

    { path: 'cart', component: Cart, canActivate: [authGuard] },
    { path: 'user', component: UserProfile, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }