import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  templateMenu: MenuItem[] = [
    {
      texto: 'Basico',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Basico',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinamicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];

  authMenu: MenuItem[] = [
    {ruta:'./auth/login', texto:'Login'},
    {ruta:'./auth/register', texto:'Register'},
  ]

  constructor() {}

  ngOnInit(): void {}
}
