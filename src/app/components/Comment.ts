export interface Comment {
    id?:string;
    text:string;
    username:string;
    momentId: number;
    createdAt?: string;
    updatedAt: string;
}