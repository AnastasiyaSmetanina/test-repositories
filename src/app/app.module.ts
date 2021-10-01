import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgPipesModule} from 'ngx-pipes';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {RepositoryComponent} from './repositories/repository/repository.component';
import {RepositoryCardComponent} from './repositories/repository-card/repository-card.component';
import {ContributorsComponent} from './repositories/repository/contributors/contributors.component';
import {LanguagesComponent} from './repositories/repository/languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    RepositoryComponent,
    RepositoryCardComponent,
    ContributorsComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    NgPipesModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
