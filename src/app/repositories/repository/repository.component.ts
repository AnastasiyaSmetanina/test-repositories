import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {Repository} from '../repositories.model';
import {RepositoriesService} from '../repositories.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  repository$: Observable<Repository>;

  constructor(public location: Location,
              private route: ActivatedRoute,
              private repositoriesService: RepositoriesService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.repository$ = this.repositoriesService.getRepository(id);
  }

}
