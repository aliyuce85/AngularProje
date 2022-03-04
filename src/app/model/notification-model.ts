import { NotificationEnum } from "../enum/notification.enum";

export class NotificationModel {
    notificationId:any;
    notificationType: NotificationEnum | undefined;
    message: any;
    title: any;
    percentage: any;
    viewTime:number=5000;

}