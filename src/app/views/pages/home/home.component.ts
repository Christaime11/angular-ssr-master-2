import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  // SEO variables
  title = 'Jeu Concours - ThéTipTop';

  modalRef: any;
  isSignedIn: any;
  finalDate = '2021-09-13T00:00:00';
  days: any;
  hours: any;
  seconds: any;
  minutes: any;
  description= "Description";

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // SEO
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({name: 'description', content: this.description});
    this.metaTagService.updateTag({property: 'og:title', content: this.title});
    this.metaTagService.updateTag({name: 'og:description', content: this.description});
    this.metaTagService.updateTag({property: 'og:image', content: '/assets/mango-bg-.jpg'});
    this.metaTagService.updateTag({property: 'og:image:alt', content: this.title});
  }


  redirect(): void {
    if (this.isSignedIn){
      this.router.navigate(['/play']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}

