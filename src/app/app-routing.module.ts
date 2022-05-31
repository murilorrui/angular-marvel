import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './page/characters/characters.component';
import { ProfileComponent } from './page/profile/profile.component';
import { SearchComponent } from './page/search/search.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'search', component: SearchComponent },
  { path: 'profile/:type/:id', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
