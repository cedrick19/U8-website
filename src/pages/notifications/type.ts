export interface NotificationDataType {
  id: number;
  title: string;
  type?: 'newcomer' | 'system' | 'events';
  content: string;
  date?: string;
  time?: string;
}
