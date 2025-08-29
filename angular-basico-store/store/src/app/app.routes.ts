import { Routes } from '@angular/router';
import { About } from './domains/info/pages/about/about';
import { List } from './domains/products/pages/list/list';

export const routes: Routes = [
    {
        path: '',
        component: List
    },
    {
        path: 'about',
        component: About
    },
];
