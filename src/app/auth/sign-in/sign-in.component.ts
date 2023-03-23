import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public hide: boolean = true;

  ngOnInit(): void {}

  public onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
