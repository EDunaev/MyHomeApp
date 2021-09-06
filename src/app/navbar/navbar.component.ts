import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: any[] = [
    { name : 'Home', link : '/home'}, 
    { name : 'Windelschicht', link : '/windelschicht'},
    { name : 'Finances', link : '/finances'}];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.root);
    this.router.navigate([this.activeLink.link]);
    
    
    
    
  }

  onClick() {
    this.router.navigate([this.activeLink.link]);
  }

}
