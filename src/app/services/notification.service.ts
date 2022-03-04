import { Injectable } from '@angular/core';

import * as signalR from "@microsoft/signalr";
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotificationModel } from '../model/notification-model';
@Injectable()
export class NotificationService {

  notification$ = new BehaviorSubject<NotificationModel>(new NotificationModel());
  notifications$ = new BehaviorSubject<NotificationModel[]>([]);


  private hubConnection?: signalR.HubConnection;


  public getConnectionId():any{
    return this.hubConnection?.connectionId;
  }
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.notificationApiUrl}notification`).configureLogging(signalR.LogLevel.Debug)
      .build()
    this.hubConnection
      .start()
      .then(() => { console.log("hub connection startd") })
      .catch((err: any) => {
        console.log(err)
      })
  }

  public addListener = () => {
    this.hubConnection?.on("notificationEvent", (data: NotificationModel) => {
      console.log("data")

      console.log(data)
      var oldItems = this.notifications$.value;
      var oldItem = oldItems.find(n => n.notificationId == data.notificationId);
      console.log(oldItem)
      this.notifications$.next([data, ...this.notifications$.value])

      console.log("cıkıs")
      console.log(this.notifications$.value)
      this.clearNotification(data);
    })
  }

  public clearNotification = (data: NotificationModel) => {
    console.log("clearnotss")
    // setTimeout(()=>{
    //   this.notification$.next(null)
    // },data.viewTime)
  }
  constructor() { }
}
