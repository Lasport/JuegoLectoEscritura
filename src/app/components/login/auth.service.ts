import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserResponse, User } from 'src/app/models/user.interface';
import {catchError , map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) {
  }

  get isLogged():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData:User):Observable< UserResponse | void>{
    return this.http
    .post<UserResponse>(`${environment.api_url}/auth/login`,authData)
    .pipe(
      map( (res:UserResponse)=>{
        this.savenToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
        catchError((err)=> this.handlerError(err))
    );
  }

  logout():void{
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    // set userIsLogged=false
  }

  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired();
    console.log('isExpired =>',isExpired);

    if(isExpired){
      this.logout();
    }else{
      this.loggedIn.next(true);
    }
  }


  private savenToken(token:string):void{
    localStorage.setItem('token', token);
  }

  private handlerError(err: { message: any; }):Observable<never>{
    let errorMessage = 'An error ocurred retrienvig data';
    if(err){
      errorMessage=`Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

