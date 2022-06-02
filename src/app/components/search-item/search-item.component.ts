import { Component, EventEmitter, Input, Output } from '@angular/core';

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
