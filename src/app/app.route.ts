import { Routes } from '@angular/router';
import { ColorgeneratorComponent } from './colorgenerator/colorgenerator.component';

export const appRoutes: Routes = [
    { path: 'colorgenerator', component: ColorgeneratorComponent },
    { path: '', redirectTo: '/colorgenerator', pathMatch: 'full' }

 ];
