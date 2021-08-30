import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Meta, Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {
  title = 'Jouer - ThéTipTop';
  description = 'Description';
  playForm: FormGroup;
  isFormSubmitted: boolean;

  isSignedIn: any;
  error: any;
  popUpMessage: any;
  errors: any;
  success: any;
  lotName: any;
  lotId: any;
  modalRef: any;
  userName: any;
  UserProfile: any;

  constructor(private titleService: Title,
              private router: Router,
              private metaTagService: Meta,
  ) {
  }

  get form(): any {
    return this.playForm.controls;
  }

  ngOnInit(): void {
    // SEO
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({name: 'description', content: this.description});
    this.metaTagService.updateTag({property: 'og:title', content: this.title});
    this.metaTagService.updateTag({name: 'og:description', content: this.description});
    this.metaTagService.updateTag({property: 'og:image', content: '/assets/mango-bg-.jpg'});
    this.metaTagService.updateTag({property: 'og:image:alt', content: this.title});


    this.playForm = new FormGroup({
      numberTicket: new FormControl(null, [Validators.required])
    });
    this.isFormSubmitted = false;
  }

  onSubmit(): void {
    if (this.playForm.valid) {
      console.log('Sent');
    }
    this.isFormSubmitted = true;
  }
}
