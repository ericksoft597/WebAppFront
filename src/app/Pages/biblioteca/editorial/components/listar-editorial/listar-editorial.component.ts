import { Component, OnInit } from '@angular/core';
import {CategoryGradeService} from '../../../../../data/category-grade.service';

@Component({
  selector: 'app-listar-editorial',
  templateUrl: './listar-editorial.component.html',
  styleUrls: ['./listar-editorial.component.css']
})
export class ListarEditorialComponent implements OnInit {

  constructor( protected service: CategoryGradeService) { }

  categories: any;

  ngOnInit() {
    this.service.getcategorygrades().subscribe(resp => {
      this.categories = resp;
    });
  }

}
