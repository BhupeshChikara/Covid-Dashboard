import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  screenWidth;

  @ViewChild('nav') nav: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth=window.innerWidth
    if(window.innerWidth>850)
      this.nav.nativeElement.style.display='flex'
    else
    this.nav.nativeElement.style.display='none'
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      if(this.screenWidth<851){
        this.nav.nativeElement.style.display='none'
      }
    }
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    this.screenWidth=window.innerWidth
  }

  showDropdown(){
    if(window.innerWidth<=850){
    if(this.nav.nativeElement.style.display=='flex')
    this.nav.nativeElement.style.display='none'
    else
    this.nav.nativeElement.style.display='flex'
  }
  }

}
