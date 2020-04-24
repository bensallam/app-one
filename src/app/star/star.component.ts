import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit {

  @Input('is-emp') isSelected: boolean = true;
  @Output('change') click = new EventEmitter();

  onclickStar() {
    this.isSelected = !this.isSelected;
    this.click.emit({newStat: this.isSelected});
  }
  constructor() { }

  ngOnInit() {
  }

}
