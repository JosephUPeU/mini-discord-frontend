import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConversacionService } from '../../../core/services/conversacion.service';
import { Mensaje } from '../../../models/mensaje.model';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-vista-dm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vista-dm.component.html',
  styleUrls: ['./vista-dm.component.css']
})
export class VistaDmComponent implements OnInit {
  usuarioActualId: string = 'u1'; // Suplente hasta tener autenticación
  receptorId: string = '';
  mensajes: Mensaje[] = [];
  nuevoMensaje: string = '';

  usuarioReceptor: Usuario | undefined;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private conversacionService: ConversacionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.receptorId = params.get('id') ?? '';
      this.usuarioReceptor = this.conversacionService.obtenerUsuarioPorId(this.receptorId);

      const conversacion = this.conversacionService.obtenerConversacionConUsuario(
        this.usuarioActualId,
        this.receptorId
      );

      this.mensajes = conversacion ? conversacion.mensajes : [];
      this.scrollAlFinal();
    });
  }

  enviarMensaje(): void {
    if (!this.nuevoMensaje.trim()) return;

    const nuevo: Mensaje = {
      id: crypto.randomUUID(),
      canalId: this.receptorId,
      usuarioId: this.usuarioActualId,
      contenido: this.nuevoMensaje,
      fecha: new Date().toISOString(),
      timestamp: Date.now().toString()
    };

    let conversacion = this.conversacionService.obtenerConversacionConUsuario(
      this.usuarioActualId,
      this.receptorId
    );

    if (!conversacion) {
      conversacion = this.conversacionService.crearConversacion(
        this.usuarioActualId,
        this.receptorId
      );
    }

    this.conversacionService.enviarMensaje(conversacion.id, nuevo);
    this.mensajes.push(nuevo);
    this.nuevoMensaje = '';
    this.scrollAlFinal();
  }

  obtenerNombreUsuario(id: string): string {
    return this.conversacionService.obtenerUsuarioPorId(id)?.nombre ?? 'Desconocido';
  }

  private scrollAlFinal(): void {
    setTimeout(() => {
      if (this.scrollContainer) {
        const element = this.scrollContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }
    }, 100);
  }
}
