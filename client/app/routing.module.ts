import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuService } from './core/menu/menu.service';

import appMenu from './views/menu';
import appRoutes from './views/routes';

@NgModule({
  imports: [ RouterModule, RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {
  constructor(private menu: MenuService) {
    menu.addMenu(appMenu);
}
}
