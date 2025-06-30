import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
//import { ServidorService } from '../../../core/services/servidor.service';
import { Canal } from '../../../models/canal.model';

@Component({
  selector: 'app-lista-canales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-canales.component.html',
  styleUrls: ['./lista-canales.component.css']
})
export class ListaCanalesComponent implements OnInit {
  canalesAgrupadosArray: { categoria: string; canales: Canal[] }[] = [];
  canalActivoId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
   // private servidorService: ServidorService
  ) {}

  ngOnInit(): void {
  const idServidor = this.route.snapshot.paramMap.get('id') ?? '';
  //const canales = this.servidorService.obtenerCanales(idServidor);

  const agrupados: Record<string, Canal[]> = {};
 /* canales.forEach(canal => {
    if (!agrupados[canal.categoria]) {
      agrupados[canal.categoria] = [];
    }
    agrupados[canal.categoria].push(canal);
  });

  this.canalesAgrupadosArray = Object.entries(agrupados).map(
    ([categoria, canales]) => ({ categoria, canales })
  );

  // ✅ Suscribirse a cambios de ruta para detectar canal activo
  this.route.paramMap.subscribe(params => {
    this.canalActivoId = params.get('canalId');
  });
}


  irAlCanal(canalId: string): void {
    const servidorId = this.route.snapshot.paramMap.get('id') ?? '';
    this.router.navigate([`/servidores/${servidorId}/canales/${canalId}`]);
  }*/
  }
}
