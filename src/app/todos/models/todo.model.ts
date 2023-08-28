export class Todo {
  public id: number;
  public title: string;
  public completed: boolean;

  constructor(title: string) {
    this.id = new Date().getTime();
    this.completed = false;
    this.title = title;
  }
}
