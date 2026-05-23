import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Course } from '../course/course';
import { CourseService } from '../services/course-service';
import { CourseInterface } from '../interfaces/course-interface';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, Course],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  model: any = {};
  cover: any;
  cover_file: any;
  courses: any[] = [];

  private courseService = inject(CourseService);

  ngOnInit() {
    // this.getCourses();
  }

  async onSubmit(form: NgForm) {
    try{
      if (form.invalid) {
        console.log('Form is invalid');
        form.control.markAllAsTouched();
        return;
      }
      await this.saveCourse(form.value);
      form.resetForm();
    }catch(e){
      console.log(e);
    }

  }

 

  saveCourse(formValue: any) {
    const data:CourseInterface = {
      id: Date.now(), // unique id
      title: formValue.title,
      description: formValue.description,
      image: this.cover,
    };

    this.courseService.addCourse(data);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.cover_file = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.cover = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}
