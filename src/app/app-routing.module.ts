import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCadreComponent } from './menu-cadre/menu-cadre.component';
import { InfoPersoComponent } from './info-perso/info-perso.component';
import { GestionCongeComponent } from './gestion-conge/gestion-conge.component';
import { GestionDemandeComponent } from './gestion-demandes/gestion-demande.component';
import { MenuResponsableComponent } from './menu-responsable/menu-responsable.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MenuRHComponent } from './menu-rh/menu-rh.component';
import { JourferieComponent } from './jourferie/jourferie.component';
import { CongeCadreComponent } from './conge-cadre/conge-cadre.component';
import { AjoutjourferieComponent } from './ajoutjourferie/ajoutjourferie.component';
import { NouveaucongeComponent } from './nouveauconge/nouveauconge.component';
import { RepriseComponent } from './reprise/reprise.component';

const routes: Routes = [
  {path : "help", component : HelpComponent},
  {path : "menucadre", component: MenuCadreComponent},
  {path : "menuresponsable", component: MenuResponsableComponent},
  {path : "menurh", component: MenuRHComponent},
  {path : "infoperso", component: InfoPersoComponent},
  {path : "gestionconge", component: GestionCongeComponent},
  {path : "gestiondemandes", component: GestionDemandeComponent},
  {path : "jourferie", component: JourferieComponent},
  {path : "ajoutjourferie", component: AjoutjourferieComponent},
  {path : "login", component : LoginComponent},
  {path : "menu", component: MenuComponent},
  {path : "congecadre", component: CongeCadreComponent},
  {path : "nouveauconge", component: NouveaucongeComponent},
  {path : "reprise", component: RepriseComponent},
  {path : '**', component :MenuComponent }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
