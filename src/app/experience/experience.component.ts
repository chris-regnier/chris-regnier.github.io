import { Component, OnInit                                                     } from '@angular/core';
import Resume                                                                    from '../../assets/resume';

declare var System: any;
@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    jobs: any;
    constructor() {
        this.jobs = Resume.jobs;
    }

    ngOnInit() {
    }

}
