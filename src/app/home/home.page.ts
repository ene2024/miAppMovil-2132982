import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }

  ngOnChanges(){
    console.log("AppComponent: OnChanges");
  }

  ngOnInit(){
    console.log("AppComponent: OnInit");
  }

  ngDoCheck(){
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit(){
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("AppComponent: AfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("AppComponent: AfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("AppComponent: AfterViewChecked");
  }

  ngOnDestroy(){
    console.log("AppComponent: OnDestroy");
  }

  title: string = "Mi nueva pagina";

  verdadero: boolean = false;

  hazmeClic(): void {
    alert("Hiciste clic");
  }

  imgUrl: string = 'https://th.bing.com/th/id/R.e40a6a639b2839d751b9f710295ac7d7?rik=r%2fFTDfhgKQ3NkA&riu=http%3a%2f%2fcodinginfinite.com%2fwp-content%2fuploads%2f2019%2f05%2fmaxresdefault-1.jpg&ehk=RkNcCbLHYXXIf%2fm6EOAE%2fBOsFurN6iFpgtga58vKS4o%3d&risl=&pid=ImgRaw&r=0';



}
