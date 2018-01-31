/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*Router file: contains urls for all the pages of the app*/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

/* array of page URLs */
const appRoutes: Routes = [{path:'',
                            component: WelcomeComponent},
                           {path:'experience',
                            component: ExperienceComponent},
						   {path:'contact',
						   component: ContactComponent}
						   ];

/* export routes to all the application */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

