import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Contributor} from '../../repositories.model';
import {RepositoriesService} from '../../repositories.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  @Input() fullName: string;
  contributors$: Observable<Contributor[]>;
  displayedColumns: string[] = ['avatar_url', 'login', 'contributions'];

  constructor(private repositoriesService: RepositoriesService) {
  }

  ngOnInit(): void {
    this.contributors$ = this.repositoriesService.getContributors(this.fullName);
  }

}
