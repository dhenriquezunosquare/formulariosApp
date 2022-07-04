import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') myForm!: NgForm;

  persona: Persona = {
    nombre: 'David',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear',
      },
      {
        id: 2,
        nombre: 'Final Fantasy',
      },
    ],
  };

  nuevoJuego:string='';

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.myForm?.controls['nombre']?.invalid &&
      this.myForm?.controls['nombre'].touched
    );
  }

  guardar() {
    console.log('Posted');
  }

  eliminar(i:number): void {
    this.persona.favoritos.splice(i, 1);
  }


  add(juego:string): void {
    this.persona.favoritos.push({id:this.persona.favoritos.length+1,nombre:juego});
    this.nuevoJuego='';
  }
}
