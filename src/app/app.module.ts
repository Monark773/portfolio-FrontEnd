import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-folder/header/header.component';
import { MenuComponent } from './components/header-folder/menu/menu.component';
import { BannerComponent } from './components/header-folder/banner/banner.component';
import { SobreMiSkillsComponent } from './components/sobre-mi-skills-folder/sobre-mi-skills/sobre-mi-skills.component';
import { SobreMiComponent } from './components/sobre-mi-skills-folder/sobre-mi/sobre-mi.component';
import { HardSkillsComponent } from './components/sobre-mi-skills-folder/hard-skills/hard-skills.component';
import { SoftSkillsEstudiosComponent } from './components/soft-skills-estudios-folder/soft-skills-estudios/soft-skills-estudios.component';
import { SoftSkillsComponent } from './components/soft-skills-estudios-folder/soft-skills/soft-skills.component';
import { EstudiosComponent } from './components/soft-skills-estudios-folder/estudios/estudios.component';
import { ProyectosComponent } from './components/proyectos-folder/proyectos/proyectos.component';
import { FooterComponent } from './components/footer-folder/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BannerComponent,
    SobreMiSkillsComponent,
    SobreMiComponent,
    HardSkillsComponent,
    SoftSkillsEstudiosComponent,
    SoftSkillsComponent,
    EstudiosComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
