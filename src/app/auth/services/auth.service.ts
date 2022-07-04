import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = 'http://localhost:3000/usuarios'
  constructor(private http:HttpClient) { }

  

}
