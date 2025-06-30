// src/app/features/servidores/lista-canales/lista-canales.component.ts
import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CanalesService } from '../../../core/services/canales.service';
import { CanalResponse, CanalCreateRequest } from '../../../models/canal.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-canales',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-canales.component.html',
  styleUrls: ['./lista-canales.component.css']
})
export class ListaCanalesComponent implements OnInit {
  canales: CanalResponse[] = [];
  servidorId: string = '';
  cargando = false;
  mostrarModal = signal(false);

  // Modal form
  nuevoCanal: CanalCreateRequest = {
    servidorId: '',
    nombre: '',
    tipo: 'TEXTO'
  };

  constructor(
    private route: ActivatedRoute,
    private canalesService: CanalesService
  ) {}

  ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.servidorId = params.get('id')!;
    this.nuevoCanal.servidorId = this.servidorId;
    this.cargarCanales();
  });
}

  cargarCanales(): void {
    this.cargando = true;
    this.canalesService.getCanalesPorServidorId(this.servidorId).subscribe({
      next: (data) => {
        this.canales = data;
        this.cargando = false;
      },
      error: () => {
        this.canales = [];
        this.cargando = false;
      }
    });
  }

  agregarCanal(): void {
    this.mostrarModal.set(true);
  }

  cancelarCreacion(): void {
    this.mostrarModal.set(false);
    this.nuevoCanal = { servidorId: this.servidorId, nombre: '', tipo: 'TEXTO' };
  }

  confirmarCreacion(): void {
    this.canalesService.crearCanal(this.nuevoCanal).subscribe({
      next: () => {
        this.cancelarCreacion();
        this.cargarCanales();
      },
      error: () => {
        alert('No se pudo crear el canal');
      }
    });
  }
}