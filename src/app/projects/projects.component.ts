import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    new Project("Concert Buddy", "Concert Buddy allows a user to sign up and view upcoming concerts in their city. Concerts can be saved and viewed on a separate page.This app utilizes React and Redux on the front-end and a Rails API back-end with a PostgreSQL database. It is meant to be used alongside the Concert Buddy Rails API", "../assets/img/concert-buddy-img.png", "https://www.youtube.com/watch?v=vqVIXRB8UxU", "https://github.com/racheladaw/concert-buddy-frontend", "https://github.com/racheladaw/concert-buddy-app-backend"),
    new Project("Mindless Meals", "")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
