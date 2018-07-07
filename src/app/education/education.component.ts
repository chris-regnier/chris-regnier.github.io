import { Component, OnInit                                                     } from '@angular/core';
import Resume                                                                    from '../../assets/resume';

declare var System: any;
@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    educationColor: string;
    schools: Array<Object>;
    constructor() {
        this.schools = Resume.schools;
        this.educationColor = Resume.educationColor;
    }

    ngOnInit() {
    }

}
