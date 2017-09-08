//importar modulos neceasrios para craer modulos
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

// componentes
import { GuardarEmailComponent} from './components/guardar-email/guardar.email.component';
import { MostrarEmailComponent} from './components/mostrar-email/mostrar.email.component';
import { MainEmailComponent} from './components/main-email/main.email.component';

//decorador
@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    GuardarEmailComponent,
    MostrarEmailComponent,
    MainEmailComponent
  ],
  exports: [MainEmailComponent]
})
export class ModuloemailModule {

}




