import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Cart } from './components/cart/cart';
import { UserProfile } from './components/user-profile/user-profile';
import { authGuard } from './guards/auth-guard';
import { ToyDetails } from './components/toy-details/toy-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'toy/:id', component: ToyDetails},

    { path: 'cart', component: Cart, canActivate: [authGuard] },
    { path: 'user', component: UserProfile, canActivate: [authGuard] },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }