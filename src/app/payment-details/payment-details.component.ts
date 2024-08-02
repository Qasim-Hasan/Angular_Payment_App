import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../services/payment-detail.model';
import { PaymentDetailService } from '../services/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service: PaymentDetailService){}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  //onDelete(id: number) {
   // if (confirm('Are you sure to delete this record?'))
    //  this.service.deletePaymentDetail(id)
   //     .subscribe({
    //     next: res => {
    //        this.service.list = res as PaymentDetail[]
         //   this.toastr.error('Deleted successfully', 'Payment Detail Register')
   //       },
 //         error: err => { console.log(err) }
  //      })
 // }

}
