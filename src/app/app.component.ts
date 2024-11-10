import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component'; // Importando o MainPageComponent
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent], //Também necessario importar o MainPage dentro do componente.
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LojaFH';
}
