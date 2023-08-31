import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuRHComponent } from './menu-rh/menu-rh.component';
import { MenuResponsableComponent } from './menu-responsable/menu-responsable.component';
import { MenuCadreComponent } from './menu-cadre/menu-cadre.component';
import { InfoPersoComponent } from './info-perso/info-perso.component';
import { GestionCongeComponent } from './gestion-conge/gestion-conge.component';
import { GestionDemandeComponent } from './gestion-demandes/gestion-demande.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu/menu.component';
import { JourferieComponent } from './jourferie/jourferie.component';
import { CongeCadreComponent } from './conge-cadre/conge-cadre.component';
import { FormsModule } from '@angular/forms';
import { AjoutjourferieComponent } from './ajoutjourferie/ajoutjourferie.component' ;
import { JourferieService } from 'src/app/services/jourferie.service';
import { NouveaucongeComponent } from './nouveauconge/nouveauconge.component';
import { RepriseComponent } from './reprise/reprise.component';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import { environment } from 'src/environments/environment.development';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuRHComponent,
    MenuResponsableComponent,
    MenuCadreComponent,
    InfoPersoComponent,
    GestionCongeComponent,
    GestionDemandeComponent,
    HelpComponent,
    MenuComponent,
    JourferieComponent,
    CongeCadreComponent,
    AjoutjourferieComponent,
    NouveaucongeComponent,
    RepriseComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [
    JourferieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
