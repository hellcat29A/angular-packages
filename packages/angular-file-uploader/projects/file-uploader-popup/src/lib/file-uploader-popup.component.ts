import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Image } from '../models/types';
import { FileUploaderPopupService } from './file-uploader-popup.service';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'lib-file-uploader-popup',
  standalone: true,
  imports: [HttpClientModule, NgIf, CommonModule],
  templateUrl:'./file-uploader-popup.component.html',
  styleUrl: './file-uploader-popup.component.css'
})
export class FileUploaderPopupComponent {
  @Input() isOpened: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  @Input() images: Image[] = [];
@Output() imageSelected = new EventEmitter<Image>();
  selectedImage: Image | null = null;

  constructor(private readonly imageService: FileUploaderPopupService) {}

  ngOnInit(): void {
    this.getImages();
  }
  selectImage(image: Image) {
    if (this.selectedImage !== null && this.selectedImage.id === image.id) {
      this.selectedImage = null;
      return;
    }
    this.selectedImage = image;
  }

  confirmSelection() {
    if (this.selectedImage) {
      this.imageSelected.emit(this.selectedImage);
      this.closePopup();
    }
  }

  closePopup() {
    this.close.emit(false);
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const imageFile = input.files[0];

      // Prepare the FormData object to send to the server or Imgur
      const formData = new FormData();
      formData.append('image', imageFile, imageFile.name);

      // Add additional fields if needed
      formData.append('title', 'Image Title');
      formData.append('description', 'Image Description');

      // Now send this FormData to your backend or API
      this.imageService.addImage(formData).subscribe({
        next: (data) => {
          console.log('Image successfully uploaded:', data);
        },
        error: (err) => {
          console.error('Error uploading image:', err);
        },
      });

      console.log('Image file selected:', imageFile);
    }
  }

  deleteImage(id: string) {
    this.imageService.deleteImage(id).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {},
    });

    console.log(this.selectImage);
  }
  getImages() {
    this.imageService.getImages().subscribe({
      next: (data) => {
        console.log(data);
        this.images = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
