import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  gitUserName = 'ratank07';
  repoList: any = []

  constructor(private projectService: ProjectService) {

  }

  ngOnInit() {
    this.getRepos()
  }

  getRepos() {
    this.projectService.getRepoList(this.gitUserName).subscribe((data) => {
      console.log('repos data', data);
      this.repoList = data;
    })
  }

  getReposList() {
this.getRepos()
  }

}
