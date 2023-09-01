import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PersonaService } from '../../shared/services/persona.service';
import { MatDialog } from '@angular/material/dialog';
import { NewPersonaComponent } from './new-persona/new-persona.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  private categoryPersona = inject(PersonaService);
  public dialog = inject(MatDialog);
  
  ngOnInit(): void {
    
  }
  displayedColumns:string[] = ['idPersona','nombres','apellidos','identificacion','fechaNacimiento','acciones'];
    dataSoruce = new MatTableDataSource<PersonaElemnt>();
  getCategories():void{
    this.categoryPersona.getPersonas()
    .subscribe({
      next: (data)=>{
        console.log("respuesa categories: ",data)
        this.procesCategoriesResposen(data);
      },
      error: (e) => console.log("error: ",e),
      complete: ()=> console.log("info comple")
   })
  }

  savePersona():void{

  }
  procesCategoriesResposen(resp:any){
    const dataCategory:PersonaElemnt[] = [];
    if(resp.metadata[0].code="00"){
      let listCategory = resp.categoryResponse.category;
      listCategory.forEach((element:PersonaElemnt)=> {
        dataCategory.push(element);
      });
      this.dataSoruce= new MatTableDataSource<PersonaElemnt>(dataCategory);
    }
  }
  openPersonaDialog(){
    const dialogRef = this.dialog.open(NewPersonaComponent,{
      width:'450px'
    });

    dialogRef.afterClosed().subscribe({
      next: result => console.log(result)
    }
    )
  }
}

export interface PersonaElemnt{
  nombres: String,
  apellidos: String,
  identificacion: String,
  fechaNacimiento: String
}