import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service'

@Component({
    selector: 'app-template-cooldude',
    templateUrl: './cooldude.component.html',
    styleUrls: ['./cooldude.component.css','./uikit.min.css','./progress.min.css']
})
export class CoolDudeComponent implements OnInit {

    constructor(public settings: SettingsService) { }

    ngOnInit() {

    }

}
