import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'planner',
        loadChildren: () => import('../planner/planner.module').then(m => m.PlannerPageModule)
      },
      {
        path: 'timetable',
        loadChildren: () => import('../timetable/timetable.module').then(m => m.TimetablePageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/planner',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/planner',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
