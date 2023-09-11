import { twMerge } from "tailwind-merge";
import { clsx, ClassValue} from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}

export async function stop(id: string | undefined, name: string | undefined): Promise<void> {
    const data = {
        id: id || "",
        name: name || "",
    }
    return new Promise<any>((resolve) => {
        setTimeout(() =>{
            resolve(data);
        }, 2000)
    })
}
export async function delay(ms: number): Promise<void> {
    return new Promise<void>((resolve) => setTimeout(resolve, ms))
}
export async function simulateDelay(data: string, ms: number): Promise<string> {
    return new Promise<string>((resolve) => setTimeout(() => resolve(data), ms))
}