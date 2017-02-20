import "snapsvg" // we need to add this import because of snapsvg declaration/module
import {OrgChartSvg} from "orgchart.svg";

export class App {
  message = 'Hello World!';
  
  constructor() {
      
  }
  
  attached() {
      let orgchart = new OrgChartSvg(null);
  }
  
}


