import { Component, OnInit } from '@angular/core';

interface NavLink {
  link: string,
  icon: string,
  labelText: string,
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {



  navlinks: NavLink[] = [
    {
      link: "/home/main",
      icon: "home",
      labelText: "Home"
    },
    {
      link: "/home/about",
      icon: "person",
      labelText: "About"
    },
    {
      link: "/home/projects",
      icon: "business_center",
      labelText: "Projects"
    },
    {
      link: "/home/resources",
      icon: "file_copy",
      labelText: "Resources"
    },
    {
      link: "/home/contact",
      icon: "drafts",
      labelText: "Contact"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
