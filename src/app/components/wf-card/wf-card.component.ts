import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wf-card',
  templateUrl: './wf-card.component.html',
  styleUrls: ['./wf-card.component.scss']
})
export class WfCardComponent implements OnInit {

  @Input() _knowledge = {
    title: '',
    urlToImage:'',
    summary:'',
    content: '',
  };
  constructor() { }
  ngOnInit(): void {
  }

}
