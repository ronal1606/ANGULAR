import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  email: string = '';
  respuesta: string = '';
  error: string = '';

  constructor(private emailService: EmailService) {}

  enviar() {
    this.respuesta = '';
    this.error = '';
    this.emailService.enviarEmail(this.email).subscribe({
      next: (res) => {
        this.respuesta = res.message || '¡Correo enviado correctamente!';
        this.email = '';
      },
      error: (err) => {
        this.error =
          err?.error?.message ||
          'Ocurrió un error. Revisa el email y vuelve a intentarlo.';
      }
    });
  }
}