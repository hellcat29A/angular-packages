import { TestBed } from '@angular/core/testing';

import { FileUploaderPopupService } from './file-uploader-popup.service';

describe('FileUploaderPopupService', () => {
  let service: FileUploaderPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploaderPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
