import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { EditorComponentComponent } from '../editor-component/editor-component.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SideNavigationComponent, EditorComponentComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {
  selectedNoteId: any;

  ngOnInit() {
    console.log('MAIN LAYOUT', this.selectedNoteId);
  }
  currentNoteId(event: any) {
    this.selectedNoteId = event;
    console.log('ID after Emitted', this.selectedNoteId);
  }
}
