import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') myForm!: NgForm;


  constructor() {}
  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.myForm?.controls['producto']?.invalid &&
      this.myForm?.controls['producto'].touched
    );
  }

  precioValido(): boolean {
    return (
      this.myForm?.controls['precio']?.touched &&
      this.myForm?.controls['precio'].value < 0
    );
  }

  guardar(): void {
    if (this.myForm.controls['precio'].value < 0) {
      return alert('Erroor precio');
    }
    console.log(this.myForm);

    this.myForm.resetForm({
      precio:0,
      existencias:0
    });
  }
}
