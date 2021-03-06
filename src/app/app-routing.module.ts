import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiComponent } from './components/pai/pai.component';
import { CrudComponent } from './crud/crud.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { CrudService } from './services/crud.service';


const routes: Routes = [
  
  { path: '', component: NgIfNgForComponent },

  { path: 'lazy', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },

  { path: 'primeiro-componente', component: DataBindingComponent },
  { path: 'segundo-componente', component: SegundoComponenteComponent },
  { path: 'teste', component: NgIfNgForComponent },
  { path: 'Pai', component: PaiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
