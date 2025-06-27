import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Servidor } from '../../models/servidor.model';
import { ServidorService } from '../../core/services/servidor.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  usuarioId = 'u1'; // Simulación temporal del usuario autenticado
  servidores: Servidor[] = [];
  servidorActivoId: string | null = null;
  enMensajesDirectos: boolean = false;

  constructor(
    private servidorService: ServidorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servidores = this.servidorService.obtenerServidoresDeUsuario(this.usuarioId);
    this.actualizarEstadoRuta();
    this.router.events.subscribe(() => this.actualizarEstadoRuta());
  }

  actualizarEstadoRuta(): void {
    const url = this.router.url;
    this.enMensajesDirectos = url.includes('/mensajes');
    const match = url.match(/\/servidores\/([^/]+)/);
    this.servidorActivoId = match ? match[1] : null;
  }

  irAMensajesDirectos(): void {
    this.router.navigate(['/mensajes', this.usuarioId]);
  }

  irAServidor(servidor: Servidor): void {
    const canalPredeterminado = servidor.canales[0];
    if (canalPredeterminado) {
      this.router.navigate(['/servidores', servidor.id, 'canales', canalPredeterminado.id]);
    }
  }

  crearServidor(): void {
    alert('Funcionalidad aún no implementada');
  }

  abreviatura(nombre: string): string {
    return nombre.slice(0, 2).toUpperCase();
  }
}
