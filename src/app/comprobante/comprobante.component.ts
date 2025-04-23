import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comprobante',
  imports: [ReactiveFormsModule],
  templateUrl: './comprobante.component.html',
  styleUrl: './comprobante.component.css'
})
export class ComprobanteComponent {
  name = new FormControl('');

  update(){
    this.name.setValue("Cristina");
  }
}
