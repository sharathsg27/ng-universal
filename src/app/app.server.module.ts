import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    // The AppServerModule should import the AppModule followed by the ServerModule
    AppModule,
    ServerModule,
    ModuleMapLoaderModule // -> For lazy loaded routes work
  ],
  bootstrap: [AppComponent]
})

export class AppServerModule {}
