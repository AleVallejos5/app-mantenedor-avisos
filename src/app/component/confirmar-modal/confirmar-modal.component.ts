import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
   IonIcon, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-confirmar-modal',
  templateUrl: './confirmar-modal.component.html',
  styleUrls: ['./confirmar-modal.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonButton, IonButtons, IonHeader,
     IonToolbar, IonTitle ]
  
})
export class ConfirmarModalComponent  implements OnInit {
  @Input() message: string = '¿Estás seguro de realizar esta acción?';

  constructor(private modalCtrl: ModalController) {}

  confirm() {
    this.modalCtrl.dismiss({ confirmed: true });
  }

  cancel() {
    this.modalCtrl.dismiss({ confirmed: false });
  }

  ngOnInit() {}

}
