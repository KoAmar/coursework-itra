import {Component, ViewChild, ElementRef} from '@angular/core';
import {CommonService} from '../service/common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('addPost') addBtn: ElementRef;

  // todo: https://www.npmjs.com/package/ngx-cookie-service
  // NGX Cookie Service
  constructor(private commonService: CommonService, private router: Router) {
    if (!
      localStorage.getItem('loggedInUser')) {
      this.router.navigate(['/']);
    }

    this.commonService.postEdit_Observable.subscribe(res => {
        this.addBtn.nativeElement.click();
      }
    );

  }

  login() {

  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/']);
  }

}
