import { Menu } from './../../../interfaces/menu';
import { MenuService } from './../../../services/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
menu: Menu[] =[];
  constructor( private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargameny()
  }

cargameny(){
  this._menuService.getMenu().subscribe(data=> {
    console.log(data);
    this.menu = data;
  })
}

}
