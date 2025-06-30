import { Component, inject, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServidoresService } from '../../core/services/servidor.service';
import { ServidorResponse } from '../../models/servidor.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private router = inject(Router);
  private servidoresService = inject(ServidoresService);

  titulo = signal<string>(''); // texto a mostrar en el header

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.actualizarTitulo());
  }

  private actualizarTitulo(): void {
    const url = this.router.url;

    // Si está en mensajes
    if (url.startsWith('/mensajes')) {
      this.titulo.set('Mensajes Directos');
      return;
    }

    // Si está en un servidor, extraer el ID (acepta UUIDs o números)
    const match = url.match(/^\/servidores\/([^\/]+)/);
    const servidorId = match?.[1];

    if (servidorId) {
      this.servidoresService.getServidorById(servidorId).subscribe({
        next: (servidor: ServidorResponse) => this.titulo.set(servidor.nombre),
        error: () => this.titulo.set('Servidor')
      });
    } else {
      this.titulo.set('');
    }
  }
}
