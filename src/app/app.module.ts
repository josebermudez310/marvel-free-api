import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { CrearImgPipe } from './pipes/crear-img.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
    PersonajeComponent,
    CrearImgPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
