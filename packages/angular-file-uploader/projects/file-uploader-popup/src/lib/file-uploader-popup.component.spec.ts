import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderPopupComponent } from './file-uploader-popup.component';

describe('FileUploaderPopupComponent', () => {
  let component: FileUploaderPopupComponent;
  let fixture: ComponentFixture<FileUploaderPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploaderPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploaderPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
