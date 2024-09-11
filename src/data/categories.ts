import { ICategory } from "../types"

export const categories : ICategory[] = [
    {id:1, name: 'Food'},
    {id:2, name: 'Exercise'}
]

export interface IInfo {
    id:string;
    category: 1 | 2,
    activity: string,
    calories: number
}