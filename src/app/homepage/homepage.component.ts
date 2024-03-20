import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { food } from 'src/assets/content/content';
import { Router } from '@angular/router';

@Component({
    selector: 'app-homepage',
    standalone: true,
    imports: [MaterialModule],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
    sidenavOpen: boolean = false;
    foodDescription = food;

    constructor(private router: Router) {}

    addRecipe(): void {
        console.log('pressed');
        this.router.navigateByUrl('/recipe/new');
    }
}
