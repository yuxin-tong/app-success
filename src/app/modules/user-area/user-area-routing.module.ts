import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAreaPageComponent } from './pages/user-area-page/user-area-page.component';

const routes: Routes = [{ path: '', component: UserAreaPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAreaRoutingModule {}
