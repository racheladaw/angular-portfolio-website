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
    new Project("Mindless Meals", "A single-page web application built with a Javascript front-end and a Rails API back- end that allows users to quickly view a recipe to cook based on an ingredient in their refrigerator", "../assets/img/mindless-meals-img.png", "https://youtu.be/NM_70nKM6OE", "https://github.com/racheladaw/rails-api-with-js-frontend-project", ""),
    new Project("Habit Tracker", "A web application built with Ruby on Rails and HTML which allows users to create goals for habits they would like to change in their life and track their completion", "../assets/img/habit-tracker-img.png", "https://youtu.be/kg6SMv52VWk", "https://github.com/racheladaw/habit-tracker-rails-app", "")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
