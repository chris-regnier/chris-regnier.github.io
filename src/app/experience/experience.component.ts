import { Component, OnInit                                                     } from '@angular/core';
import Resume                                                                    from '../../assets/resume';

declare var System: any;
@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    jobColor: string;
    jobs: any;
    links: any;
    constructor() {
        this.jobColor = Resume.jobColor;
        this.jobs = Resume.jobs;
        this.links = Resume.links;
    }

    ngOnInit() {
    }

}
