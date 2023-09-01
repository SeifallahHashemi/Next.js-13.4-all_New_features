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

export type ImageProps = {
    title: string;
    type?: "submit" | "reset" | "button" | undefined;
    className: string;
    isPending?: boolean;
}

const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
} as const;

type Route = (typeof routes)[keyof typeof routes]
const gotoRoute = (route: Route) => {}
gotoRoute("")