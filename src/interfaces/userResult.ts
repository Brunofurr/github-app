import { User } from "./user";

export interface UserResult {
    "total_count": number;
    "incomplete_results": boolean;
    "items": User[];
}