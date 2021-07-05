import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './shared/base/base.component';

const routes: Routes = [
 {
  path: '',
  component: BaseComponent,
  children: [ {
    path: 'Home',
    loadChildren: () => import('../app/views/anymouns/anymouns.module').then(m => m.AnymounsModule)
  },
  {
    path:'',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
]
 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
