import { SolutionService } from './../../shared/services/solution.service';
import { AccordionService } from './../../shared/services/accordion.service';
import { ToolsService } from './../../services/tools.service';
import { MockData, MockCleanData, MockSimple, MockProd } from './../../shared/mock/data.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  mockdata: any = MockCleanData;
  finaldata: any;
  
  constructor(private accordionService: AccordionService, private test: SolutionService) { }

  ngOnInit() {
    //this.finaldata = this.accordionService.mainStep(MockSimple.out);
    this.finaldata = this.accordionService.mainStep(MockProd.out);
  }
}
