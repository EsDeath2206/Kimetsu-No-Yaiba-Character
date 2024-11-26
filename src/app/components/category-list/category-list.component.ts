import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: string[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.categories = this.characterService.getAllCategories();
  }
}
