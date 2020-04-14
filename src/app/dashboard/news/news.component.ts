import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  slideIndex = 2;
  constructor() { }

  ngOnInit() {
  this.showSlides(this.slideIndex);
  }

 currentSlide(n) {
  this.showSlides(this.slideIndex = n);
 }

 showSlides(n) {
  var i=0;
  console.log(n)
  console.log(typeof n)
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log(slides)
  console.log(dots)
  console.log(slides['style'])
  if (n > slides.length) {this.slideIndex = 1}    
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i]['style'].display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1]['style'].display = "flex";  
  dots[this.slideIndex-1].className += " active";
}

}
