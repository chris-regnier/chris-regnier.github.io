import { Component, OnInit                                                     } from '@angular/core';
import Resume                                                                    from '../../assets/resume';

declare var System: any;
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    name : string;
    tagline: string;
    accentColor: string;
    constructor() {
        this.name = Resume.name;
        this.accentColor = Resume.accentColor;
        this.tagline = Resume.tagline;
    }

    ngOnInit() {

    }

}
