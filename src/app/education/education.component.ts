import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

    schools = [
        {
            institution: "Lafayette College"
            , city: "Easton"
            , state: "PA"
            , startDate: "August, 2011"
            , endDate: "May, 2014"
            , tagline: "BS Neuroscience; Cum Laude, Honors, Marquis Scholar"
            , roles: [
                {
                    title: "Thesis"
                    , description: "The effect of reading literature of verbal and visuospatial divergent thinking."
                }
            ]
        }
    ];
    constructor() { }

    ngOnInit() {
    }

}
