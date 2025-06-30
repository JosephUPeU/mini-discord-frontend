import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { LoginRequest } from '../../../models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  submit(form: NgForm) {
    if (form.invalid) return;

    this.loading = true;
    const request: LoginRequest = {
      username: this.username,
      password: this.password
    };

    this.authService.login(request).subscribe({
      next: () => this.router.navigate(['/servidores']),
      error: (err) => {
        this.error = err.message || 'Error desconocido';
        this.loading = false;
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
