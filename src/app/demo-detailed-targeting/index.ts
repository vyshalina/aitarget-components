/* tslint:disable:max-line-length */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './demo-detailed-targeting.routing';
import { DemoDetailedTargetingComponent } from './demo-detailed-targeting.component';
import { DetailedTargetingModule } from '../../lib/components/targeting/targeting-form/detailed-targeting/detailed-targeting.module';
import { AppSharedModule } from '../shared/index';
/* tslint:enable:max-line-length */

// noinspection JSUnusedGlobalSymbols
@NgModule({
  imports:      [
    AppSharedModule,
    DetailedTargetingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DemoDetailedTargetingComponent
  ]
})

export class DemoDetailedTargetingModule {
}

