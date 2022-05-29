import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageTemplateComponent } from './layout/page-template/page-template.component';
import { NavComponent } from './layout/nav/nav.component';
import { CharactersComponent } from './page/characters/characters.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersLoadingComponent } from './components/loadings/characters-page/characters-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageTemplateComponent,
    NavComponent,
    CharactersComponent,
    CharactersLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
