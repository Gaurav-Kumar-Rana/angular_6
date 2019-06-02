import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MyfirstcompComponent } from './myfirstcomp/myfirstcomp.component';
import { UnderscoreRemoverPipe } from './underscoreremover.pipe';
import { DemopipePipe } from './demopipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcompComponent,
    UnderscoreRemoverPipe,
    DemopipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
