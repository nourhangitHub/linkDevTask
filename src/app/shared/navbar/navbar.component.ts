import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  shearchIconIsClicked: boolean = false;
  dropdownIsopen : boolean = true;
  sideMenuIsOpen : boolean = false;
  isOpen: boolean = false;
  @ViewChild('sideMenu',{static: false}) sideMenu!: ElementRef ;
  constructor() { }

  ngOnInit(): void {
  }
  handelSearchInput(){
    this.shearchIconIsClicked = !this.shearchIconIsClicked;
  }
  toggle(){
    this.isOpen = !this.isOpen;
  }
  toggleDropdown(){
    this.dropdownIsopen = !this.dropdownIsopen;
  }
  toggleSideMenu(){
    this.sideMenuIsOpen = !this.sideMenuIsOpen;
    if(this.sideMenuIsOpen){
      this.sideMenu.nativeElement.classList.add('open-sideMenu');
      this.sideMenu.nativeElement.classList.remove('close-sideMenu');
    }else{
      this.sideMenu.nativeElement.classList.add('close-sideMenu');
      this.sideMenu.nativeElement.classList.remove('open-sideMenu');
    }
  }

}
