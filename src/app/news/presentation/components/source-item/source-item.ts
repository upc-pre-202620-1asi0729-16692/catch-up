import {Component, input, output} from '@angular/core';
import {Source} from '../../../domain/model/source.entity';
import {MatListItem, MatListItemAvatar, MatListItemLine} from '@angular/material/list';

@Component({
  imports: [
    MatListItem,
    MatListItemAvatar,
    MatListItemLine
  ],
  selector: 'app-source-item',
  styleUrl: './source-item.css',
  templateUrl: './source-item.html',
})
export class SourceItem {
  source = input.required<Source>();
  sourceSelected = output<Source>();

  emitSourceSelectedEvent() {
    this.sourceSelected.emit(this.source());
  }
}
