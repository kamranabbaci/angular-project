import { Component, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../interfaces/course-interface';
import { CourseService } from '../services/course-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.scss',
})
export class Course implements OnInit {

  @Input() showDelete: boolean = false;

  courses: CourseInterface[] = [];
  coursesSub!: Subscription;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.coursesSub = this.courseService.courses$.subscribe(courses => {
      this.courses = courses;
    });
  }

  deleteCourse(course: CourseInterface) {
    this.courseService.deleteCourse(course.id);
  }

  ngOnDestroy(){
    console.log('Courses on destory');
    if(this.coursesSub) {
      this.coursesSub.unsubscribe();
    }
  }
}