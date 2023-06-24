import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/parent_to_child/child/child.component';
import { ParentComponent } from './components/parent_to_child/parent/parent.component';
import { ChildComponent as ChildComponent2 } from './components/child_to_parent/child/child.component';
import { ParentComponent as ParentComponent2 } from './components/child_to_parent/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ChildComponent2,
    ParentComponent2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
