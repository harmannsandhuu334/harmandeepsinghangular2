import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('harmandeepsinghangular2');


  studentId: string = 'w0833331';
  courseName: string = 'MAD 307 - Javascript Frameworks';
}
