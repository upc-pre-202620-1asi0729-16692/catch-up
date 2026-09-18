import {Component, inject, input} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {Article} from '../../../domain/model/article.entity';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardTitle
} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {DatePipe} from '@angular/common';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardAvatar,
    MatCardTitle,
    MatCardImage,
    TranslatePipe,
    DatePipe,
    MatButton,
    MatIconButton,
    MatIcon
  ],
  selector: 'app-article-item',
  styleUrl: './article-item.css',
  templateUrl: './article-item.html',
})
export class ArticleItem {
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  article = input.required<Article>();

  async shareArticle() {

  }

  async showSourceSummary() {

  }
}
