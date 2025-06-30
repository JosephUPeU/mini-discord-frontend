import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  nuevoMensaje: string = '';

  usuarioReceptor: Usuario | undefined;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.receptorId = params.get('id') ?? '';

      this.scrollAlFinal();
    });
  }

  enviarMensaje(): void {
    if (!this.nuevoMensaje.trim()) return;





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
