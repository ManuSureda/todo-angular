import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router : Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request = req;

    const token = sessionStorage.getItem('token');

    if (token) {
      request = req.clone({ 
        setHeaders: { 
          Authorization: `Bearer ${ token }` 
        } 
      });
    }

    return next.handle(request).pipe(
      catchError((error : HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        } else if (error.status === 403) {
          this.router.navigateByUrl('/login');
        }
        return throwError(error);
      })
    )
  }
}
