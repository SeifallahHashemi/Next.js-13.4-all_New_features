export interface Props {
    src: any;
}

export type CustomImageProps = {
    src: string,
    alt: string,
    priority?: boolean,
    isSquare?: boolean,
    sizes?: string,
}

type ImageProps = {
    title: string;
    type?: "submit" | "reset" | "button" | undefined;
    className: string;
    isPending?: boolean;
}