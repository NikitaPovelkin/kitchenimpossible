import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, MaterialModule, MenuComponent],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule {}
