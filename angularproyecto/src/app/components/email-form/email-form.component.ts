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

  constructor(private emailService: EmailService) {}

  enviar() {
    this.emailService.enviarEmail(this.email).subscribe({
      next: (res) => {
        alert('Respuesta de Laravel: ' + JSON.stringify(res));
      },
      error: (err) => {
        alert('Error: ' + JSON.stringify(err.error));
      }
    });
  }
}