import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  name = 'John Jack';
  profession = 'Developer';
  email = 'ndfk@example.com';
  personal_image = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  

  projectList: Project[];

  constructor(){
    this.projectList = [
      new Project("project 1", "UI/UX"),
      new Project("project 2",  "Front-End"),
      new Project("project 3",  "Back-End"),
      new Project("Project 4",  "App developemnt with React"),
      
    ]
  }

  ngOnInit(): void {}

}
