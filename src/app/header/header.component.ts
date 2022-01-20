import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  frenchFlag = 'assets/images/french-flag.png';
  englishFlag = 'assets/images/EnFlag.png';

  language = 'fr';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.language);
  }

  ngOnInit(): void {
  }

  changeLanguage(): void{
    if(this.language === 'fr'){
      this.language = 'en';
    }else{
      this.language = 'fr';
    }
    this.translate.use(this.language);
    // this.showFr = false;
  }

}
