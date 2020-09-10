import { Component, OnInit, Input, Output } from '@angular/core';
import { SchichtTO } from '../TOs/SchichtTO';
import { WindelschichtService } from '../services/windelschicht.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-control-content',
  templateUrl: './control-content.component.html',
  styleUrls: ['./control-content.component.css']
})
export class ControlContentComponent implements OnInit {

  @Input() post: SchichtTO;
  // @Output() result = new EventEmitter();
  constructor(private windelschichtService: WindelschichtService) { }



  ngOnInit() {
  }

}
