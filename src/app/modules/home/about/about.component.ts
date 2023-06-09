import { Component, OnInit } from '@angular/core';

interface Experience {
  title: string,
  company: string,
  date: string,
  taskAssigned: string[],
  tools: string[],
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  profileImg = './assets/images/profile.JPG';
  techtools: string[] = [
    "Angular",
    "Angular Material",
    "React",
    "Styled Components",
    "TailwindCSS",
    "Bootstrap",
    "Jquery",
    "Javascript",
    "Laravel",
    "Gulp",
    "Vite",
    "Git & Github"
  ];

  experiencesList: Experience[] = [
    {
      title: "CSS Designer/Frontend Developer",
      company: "Miracle Interface",
      date: "December 2021 - Present",
      taskAssigned: [
        "Work with fullstack developers, with framework such as Laravel and Angular and help maintain app design, responsivness, accessibility and overall flow.",
        "Update exisiting application design if deprecated.",
        "Solve UI design and accessibily problems in multiple devices and browsers.",
        "Test out potential libraries before implementing in a project",
        "Take part in design decision making with other designers and developers",
      ],
      tools: ["SCSS", "Bootstrap", "Gulp", "Javascript", "Jquery", "Angular Matrial", "Angular", "Laravel"]
    },
    {
      title: "Jr CSS Designer",
      company: "Miracle Interface",
      date: "June 2020 - November 2021",
      taskAssigned: [
        "Convert figma or Adobe XD designs into HTML,CSS,Javascript code for rapid prototyping",
        "Add or update stylesheets in existing or new projects",
      ],
      tools: ["SCSS", "Bootstrap", "Gulp", "Javascript", "Jquery", "Angular Matrial"],
    },

    {
      title: "Graphics Designer",
      company: "Miracle Interface",
      date: "November 2018 - May 2020",
      taskAssigned: [
        "Convert rough draft designs into digital designs for printing or digital use",
        "Update or create new templates of reoccuring designs",
        "Enhance images to be used in webpages",
      ],
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
    },

  ]


  ngOnInit(): void {
  }

}
