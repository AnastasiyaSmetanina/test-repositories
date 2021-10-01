import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Languages} from '../../repositories.model';
import {RepositoriesService} from '../../repositories.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  @Input() fullName: string;
  languages$: Observable<Languages>;

  constructor(private repositoriesService: RepositoriesService) { }

  ngOnInit(): void {
    this.languages$ = this.repositoriesService.getLanguages(this.fullName);
  }

}
