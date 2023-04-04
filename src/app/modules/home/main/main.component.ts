import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin, faInstagram, faFacebookMessenger  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  profileImg = '/assets/images/profile.JPG';
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faFacebookMessenger = faFacebookMessenger;


  ngOnInit(): void {
  }

}
