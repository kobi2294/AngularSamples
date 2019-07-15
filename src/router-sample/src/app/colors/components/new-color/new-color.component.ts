import { DialogService } from './../../../services/dialog.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from 'src/app/state/services/state.service';
import { ColorModel } from 'src/app/state/model/color.model';
import { Router } from '@angular/router';
import { CanLeave } from 'src/app/guards/can-leave-page.guard';

@Component({
  selector: 'app-new-color',
  templateUrl: './new-color.component.html',
  styleUrls: ['./new-color.component.css']
})
export class NewColorComponent implements OnInit, CanLeave {
  form: FormGroup

  constructor(
    private fb: FormBuilder, 
    private state: StateService, 
    private router: Router, 
    private dialog: DialogService) { }

    async canLeave(): Promise<boolean> {
      if (this.form.pristine) return true;
      return await this.dialog.confirm('Leave and lose unsaved changes?');
    }

    
  initForm() {
    this.form = this.fb.group({
      displayName: ['', Validators.required], 
      code: ['', Validators.required]
    })
  }

  async save() {
    if (this.form.valid) {
      const color = <ColorModel>this.form.value;
      this.form.reset();
      await this.state.addColor(color);
    }
    this.router.navigate(['colors']);
  }

  ngOnInit() {
    this.initForm();
  }
  


}
