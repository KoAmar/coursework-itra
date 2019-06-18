import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CallDialogService} from '../../../services/call-dialog.service';

@Component({
  selector: 'app-confirmed-page',
  templateUrl: './confirmed-page.component.html',
  styleUrls: ['./confirmed-page.component.scss']
})
export class ConfirmedPageComponent implements OnInit {

  constructor(private router: Router,
              private messegeBox: CallDialogService) {
    messegeBox.showMessageBox('Now you can login on the website');
    this.router.navigate(['/']);
  }


  ngOnInit() {
  }

}
