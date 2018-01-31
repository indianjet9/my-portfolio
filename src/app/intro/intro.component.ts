import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  myName = 'Vaibhav Pandey';
  myIntro = 'I am Vaibhav Pandey ( When you are done tying you can also call me Ilu). I am a Science major who loves Designing.';
  mySubheading = 'My Interesting Story';
  myStory = 'My life always revolved around two things understanding how things work and doing something creative. Even when I pursued Electrical Engineering for my Bachelors and Masters to satisfy my first need I was always involved in creative activities from decorating walls, photography, dancing or small things like creative gift wrapping. After working as Automation Engineer for more than an year I realized the part of automation I enjoyed the most was screen designing (HMI Designing) and so I decided to pursue Web designing full time. Hope you like what you see here.';
  
  constructor() { }

  ngOnInit() {
  }

}
