/**
 * Created by song on 16/9/25.
 */
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);