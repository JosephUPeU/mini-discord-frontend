import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCanalesComponent } from "../lista-canales/lista-canales.component";
import { ListaMiembrosComponent } from '../lista-miembros/lista-miembros.component';
import { ChatComponent } from "../../mensajes/chat/chat.component";

// Aquí importaremos más componentes cuando estén listos
@Component({
  selector: 'app-vista-servidor',
  standalone: true,
  imports: [CommonModule, ListaCanalesComponent, ChatComponent, ListaMiembrosComponent],
  templateUrl: './vista-servidor.component.html',
  styleUrls: ['./vista-servidor.component.css']
})
export class VistaServidorComponent {}
