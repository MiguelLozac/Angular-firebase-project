import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core'
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';



const appRoutes: Routes = [
    { path: '' , redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },
    { path: '**' , redirectTo: '/recipes' },

  ]; 

@NgModule({ 
    imports: [RouterModule.forRoot(appRoutes)], 
    exports: [RouterModule]  
})

  export class AppRoutingModule {

}
