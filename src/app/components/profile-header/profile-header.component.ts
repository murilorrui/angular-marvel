import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() path: string = '';
  @Input() extension: string = '';
  @Input() loading: boolean = false;
  @Input() comicsTotal: number = 0;
  @Input() seriesTotal: number = 0;
  @Input() storiesTotal: number = 0;
  
  constructor(public utilsService: UtilsService) { }

  get isMobile() {
    return this.utilsService.onWindowResize() < 425;
  }
}
