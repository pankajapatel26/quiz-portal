import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : any[] ;

  constructor(private router: Router, private service: QuizService) { }

  ngOnInit() {
    this.getCategories();
  }


  getCategories() {
    this.service.getCategories().subscribe( data => {
        this.categories = data;
        //this.dataSource.data = this.categories;
    },
    error => {
      console.log(error)
    });
  }

}
