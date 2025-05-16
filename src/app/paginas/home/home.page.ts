import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButtons, IonButton,
   IonRefresher, IonRefresherContent, IonList, IonItemSliding, IonItemOptions,
    IonItemOption, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Aviso } from 'src/app/modelo/aviso';
import { ModalController, ToastController } from '@ionic/angular';
import { AvisosService } from 'src/app/services/avisos.service';
import { ConfirmarModalComponent } from 'src/app/component/confirmar-modal/confirmar-modal.component';
import { AvisoItemsComponent } from "../../component/aviso-items/aviso-items.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonList,
    IonRefresherContent, IonRefresher, IonButton, IonButtons, IonIcon, IonHeader,
    IonToolbar, IonTitle, IonContent, AvisoItemsComponent, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  avisos: Aviso[] = [];
  
  constructor(
    private avisosService: AvisosService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController

  ) {}
  
  //Carga inicial
  async ngOnInit() {
    await this.loadAvisos();
  }
  
  //Método que puede ser llamado con o sin evento
  async loadAvisos(event?: any) {
    try {
      this.avisos = await this.avisosService.getAvisos();
      this.completarRefresher(event);
    } catch (error) {
      console.error('Error:', error);
      this.completarRefresher(event);
      this.mostrarToast('Error al cargar avisos');
    }
  }

  async deleteAviso(aviso: any) {
    const modal = await this.modalCtrl.create({
      component: ConfirmarModalComponent,
      componentProps: {
        message: `¿Eliminar el aviso "${aviso.titulo}"?`
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data?.confirmed) {
      try {
        const exito = await this.avisosService.deleteAviso(aviso.id);
        if (exito) {
          await this.loadAvisos();
          this.mostrarToast('Aviso eliminado');
        }
      } catch (error) {
        this.mostrarToast('Error al eliminar');
      }
    }
  }

  private completarRefresher(event?: any) {
    if (event) {
      event.target.complete();
    }
  }

  private async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

}

