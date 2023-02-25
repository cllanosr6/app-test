import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatosService } from '../../services/platos.service';
import { MensajeError, Platos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  lista: Platos[] = [];
  msgError!: MensajeError;

  constructor(private router: Router, private platosService: PlatosService) {}

  ngOnInit(): void {
    this.listaPlatos();
  }

  listaPlatos() {
    this.platosService.listaPlatos().subscribe(
      (resp) => {
        // this.semestres = resp.data;
        console.log(resp);

        this.lista = resp;
      },
      (err) => {
        console.log(err);

        this.msgError = err;
      }
    );
  }

  agregar() {
    console.log('agregar');
    this.router.navigate(['agregar']);
  }
}
