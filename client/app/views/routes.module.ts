import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MenuService } from '../core/menu/menu.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './elements/dropdown/dropdown.component';

import { SharedModule } from '../shared/shared.module';

import appMenu from './menu';
import appRoutes from './routes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        HomeComponent,
        NotFoundComponent,
        DropdownComponent,
    ],
    exports: [
        RouterModule,
        HomeComponent,
        NotFoundComponent,
        DropdownComponent,
    ]
})

export class RoutesModule {
    constructor(private menu: MenuService) {
        menu.addMenu(appMenu);
    }
}
