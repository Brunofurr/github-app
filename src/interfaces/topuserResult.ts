import { User } from "./user";

export interface TopuserResult {
    incomplete_results: boolean;
    items: User[];
    total_count: number;
}