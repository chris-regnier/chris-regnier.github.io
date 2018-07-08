import { BrowserModule                                                         } from '@angular/platform-browser';
import { NgModule                                                              } from '@angular/core';

import { AppComponent                                                          } from './app.component';
import { HeaderComponent                                                       } from './header/header.component';
import { ExperienceComponent                                                   } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { LinkifyPipe } from './linkify.pipe';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    LinkifyPipe,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
