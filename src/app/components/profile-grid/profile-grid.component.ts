import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { IComic, ISeries } from 'src/app/utils/Interfaces/IMarvelApi';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.scss']
})
export class ProfileGridComponent {
  @Input() data: Array<IComic | ISeries> = [];
  @Input() multipleLimite: number = 0;

  constructor(
    public utilsService: UtilsService
  ) { }
}
