import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IOptions } from 'src/app/utils/Interfaces/IOptions';

@Component({
  selector: 'app-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent {
  @Input() options: any;
  @Input() active: string = '';
  @Output() onSelect: EventEmitter<IOptions> = new EventEmitter();

  constructor() { }
}
