import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomMin] [ngModel]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CustomMinDirective,
    multi:true
  }]
})
export class CustomMinDirective implements Validator {

  @Input() minimo!:number;

  constructor() { 
    console.log("Directiva" ,this.minimo);
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const inputValue = control.value;
    return (inputValue<this.minimo) ? {'customMin':true} : null;
  }

}
