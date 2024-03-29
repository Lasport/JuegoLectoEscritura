import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})

export class CheckloginGuard implements CanActivate {
  constructor(private authSvc: AuthService ){}
  canActivate():
    Observable<boolean> {
    return this.authSvc.isLogged.pipe(
      take(1),
      map((islogged:boolean)=> !islogged)
    );
  }
}
