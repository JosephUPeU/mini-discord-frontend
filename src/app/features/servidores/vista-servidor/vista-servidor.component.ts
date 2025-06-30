// src/app/features/servidores/vista-servidor/vista-servidor.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CanalesService } from '../../../core/services/canales.service';
import { ListaCanalesComponent } from '../lista-canales/lista-canales.component';
import { ListaMiembrosComponent } from '../lista-miembros/lista-miembros.component';

@Component({
  selector: 'app-vista-servidor',
  standalone: true,
  imports: [ListaCanalesComponent, RouterOutlet, ListaMiembrosComponent], // se agregará router-outlet y lista-canales en el HTML
  templateUrl: './vista-servidor.component.html',
  styleUrls: ['./vista-servidor.component.css']
})
export class VistaServidorComponent implements OnInit {
  servidorId = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private canalesService: CanalesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.servidorId = params.get('id')!;
      const child = this.route.snapshot.firstChild;

      if (!child || !child.paramMap.get('canalId')) {
        this.redirigirAlPrimerCanal();
      }
    });
  }

  redirigirAlPrimerCanal(): void {
    this.canalesService.getCanalesPorServidorId(this.servidorId).subscribe({
      next: (canales) => {
        if (canales.length > 0) {
          this.router.navigate([
            '/servidores',
            this.servidorId,
            'canal',
            canales[0].id
          ]);
        }
      },
      error: () => {
        console.warn('No se pudieron obtener los canales del servidor.');
      }
    });
  }
} 
