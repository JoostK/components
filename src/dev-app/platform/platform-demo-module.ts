/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {PlatformModule} from '@angular/cdk/platform';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PlatformDemo} from './platform-demo';

@NgModule({
  imports: [
    CommonModule,
    PlatformModule,
  ],
  declarations: [PlatformDemo],
})
export class PlatformDemoModule {
}
