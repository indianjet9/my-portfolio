import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  @Input() valHead: string;
  @Input() valDes: string;
  constructor() { }

  ngOnInit() {
  }

}
