import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import NoteListData from '../../assets/DB-Files/noteslist.json';
import DOMPurify from 'dompurify';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopUpComponent } from '../confirmation-pop-up/confirmation-pop-up.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor-component.component.html',
  styleUrl: './editor-component.component.css',
})
export class EditorComponentComponent {
  @Input() selectedNote!: string;
  noteListData: any;
  noteListMasterData: any = NoteListData.notes;
  savedSelection: Range | null = null;
  selectedText: any;
  saferContent!: SafeHtml;
  initialBody: any;
  initialTitle: any;
  authentication: boolean = false;
  unlockStatu: boolean = true;
  @ViewChild('textBoxDiv') textBoxDiv!: ElementRef;

  constructor(
    private render: Renderer2,
    private sanitizer: DomSanitizer,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log('SELELECTED', this.selectedNote);
    this.LoadNoteListData(this.selectedNote);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedNote']) {
      console.log('Current Value', changes['selectedNote'].currentValue);
      this.LoadNoteListData(changes['selectedNote'].currentValue);
    }
  }
  LoadNoteListData(id: any) {
    for (let item of this.noteListMasterData) {
      if (item.noteId === id) {
        console.log('SELECTED ITEM', item);
        this.noteListData = item;
      }
    }

    if (this.noteListData.encryptionStatus) {
      this.unlockStatu = false;
      const encryptDialog = this.dialog.open(ConfirmationPopUpComponent, {
        data: {
          id: this.noteListData.id,
          type: 'authenticate',
          noteObject: this.noteListData,
        },
        disableClose: true,
      });
      encryptDialog.afterClosed().subscribe((result: any) => {
        this.unlockStatu = result.value;
        console.log('UNLOCK', this.unlockStatu);
        if (result.value) {
          this.authentication = false;
          console.log('Correct Password', this.authentication, result.value);
        } else {
          this.authentication = true;
          console.log('Incorrect Password', this.authentication, result.value);
        }
      });
      console.log('Authentication Check', this.authentication);
    }
    this.createBackup();
  }

  createBackup() {
    this.initialTitle = this.noteListData.noteTitle;
    this.initialBody = this.noteListData.noteSubject;
  }

  openPasswordPopup() {
    const dialogRef = this.dialog.open(ConfirmationPopUpComponent, {
      data: {
        id: this.noteListData.noteId,
        type: 'password',
        noteObject: this.noteListData,
      },
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (result.type === 'passwordSet') {
          this.noteListData.encryptionStatus = true;
          this.noteListData.password = result.value;
        } else if (result.type === 'authenticare') {
        }
      } else {
      }
    });
  }

  saveSelection() {
    const selection = window.getSelection();
    this.selectedText = selection?.toString();
    if (selection && selection.rangeCount > 0) {
      this.savedSelection = selection.getRangeAt(0);
    }
  }

  restoreSelection() {
    const selection = window.getSelection();

    if (this.savedSelection) {
      selection?.removeAllRanges();
      selection?.addRange(this.savedSelection);
    }
  }

  changeInNoteTitle(event: any) {
    // console.log('Change Detected', event.target.value);
    this.noteListData.noteTitle = event.target.value;
  }

  // updateText(option: string) {
  //   const element = document.getElementById('textBoxDiv');
  //   const selection = window.getSelection();
  //   this.selectedText = window.getSelection()?.toString();
  //   if (selection && selection.rangeCount > 0) {
  //     console.log('VALUES');
  //     const range = selection.getRangeAt(0);
  //     const newHTML = this.textManipulation(option) || this.selectedText;
  //     console.log('NEW HTML', newHTML);
  //     range.deleteContents();
  //     range.insertNode(
  //       new DOMParser().parseFromString(newHTML, 'text/html').body.firstChild!
  //     );
  //     this.updateSelectedNote();
  //   }
  // }
  // textManipulation(option: any) {
  //   var returnVal;
  //   if (option == 'bold') {
  //     returnVal =
  //       `<span style='font-weight:600'>` + this.selectedText + `</span>`;
  //   }

  //   return returnVal;
  // }
  removeStyle(element: HTMLElement, option: string) {
    switch (option.toLowerCase()) {
      case 'bold':
        element.style.fontWeight = '';
        break;
      case 'italic':
        element.style.fontStyle = '';
        break;
      case 'underline':
        element.style.textDecoration = '';
        break;
      default:
        console.error(`Unsupported option for removing style: ${option}`);
    }

    if (element.getAttribute('style') === '') {
      const parent = element.parentNode;
      while (element.firstChild) {
        parent?.insertBefore(element.firstChild, element);
      }
      parent?.removeChild(element);
    }
  }
  updateText(option: string) {
    this.restoreSelection();
    console.log('Updated text Triggered');
    const element = document.getElementById('textBoxDiv');
    const selection = window.getSelection();

    console.log('Selected Text', this.selectedText);
    console.log('Selected Text', selection);

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      const parentElement = range.commonAncestorContainer
        .parentElement as HTMLElement;

      // console.log('Parent Element', parentElement, parentElement.nodeName);

      if (option === 'left' || option === 'right' || option === 'center') {
        // parentElement.id === 'textBoxDiv'
        if (parentElement.nodeName === 'DIV') {
          parentElement.style.textAlign = option;
        }
        if (parentElement.nodeName === 'SPAN') {
          const immediateParent = parentElement.parentElement as HTMLElement;
          immediateParent.style.textAlign = option;
        }
      }

      if (parentElement) {
        const isAlreadyStarted = this.isStyleApplied(parentElement, option);
        if (isAlreadyStarted) {
          this.removeStyle(parentElement, option);
        } else {
          const newNode = this.createStyledNode(
            option,
            this.selectedText,
            parentElement.id === 'textBoxDiv'
          );
          console.log('NEW NODE', newNode);

          if (newNode) {
            range.deleteContents();
            range.insertNode(newNode);
            const newRange = document.createRange();
            newRange.setStartAfter(newNode);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
            if (element) {
              console.log('Updated InnerHTML:', element.innerHTML);
            } else {
              console.log('Element is undefined');
            }
            this.updateSelectedNote();
          }
        }
      }
      // console.log('extractedContents', extractedContents);

      // const selectedText = extractedContents.textContent || '';
    }
  }

  isStyleApplied(element: HTMLElement, option: string): boolean {
    switch (option.toLowerCase()) {
      case 'bold':
        return (
          window.getComputedStyle(element).fontWeight === '700' ||
          element.style.fontWeight === 'bold'
        );
      case 'italic':
        return (
          window.getComputedStyle(element).fontStyle === 'italic' ||
          element.style.fontStyle === 'italic'
        );
      case 'underline':
        return (
          window
            .getComputedStyle(element)
            .textDecoration.includes('underline') ||
          element.style.textDecoration === 'underline'
        );
      default:
        return false;
    }
  }

  createStyledNode(
    option: string,
    text: string,
    condition: boolean
  ): Node | null {
    if (condition) {
    }
    const span = document.createElement('span');

    switch (option) {
      case 'bold':
        span.style.fontWeight = 'bold';
        span.textContent = text;
        break;

      case 'italic':
        span.style.fontStyle = 'italic';
        span.textContent = text;
        break;
      case 'underline':
        span.style.textDecoration = 'underline';
        span.textContent = text;
        break;
      // case 'left':
      //   span.style.textAlign = 'left';
      //   span.textContent = text;
      //   break;
      // case 'center':
      //   span.style.textAlign = 'center';
      //   span.textContent = text;
      //   break;
      // case 'right':
      //   span.style.textAlign = 'right';
      //   span.textContent = text;
      //   break;
      default:
        console.warn(`Unsupported text manipulation option: ${option}`);
        return null;
    }

    return span;
  }

  // createAlignmentStyle(option: string, text: string): Node | null {}

  updateSelectedNote() {
    const element = document.getElementById('textBoxDiv')?.innerHTML;

    // this.noteListData['noteSubject'] =
    //   '' + document.getElementById('textBoxDiv')?.innerHTML;
    // console.log('ELEMENT', element);
    // console.log(
    //   'ELEMENT1',
    //   '' + document.getElementById('textBoxDiv')?.innerHTML
    // );
  }

  saveNoteUpdates() {
    console.log('Updated Note Title', this.noteListData.noteTitle);

    const domElement = document.getElementById('textBoxDiv');
    if (domElement) {
      const purifiedHTML = DOMPurify.sanitize(domElement.innerHTML);
      this.saferContent = this.sanitizer.bypassSecurityTrustHtml(purifiedHTML);
      this.noteListData.noteSubject = this.saferContent;
    }
    // this.noteListData.noteSubject =
    //   '' + ;
  }
}
