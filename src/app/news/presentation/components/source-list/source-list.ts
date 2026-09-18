import {Component, input, output} from '@angular/core';
import {Source} from '../../../domain/model/source.entity';
import {MatNavList} from '@angular/material/list';
import {SourceItem} from '../source-item/source-item';

@Component({
  imports: [
    MatNavList,
    SourceItem
  ],
  selector: 'app-source-list',
  styleUrl: './source-list.css',
  templateUrl: './source-list.html',
})
export class SourceList {
  sources = input<Source[]>();
  sourceSelected = output<Source>();

  emitSourceSelectedEvent(source: Source) {
    this.sourceSelected.emit(source);
  }
}
