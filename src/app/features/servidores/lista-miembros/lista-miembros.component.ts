import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
//import { ServidorService } from '../../../core/services/servidor.service';
import { Miembro } from '../../../models/miembro.model';
import { Rol } from '../../../models/rol.model';


@Component({
  selector: 'app-lista-miembros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-miembros.component.html',
  styleUrls: ['./lista-miembros.component.css']
})
export class ListaMiembrosComponent implements OnInit {
  miembros: Miembro[] = [];
  roles: Rol[] = [];

  constructor(
    private route: ActivatedRoute,
  //  private servidorService: ServidorService
  ) {}

  ngOnInit(): void {
    const idServidor = this.route.snapshot.paramMap.get('id') ?? '';
   // this.miembros = this.servidorService.obtenerMiembros(idServidor);
    //this.roles = this.servidorService.obtenerRoles(idServidor);
  }

  obtenerColorRol(rolId: string): string {
    return this.roles.find(r => r.id === rolId)?.color ?? '#ccc';
  }

  obtenerNombreRol(rolId: string): string {
    return this.roles.find(r => r.id === rolId)?.nombre ?? 'Invitado';
  }
}
