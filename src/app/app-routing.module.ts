import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RepositoriesComponent} from './repositories/repositories.component';
import {RepositoryComponent} from './repositories/repository/repository.component';


const routes: Routes = [
  {path: 'repositories', component: RepositoriesComponent},
  {path: 'repositories/:id', component: RepositoryComponent},
  {path: '**', redirectTo: 'repositories'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
