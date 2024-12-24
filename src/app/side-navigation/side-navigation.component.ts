import { Component, Output, EventEmitter } from '@angular/core';
import notesList from '../../assets/DB-Files/noteslist.json';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopUpComponent } from '../confirmation-pop-up/confirmation-pop-up.component';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css',
})
export class SideNavigationComponent {
  noteListData: any[] = notesList.notes;
  @Output() changeNoteId: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {
    // this.changeNoteId.emit(this.noteListData[0].id);
  }

  ngOnInit() {
    if (this.noteListData.length > 0) {
      this.selectedNote(this.noteListData[0].noteId);
    }
  }
  selectedNote(id: any) {
    console.log('IDDDDD', id);
    this.changeNoteId.emit(id);
  }

  openConfirmationDialog(noteData: any): void {
    const dialogRef = this.dialog.open(ConfirmationPopUpComponent, {
      data: { id: noteData.id, type: 'delete', noteObject: noteData },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
      } else {
      }
    });
  }
}
