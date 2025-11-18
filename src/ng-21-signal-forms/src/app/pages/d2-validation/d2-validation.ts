import { Component } from '@angular/core';
import { DemoLayout } from "../../layout/demo-layout/demo-layout";
import { D2Reactive } from "./d2-reactive/d2-reactive";
import { D2Signal } from "./d2-signal/d2-signal";

@Component({
  selector: 'app-d2-validation',
  imports: [DemoLayout, D2Reactive, D2Signal],
  templateUrl: './d2-validation.html',
  styleUrl: './d2-validation.scss',
})
export default class D2Validation {

}
