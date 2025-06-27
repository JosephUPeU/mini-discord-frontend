import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule]
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  mensaje = '';
  error = '';

  constructor(private auth: AuthService) {}

  onRegister(): void {
    this.auth.register(this.username, this.email, this.password).subscribe({
      next: res => {
        this.mensaje = res.message;
        this.error = '';
      },
      error: err => {
        this.error = err.message;
        this.mensaje = '';
      }
    });
  }
}