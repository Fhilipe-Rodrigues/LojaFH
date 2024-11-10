import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';  // Certifique-se de que o caminho está correto

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,  // Definindo a rota padrão para MainPageComponent
  },
  // Posso adicionar outras rotas, conforme necessário
];
