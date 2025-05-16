import { Component, Input, OnInit } from '@angular/core';
import { Aviso } from 'src/app/modelo/aviso';
import { IonItem, IonAvatar, IonImg, IonLabel } from "@ionic/angular/standalone";
import { DateFormatPipe } from "../../pipes/date-format.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aviso-items',
  templateUrl: './aviso-items.component.html',
  styleUrls: ['./aviso-items.component.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonItem, IonAvatar, DateFormatPipe, CommonModule]
})
export class AvisoItemsComponent  implements OnInit {
  @Input({ required: true }) aviso!: Aviso;

  constructor() { }

  ngOnInit() {}

}
