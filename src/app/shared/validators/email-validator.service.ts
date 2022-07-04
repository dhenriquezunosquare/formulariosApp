import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  url='http://localhost:3000/usuarios?q='
  constructor(private http:HttpClient) { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = control.value;
    console.log(email);
    return this.http.get(this.url+email).pipe(
      delay(1000),
      map((resp:any)=>{
        return (resp.length===0) ? null : {emailTomado:true}
      })
    )
  }
}
