import {Component, OnDestroy, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

import {RepositoriesService} from './repositories.service';
import {RepositoriesSearchRequest} from './repositories.model';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  repositories: RepositoriesSearchRequest;
  name: string;
  pageIndex: number;

  constructor(private repositoriesService: RepositoriesService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('repositoriesName') || '';
    this.pageIndex = +localStorage.getItem('repositoriesPage') || 0;
    this.find();
  }

  changeName(): void {
    localStorage.setItem('repositoriesName', this.name);
    this.pageIndex = 0;
    this.find();
  }

  changePage($event: PageEvent): void {
    this.pageIndex = $event.pageIndex;
    localStorage.setItem('repositoriesPage', this.pageIndex.toString());
    this.find();
  }

  private find(): void {
    if (!this.name) {
      this.repositories = null;
      return;
    }
    this.repositoriesService.getRepositories(this.name, this.pageIndex + 1)
      .pipe(takeUntil(this.destroy$))
      .subscribe(repRequest => this.repositories = repRequest);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
