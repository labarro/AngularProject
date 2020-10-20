import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { CrudComponent } from './crud/crud.component';
import { LazyloadingModule } from './modules/lazyloading/lazyloading.module';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    SegundoComponenteComponent,
    NgIfNgForComponent,
    CrudComponent,
  ],
  imports: [BrowserModule,AppRoutingModule,HttpClientModule, LazyloadingModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
