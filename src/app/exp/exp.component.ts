import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit{
  @Input() expHead: string;
  @Input() expDes: string;
  constructor() { }

  ngOnInit() {
  }

}
