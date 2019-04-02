import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ProjectsDataService, IDataItemProject } from '../../shared/projects-data-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  projectId: number;
  stageId: number;
//  project: IDataItemProject;
  selectedPath = '';

  pages = [
    {
      title: 'First Page with Tabs',
      url: '/tabs/tab1/step'
    },
    {
      title: 'Second Page blank',
      url: '/tabs/tab1/step'
    },
    {
      title: 'To Step (step)',
      url: 'step'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
//    private dataProjects: ProjectsDataService
  ) { }

  ngOnInit() {

    this.projectId = +this.activatedRoute.snapshot.paramMap.get('pid');
    this.stageId = +this.activatedRoute.snapshot.paramMap.get('gid');

    console.log('projectId: ', this.projectId);
//    this.project = this.dataProjects.getItem(this.projectId);
//    console.log('project: ', this.project);
  }

}
