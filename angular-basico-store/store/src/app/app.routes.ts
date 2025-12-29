import { Routes } from '@angular/router';
import { About } from './domains/info/pages/about/about';
import { List } from './domains/products/pages/list/list';
import { NotFound } from './domains/info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {      
                path: '',
                component: List
            },
            {
                path: 'about',
                component: About
            },
        ]
    },
    {
        path: '**',
        component: NotFound
    },
];