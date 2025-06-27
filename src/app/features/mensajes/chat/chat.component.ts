import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  mensajes = [
    {
      id: 1,
      usuario: 'Abi',
      contenido: '¡Hola a todos!',
      hora: '10:05 AM'
    },
    {
      id: 2,
      usuario: 'Carlos',
      contenido: '¡Hola Abi! ¿Cómo va el proyecto?',
      hora: '10:06 AM'
    },
    {
      id: 3,
      usuario: 'Abi',
      contenido: 'Bastante bien, estoy trabajando en el frontend en Angular standalone 😄',
      hora: '10:07 AM'
    }
  ];
}
