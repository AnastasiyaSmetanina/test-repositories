import {Component, Input} from '@angular/core';

import {Repository} from '../repositories.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent {

  constructor(private router: Router) {
  }

  @Input() repository: Repository;

  toRepository(): void {
    this.router.navigateByUrl(`/repositories/${this.repository.id}`);
  }

  toGithub(): void {
    window.location.href = this.repository.html_url;
    event.stopPropagation();
  }

}
