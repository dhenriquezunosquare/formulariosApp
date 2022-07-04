import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear'],  /// COlecciones de form control
        ['Final Fantasy'] /// COlecciones de form control
      ],
      Validators.required
    ),
  });

  nuevoJuego: FormControl = this.fb.control('',Validators.required);

  //#region getters

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  //#endregion

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  validarCampos(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  add(){
    if(this.nuevoJuego.invalid){
      return ;
    }

    //const data = new FormControl(this.nuevoJuego.value,Validators.required);    
    const data = this.fb.control(this.nuevoJuego.value,Validators.required);
    this.favoritosArr.push(data);

    this.nuevoJuego.reset();

  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);

    this.miFormulario.reset();
  }

  borrar(i:any){
    this.favoritosArr.removeAt(i);
  }

}
