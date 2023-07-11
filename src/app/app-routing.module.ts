import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { AddUpdPersonComponent } from './people/components/add-upd-person/add-upd-person.component';

const routes: Routes = [
  {
    path:'',component:PeopleComponent},
    {
    path:'register',component:AddUpdPersonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
