import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './dev.component';
import { ButtonComponent } from './examples/button/button.component';
import { CardComponent } from './examples/card/card.component';
import { TableDetailComponent } from './examples/table-detail/table-detail.component';
import { TableComponent } from './examples/table/table.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
    path: '',
    component: DevComponent,
    children: [
      { path: 'get-started', component: GetStartedComponent },
      { path: 'examples/button', component: ButtonComponent },
      { path: 'examples/card', component: CardComponent },
      {
        path: 'examples/table',
        component: TableComponent,
        children: [{ path: ':id', component: TableDetailComponent }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevRoutingModule {}
