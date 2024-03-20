import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AddRecipePageComponent } from './recipe/add-recipe-page/add-recipe-page.component';

const routes: Routes = [
    { path: 'home', component: HomepageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'recipe/new', component: AddRecipePageComponent },

    // { path: 'recipe/:id', component: HeroDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
