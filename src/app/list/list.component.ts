import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  newItem = '';
  msg = '';
  list: Array<any> = [
    {
      id: 1,
      name: 'Hero 1'
    },
    {
      id: 2,
      name: 'Hero 2'
    }
  ];

  onClickMe(e) {
    const target = this.list.find(x => x.id === e);
    const deleteMe = this.list.indexOf(target);
    this.list.splice(deleteMe, 1);
  }

  onAddList() {
    if (this.newItem.length > 0) {
      this.list.push({ name: this.newItem, id: this.list.length + 1 });
      this.newItem = '';
      return;
    }
    alert('You need to enter a new item');
  }

  constructor() {}

  ngOnInit() {}
}
