import { StaticImageData } from "next/image";

//component interfaces
export interface IWhiteButton{
    title:string,
    width?:number;
    height?:number;
    image:StaticImageData
}