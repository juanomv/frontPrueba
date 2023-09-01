import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent  implements OnInit{
  
  public personaForm!: FormGroup;
  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.personaForm = this.fb.group({
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      identificacion:['',Validators.required],
      fechaNacimiento:['',Validators.required]
    });
  }
}
