// src/app/features/mensajes/chat/chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MensajesService } from '../../../core/services/mensajes.service';
import {
  MensajeCanalResponse,
  MensajeCanalRequest,
  ReaccionCanalRequest
} from '../../../models/mensaje.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  canalId: string = '';
  mensajes: MensajeCanalResponse[] = [];
  nuevoMensaje: string = '';
  cargando = false;
  usuarioActual = '';

  constructor(
    private route: ActivatedRoute,
    private mensajesService: MensajesService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.usuarioActual = payload.sub;
    }

    this.route.paramMap.subscribe(params => {
      this.canalId = params.get('canalId')!;
      this.cargarMensajes();
    });
  }

  cargarMensajes(): void {
    this.cargando = true;
    this.mensajesService.getMensajesPorCanal(this.canalId).subscribe({
      next: (res) => {
        this.mensajes = res;
        this.cargando = false;
      },
      error: () => {
        this.mensajes = [];
        this.cargando = false;
      }
    });
  }

  enviarMensaje(): void {
    if (!this.nuevoMensaje.trim()) return;

    const mensaje: MensajeCanalRequest = {
      contenido: this.nuevoMensaje
    };

    this.mensajesService.enviarMensaje(this.canalId, mensaje).subscribe({
      next: (nuevo) => {
        this.mensajes.push(nuevo);
        this.nuevoMensaje = '';
      },
      error: () => alert('Error al enviar el mensaje')
    });
  }

  reaccionar(mensajeId: string, emoji: string): void {
    const reaccion: ReaccionCanalRequest = {
      mensajeId,
      canalId: this.canalId,
      emoji
    };

    this.mensajesService.reaccionar(reaccion).subscribe({
      next: (actualizado) => {
        const index = this.mensajes.findIndex(m => m.id === mensajeId);
        if (index !== -1) {
          this.mensajes[index] = actualizado;
        }
      },
      error: () => alert('Error al reaccionar al mensaje')
    });
  }
}
