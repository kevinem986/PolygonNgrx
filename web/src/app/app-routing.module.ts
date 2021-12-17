import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './container/default-layout/default-layout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'default-layout',
    pathMatch: 'full',
  },
  {
    path: 'default-layout',
    component: DefaultLayoutComponent
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'ticker',
        loadChildren: () => import('./components/ticker/ticker.module').then(m => m.TickerModule)
      },
    ],
  },
  { path: '**', component: DefaultLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
