import { Component, OnInit } from '@angular/core';
import { CoolDudeComponent } from './../../cvtemplates/cooldude/cooldude.component'


@Component({
    selector: 'app-view-cv',
    templateUrl: './viewcv.component.html'
})
export class ViewCVComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        if(this.checkCVTemplate()) {
            require("style-loader!./../../../assets/cvstyles/style1.css");
          } else {
            require("style-loader!./../../../assets/cvstyles/style2.css");
          }
    }

    checkCVTemplate() {
        return true;
    }
}
