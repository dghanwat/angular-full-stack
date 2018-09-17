import { NgModule } from '@angular/core';

import { CoolDudeComponent } from './cooldude/cooldude.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    providers: [
        
    ],
    declarations: [
        CoolDudeComponent
    ],
    exports: [
        CoolDudeComponent
    ]
})
export class CVTemplatesModule { }
