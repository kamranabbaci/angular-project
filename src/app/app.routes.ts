import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { About } from './about/about';
import { Home } from './home/home';
import { Course } from './course/course';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'admin', component: Admin},
    {path: 'about', component: About},
    {path: 'courses', component: Course},
];
