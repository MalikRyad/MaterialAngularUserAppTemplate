import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/interfaces/user';






const ListUser: user[] = [
 
  {User: "malik", Username: 'Malik', Surname: 'Riad', Sexe: 'M'},
  {User: "brahimi", Username: 'Brahimi', Surname: 'Hichem', Sexe: 'M'},
  {User: "malki", Username: 'Malki', Surname: 'Abdelilah', Sexe: 'M'},
  {User: "omar", Username: 'Omar', Surname: 'bouayad', Sexe: 'M'},
 
];

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  displayedColumns: string[] = ['User', 'Username', 'Surname', 'Sexe', 'action'];
  dataSource = ListUser;

  constructor() { }

  ngOnInit(): void {
  }

}
