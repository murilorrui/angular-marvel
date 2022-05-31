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
import { CharactersLoadingComponent } from './components/loadings/characters-loading/characters-loading.component';
import { SearchComponent } from './page/search/search.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchLoadingComponent } from './components/loadings/search-loading/search-loading.component';
import { ProfileComponent } from './page/profile/profile.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { ProfileGridComponent } from './components/profile-grid/profile-grid.component';
import { ProfileHeaderLoadingComponent } from './components/loadings/profile-header-loading/profile-header-loading.component';
import { ProfileGridLoadingComponent } from './components/loadings/profile-grid-loading/profile-grid-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageTemplateComponent,
    NavComponent,
    CharactersComponent,
    CharactersLoadingComponent,
    SearchComponent,
    DropdownComponent,
    SearchLoadingComponent,
    ProfileComponent,
    OptionsMenuComponent,
    ProfileGridComponent,
    ProfileHeaderLoadingComponent,
    ProfileGridLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
