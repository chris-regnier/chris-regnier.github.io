import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    jobs = [
        {
            company: "Continuum Health Solutions, LLC"
            , city: "Centennial"
            , state: "CO"
            , startDate: "April, 2017"
            , endDate: "Present"
            , roles: [
                {
                    title: "Full Stack Developer"
                    , description: "Built microservice APIs with PHP+MongoDB; single page apps with Angular5/6; reporting with MariaDB and visualizations with D3.js"
                }
                , {
                    title: "DevOps Engineer"
                    , description: "Created and maintained a private intranet on three Dell PowerEdge servers,  extended with AWS, using Ubuntu, LXD, and Docker. Built custom Python utilities for CI/CD pipelines."
                }
            ]
        }
        , {
            company: "AccuMed HealthCare Research, LLC"
            , city: "Centennial"
            , state: "CO"
            , startDate: "April, 2017"
            , endDate: "Present"
            , roles: [
                {
                    title: "Contract Developer"
                    , description: "Developed data import and mapping tools for handling very large flat file databases into MySQL/InnoDB."
                }
            ]
        }
        , {
            company: "matter6"
            , city: "Centennial"
            , state: "CO"
            , startDate: "January, 2016"
            , endDate: "April, 2017"
            , roles: [
                {
                    title: "Junior Developer"
                    , description: "Responsible for fixing and improving large, legacy PHP+JavaScript codebase, and some accessory, standalone utilities."
                }
                , {
                    title: "Project Manager"
                    , description: "Create and evaluate distributed system protocols.\nDefine, spec, and document complex client projects."
                }
            ]
        }
        , {
            company: "Marrick Medical Finance"
            , city: "Centennial"
            , state: "CO"
            , startDate: "July, 2014"
            , endDate: "December, 2015"
            , roles: [
                {
                    title: "Team Lead"
                    , description: "Operations and team lead for new markets."
                }
                , {
                    title: "Underwriting"
                    , description: "Communicated with attorneys, insurance companies, and accident victims to evaluate claims for funding  medical care."
                }
            ]
        }
        , {
            company: "Newmont Mining"
            , city: "Greenwood Village"
            , state: "CO"
            , startDate: "May, 2010"
            , endDate: "August, 2012"
            , roles: [
                {
                    title: "Contractor"
                    , description: "Created, led, and integrated an in-house software testing team."
                }
                , {
                    title: "Intern"
                    , description: "Rotated between software development, geology, administration, and IT for corporate headquarters."
                }
            ]
        }

    ];
    constructor() { }

    ngOnInit() {
    }

}
