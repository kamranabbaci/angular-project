import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Strings } from '../enum/strings';
import { CourseInterface } from '../interfaces/course-interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesSubject = new BehaviorSubject<CourseInterface[]>(this.getCourses());
  courses$ = this.coursesSubject.asObservable();

  getCourses(): CourseInterface[] {
    const storedData = localStorage.getItem(Strings.STORAGE_KEY);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      return Array.isArray(parsedData) ? parsedData : [parsedData];
    }

    return [];
  }

  addCourse(course: CourseInterface) {
    const courses = this.getCourses();

    courses.push(course);

    localStorage.setItem(
      Strings.STORAGE_KEY,
      JSON.stringify(courses)
    );

    this.coursesSubject.next(courses);
  }

  deleteCourse(id: number) {
    const courses = this.getCourses();

    const updatedCourses = courses.filter(
      course => course.id !== id
    );

    localStorage.setItem(
      Strings.STORAGE_KEY,
      JSON.stringify(updatedCourses)
    );

    this.coursesSubject.next(updatedCourses);
  }
}