import { MediaMatcher } from '@angular/cdk/layout';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mediaQueryMobil:MediaQueryList;
  menuNav = [
    {name: "usuarios" ,route: "user" , icon:"account_box"},
    {name: "Persona" ,route: "persona" , icon:" contacts_icon"},
    {name: "Roles" ,route: "roles" , icon:"business icon"},
    {name: "Seciones" ,route: "seciones" , icon:"timeline_icon"},
  ]
  constructor(media:MediaMatcher){
    this.mediaQueryMobil = media.matchMedia('(max-width: 600px')
  }

  ngOnInit(): void {
      
  }
}
