import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import necessário para a navegação

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,  // Tornando o componente standalone
  imports: [RouterModule],  // Importando o RouterModule para o uso das rotas
})
export class MainPageComponent {
  // Seu código aqui
}
