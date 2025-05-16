import { Injectable } from '@angular/core';
import { AlmacenamientoService } from './almacenamiento.service';
import { Aviso } from '../modelo/aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private avisosKey = 'avisos';

  constructor(private almacenamientoService: AlmacenamientoService) {}

  async getAvisos(): Promise<Aviso[]> {
    const avisos = await this.almacenamientoService.get(this.avisosKey);
    return avisos ? avisos.map((a: any) => ({
      ...a,
      fecha: new Date(a.fecha)
    })) : [];
  }

  async addAviso(aviso: Omit<Aviso, 'id' | 'fecha'>): Promise<Aviso> {
    const avisos = await this.getAvisos();
    const newAviso: Aviso = {
      ...aviso,
      id: Date.now().toString(),
      fecha: new Date()
    };
    await this.almacenamientoService.set(this.avisosKey, [...avisos, newAviso]);
    return newAviso;
  }

  async deleteAviso(id: string): Promise<boolean> {
    const avisos = await this.getAvisos();
    const updatedAvisos = avisos.filter(a => a.id !== id);
    await this.almacenamientoService.set(this.avisosKey, updatedAvisos);
    return avisos.length !== updatedAvisos.length;
  }
}
