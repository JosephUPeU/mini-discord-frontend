import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ServidorService } from '../../core/services/servidor.service';
import { Servidor } from '../../models/servidor.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titulo = 'Mensajes Directos';
  icono = 'assets/icons/mensajes.svg';

  constructor(private router: Router, private servidorService: ServidorService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.actualizarHeader();
      });
  }

  private actualizarHeader(): void {
    const url = this.router.url;
    if (url.startsWith('/servidores/')) {
      const id = url.split('/')[2];
      const servidor = this.servidorService.obtenerServidor(id);
      this.titulo = servidor?.nombre ?? 'Servidor';
      this.icono = servidor?.icono ?? 'assets/icons/servidor-default.svg';
    } else {
      this.titulo = 'Mensajes Directos';
      this.icono = 'assets/icons/mensajes.svg';
    }
  }
}
