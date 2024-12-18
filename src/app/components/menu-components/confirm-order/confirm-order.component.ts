import {Component, Inject} from '@angular/core';
import {DecimalPipe, NgForOf} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderMenu} from '../../../interface/order-menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe
  ],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.css'
})
export class ConfirmOrderComponent {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ConfirmOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderMenus: OrderMenu[], totalPrice: number }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);

  }

}
