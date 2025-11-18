import { Component } from '@angular/core';
import { DemoLayout } from "../../layout/demo-layout/demo-layout";
import { D1Reactive } from "./d1-reactive/d1-reactive";
import { D1Signal } from "./d1-signal/d1-signal";

@Component({
  selector: 'app-d1-basic-form',
  imports: [DemoLayout, D1Reactive, D1Signal],
  templateUrl: './d1-basic-form.html',
  styleUrl: './d1-basic-form.scss',
})
export default class D1BasicForm {

}
