import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourse(){
    return this.http.get('http://localhost:3000/courses');
  }

  deleteCourses(id:number) {
    return this.http.delete(`http://localhost:3000/courses/${id}`);
  }
}
