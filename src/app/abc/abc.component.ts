
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './abc.component.html',
  styleUrl: './abc.component.css'
})
export class AbcComponent {
  value:string;

  onChange(){
    console.log("value",this.value)
  }

}
