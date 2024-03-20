import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Observable, combineLatest, map } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';

type NewRecipeFormGroup = FormGroup<{
    title: FormControl<string | null>;
    category: FormControl<string | null>;
    imgUrl: FormControl<string | null>;
    description: FormControl<string | null>;
}>;

@Component({
    selector: 'kitchen-add-recipe-page',
    standalone: true,
    imports: [MaterialModule, ReactiveFormsModule],
    templateUrl: './add-recipe-page.component.html',
    styleUrl: './add-recipe-page.component.scss',
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                subscriptSizing: 'dynamic',
            },
        },
    ],
})
export class AddRecipePageComponent implements OnInit {
    form: NewRecipeFormGroup;
    uploadedImageName: string;

    ngOnInit(): void {
        this.form = this.createForm();
    }

    createForm(): NewRecipeFormGroup {
        const result = new FormGroup({
            title: new FormControl<string>(''),
            category: new FormControl<string>(''),
            imgUrl: new FormControl<string>(''),
            description: new FormControl<string>(''),
        });

        return result;
    }

    onFileSelected(event: any) {
        const file: File = event.target.files[0];

        if (file) {
            this.uploadedImageName = file.name;
        }
    }
}
