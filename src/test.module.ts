import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { uiModules } from './app/app-ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const modules = [
  CommonModule,
  BrowserAnimationsModule,
  RouterTestingModule,
  HttpClientTestingModule,
  uiModules,
];

export const testModuleOptions = {
  imports: modules,
  exports: modules,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
};

@NgModule(testModuleOptions)

export class TestModule { }