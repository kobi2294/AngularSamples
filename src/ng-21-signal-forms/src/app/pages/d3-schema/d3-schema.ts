import { Component } from '@angular/core';
import { D3Reactive } from "./d3-reactive/d3-reactive";
import { D3Signal } from "./d3-signal/d3-signal";
import { DemoLayout } from "../../layout/demo-layout/demo-layout";

@Component({
  selector: 'app-d3-schema',
  imports: [D3Reactive, D3Signal, DemoLayout],
  templateUrl: './d3-schema.html',
  styleUrl: './d3-schema.scss',
})
export default class D3Schema {

}
