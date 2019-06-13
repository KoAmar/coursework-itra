import {Component, OnInit} from '@angular/core';
import {
  MatDialog
} from '@angular/material';
import {LoginDialogComponent} from './login-dialog/login-dialog.component';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loginForm: FormGroup;
  public darkTheme: boolean;

  constructor(public dialog: MatDialog) {
    this.loginForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    });
    this.darkTheme = false;
  }

  ngOnInit() {
  }

  openModalLoginForm() {
    this.dialog.open(LoginDialogComponent, {data: {name: 'pavlik'}});
  }

  save() {
    console.log(this.loginForm);
  }

  onSetTheme() {
    this.darkTheme = !this.darkTheme;
    console.log(this.darkTheme);
  }

}
