import {OrgChartSvg} from "orgchart.svg";

export class App {
  message = 'Hello World!';
  
  constructor() {
      
  }
  
  attached() {
      let orgchart = new OrgChartSvg(null);
  }
  
}


