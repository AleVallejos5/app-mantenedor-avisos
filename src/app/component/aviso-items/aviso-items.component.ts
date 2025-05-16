import { Component, Input, OnInit } from '@angular/core';
import { Aviso } from 'src/app/modelo/aviso';
import { IonItem, IonAvatar, IonImg, IonLabel } from "@ionic/angular/standalone";
import { DateFormatPipe } from "../../pipes/date-format.pipe";

@Component({
  selector: 'app-aviso-items',
  templateUrl: './aviso-items.component.html',
  styleUrls: ['./aviso-items.component.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonItem, IonAvatar, DateFormatPipe]
})
export class AvisoItemsComponent  implements OnInit {
  @Input() aviso!: Aviso;

  constructor() { }

  ngOnInit() {}

}
