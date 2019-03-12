import { UserRole } from "./enum";

export class LoggedInModel {
  ID: number;
  FirstName: string;
  LastName: string;
  EmailID: string;
  UserRole: UserRole;
  ProfileImageURL: string;
}
