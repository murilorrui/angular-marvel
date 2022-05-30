import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdown } from 'src/app/utils/Interfaces/IDropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() label: string = '';
  @Input() options: Array<IDropdown> = [];
  @Output() onSelect: EventEmitter<IDropdown> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem = (item: IDropdown) => {
    console.log(item);
    this.onSelect.emit(item);
  }
}
