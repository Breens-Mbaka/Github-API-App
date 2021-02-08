import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ReposComponent } from './repos/repos.component';
import { UsernameComponent } from './username/username.component';

const routes: Routes = [
  { path: 'user', component: UsernameComponent},
  { path: 'repos', component: ReposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
