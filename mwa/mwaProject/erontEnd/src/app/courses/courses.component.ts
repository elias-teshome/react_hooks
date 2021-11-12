
import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({

  selector: 'app-courses',
  templateUrl:'./courses.component.html'
  ,
  styles: [
  ]

})

export class CoursesComponent implements OnInit {

  course:any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {

    this.getCourse();
  }
  getCourse(){
    this.coursesService.getCourse().subscribe(res=>{
      this.course=res;
    })
  }

  deleteCourse(id:number){

    this.coursesService.deleteCourses(id).subscribe(re=>{
      this.getCourse();
    })
  }


}
