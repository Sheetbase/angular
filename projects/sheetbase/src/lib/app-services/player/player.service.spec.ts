import { TestBed } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { ToastController } from '@ionic/angular';

class MockedToastController {}

describe('PlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ToastController,
        useValue: new MockedToastController(),
      }
    ],
  }));

  it('should be created', () => {
    const service: PlayerService = TestBed.get(PlayerService);
    expect(service).toBeTruthy();
  });
});
