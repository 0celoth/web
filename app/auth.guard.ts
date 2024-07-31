import { inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './services/auth.service';


const authService = () => inject(AuthService);
const routerInjection = () => inject(Router);

export const AuthGuard: CanActivateFn = async () => {

  const router = routerInjection();
  const {data} = await authService().session()

  console.log(data)

  if(!data.session) {
    router.navigateByUrl('auth');
  }

  return !!data.session;
}

export const publicGuard: CanActivateFn = async () => {
  const router = routerInjection();

  const {data} = await authService().session()

  if(data.session) {
    router.navigateByUrl('home');
  }

  return !data.session;
}


