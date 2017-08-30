export class Task {
  constructor(
    public id: number,
    public title: String,
    public description: String,
    public  status: String,
    public  createdAt,
    public  updatedAt,
    public user_id: String
    ) { }
}
