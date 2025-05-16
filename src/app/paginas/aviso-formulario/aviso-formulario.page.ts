import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
   IonNote, IonList, IonItem, IonLabel, IonButton, IonIcon, IonImg } from '@ionic/angular/standalone';
import { CamaraService } from 'src/app/services/camara.service';
import { AvisosService } from 'src/app/services/avisos.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-aviso-formulario',
  templateUrl: './aviso-formulario.page.html',
  styleUrls: ['./aviso-formulario.page.scss'],
  standalone: true,
  imports: [IonImg, IonIcon, IonButton, IonLabel, IonItem, IonList, IonNote, IonBackButton, IonButtons,
     IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
      ReactiveFormsModule,]
})
export class AvisoFormularioPage implements OnInit {
  form: FormGroup;
  imagenPreview: string | null = null;

  constructor(
    private fb: FormBuilder,
    private cameraService: CamaraService,
    private avisosService: AvisosService,
    private router: Router,
    private toastCtrl: ToastController
  ) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      imagen: [null]
    });
  }

  async takePhoto() {
    const foto = await this.cameraService.takePhoto();
    if (foto) {
      this.imagenPreview = foto;
      this.form.patchValue({ imagen: foto });
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      try {
        await this.avisosService.addAviso(this.form.value);
        this.showToast('Aviso publicado con éxito');
        this.router.navigate(['/avisos']);
      } catch (error) {
        this.showToast('Error al publicar el aviso');
      }
    }
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }

  get titulo() {
    return this.form.get('titulo');
  }

  get descripcion() {
    return this.form.get('descripcion');
  }

  ngOnInit() {
  }

}
