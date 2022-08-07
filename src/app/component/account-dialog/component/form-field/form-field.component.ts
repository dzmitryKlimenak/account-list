import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  host: {
    class: 'relative block'
  }
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() error = false;
}
