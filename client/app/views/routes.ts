import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DropdownComponent } from './elements/dropdown/dropdown.component';

import { AuthGuardLogin } from '../services/auth-guard-login.service';
import { AuthGuardAdmin } from '../services/auth-guard-admin.service';


const routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'notfound', component: NotFoundComponent },
    {
        path: 'elements',
        children: [
            { path: 'dropdown', component: DropdownComponent }
        ]
    },
    { path: '**', redirectTo: '/notfound' },
    // { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
    // { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  
]

export default routes;
