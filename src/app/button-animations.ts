import { trigger, style, animate, transition } from '@angular/animations';

export const buttonAnimation = trigger('buttonAnimation', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    animate('0.3s', style({ transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate('0.3s', style({ transform: 'scale(0)' })),
  ]),
]);
