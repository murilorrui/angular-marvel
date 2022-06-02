import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter, ICreator } from 'src/app/utils/Interfaces/IMarvelApi';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() image: string = '';
  @Output() onSelectItem: EventEmitter<number> = new EventEmitter();
  
  constructor() { }
}
