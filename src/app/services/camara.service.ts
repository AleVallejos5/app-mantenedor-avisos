import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor() {}

  async takePhoto(): Promise<string | null> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });
      return `data:image/jpeg;base64,${image.base64String}`;
    } catch (error) {
      console.error('Error al tomar foto:', error);
      return null;
    }
  }
}
