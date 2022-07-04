import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
// import { nombreApellidoPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        null,
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.emailValidator],
      ],
      username: [
        null,
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      password2: [null, [Validators.required]],
    },
    {
      validators: this.validatorService.camposIguales('password', 'password2'),
    }
  );
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'David Henriquez',
      email: 'test1@test.com',
      username: 'LordPain',
      password: '123456',
      password2: '123456',
    });
  }

  get emailError() {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'Correo Obligatorio';
    } else if (errors?.['email']) {
      return 'Email Invalido';
    } else if (errors?.['emailTomado']) {
      return 'Email Existente';
    }

    return '';
  }
  validarCampos(campo: string) {
    if (campo === 'email') {
    }
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.errors?.['required']
  //    && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.errors?.['email']
  //    && this.miFormulario.get('email')?.touched;
  // }

  // emailExistente(){
  //   return this.miFormulario.get('email')?.errors?.['emailTomado']
  //    && this.miFormulario.get('email')?.touched;
  // }

  guardar() {
    this.miFormulario.markAllAsTouched();
    console.log(this.miFormulario.value);
  }
}
