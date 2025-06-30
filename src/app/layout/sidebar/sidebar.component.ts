import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServidoresService } from '../../core/services/servidor.service';
import { ServidorResponse, ServidorCreateRequest } from '../../models/servidor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  servidores: ServidorResponse[] = [];

  // Modal
  showModal: boolean = false;
  nombreServidor: string = '';
  descripcionServidor: string = '';
  errorServidor: string = '';
  loading: boolean = false;

  constructor(
    private servidoresService: ServidoresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarServidores();
  }

  cargarServidores(): void {
    this.servidoresService.getServidoresDelUsuario().subscribe({
      next: (data) => {
        this.servidores = data;
      },
      error: (err) => {
        console.error('[Sidebar] Error al cargar servidores:', err);
        this.servidores = [];
      },
    });
  }

  irAMensajes(): void {
    this.router.navigate(['/mensajes']);
  }

  irAServidor(id: string): void {
    this.router.navigate(['/servidores', id]);
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
    this.errorServidor = '';
    this.nombreServidor = '';
    this.descripcionServidor = '';
  }

  crearServidor(): void {
    if (!this.nombreServidor.trim()) {
      this.errorServidor = 'El nombre del servidor no puede estar vacío.';
      return;
    }

    this.loading = true;

    const request: ServidorCreateRequest = {
      nombre: this.nombreServidor.trim(),
      descripcion: this.descripcionServidor.trim(),
    };

    this.servidoresService.crearServidor(request).subscribe({
      next: (nuevoServidor) => {
        this.servidores.push(nuevoServidor); // Actualiza la lista local
        this.toggleModal();
        this.router.navigate(['/servidores', nuevoServidor.id]); // Redirige automáticamente
      },
      error: (err) => {
        console.error('[Sidebar] Error al crear servidor:', err);
        this.errorServidor = 'No se pudo crear el servidor. Intenta nuevamente.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  getIniciales(nombre: string): string {
    return nombre.trim().substring(0, 2).toUpperCase();
  }
}
