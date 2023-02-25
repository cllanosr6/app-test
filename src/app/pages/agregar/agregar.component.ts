import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  //formPlatos!: FormGroup;

  constructor() {
    
  }

  ngOnInit(): void {}

  /* getNombreMessage() {
    if (this.formPlatos.controls.user.hasError('required')) {
      return 'Este campo es requerido';
    }
  } */

}
