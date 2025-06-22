import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailFormComponent } from "./components/email-form/email-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmailFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularproyecto';
}
