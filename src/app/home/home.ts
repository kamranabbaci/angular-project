import { Component } from '@angular/core';
import { Course } from '../course/course';
import { Strings } from '../enum/strings';

@Component({
  selector: 'app-home',
  imports: [Course],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  courses:any[]=[];

  // ngOnInit(){
  //   this.getCourses();
  // }

  // getCourses() {
  //     const data = localStorage.getItem(Strings.STORAGE_KEY);
  
  //     if (data) {
  //       const parsedData = JSON.parse(data);
  //       this.courses = Array.isArray(parsedData) ? parsedData : [parsedData];
  //     } else {
  //       this.courses = [];
  //     }
  //   }
}
