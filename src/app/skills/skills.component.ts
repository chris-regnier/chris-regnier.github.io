import { Component, OnInit                                                     } from '@angular/core';
import Resume                                                                    from '../../assets/resume';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    skills: Array<Object>;
    skillsColor: string;
    links: Array<any>;
    constructor() {
        this.skillsColor = Resume.skillsColor;
        this.skills = Resume.skills;
        this.links = Resume.links;
    }

    ngOnInit() {
    }

}
