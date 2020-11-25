type NotificationTypes = "error" | "info" | "success";
interface AppNotification {
  type: NotificationTypes | string;
  message: string;
}
