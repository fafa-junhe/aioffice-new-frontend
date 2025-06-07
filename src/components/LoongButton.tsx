import type {JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal} from "react"

export const LoongButton = (props: { onClick?: MouseEventHandler<HTMLButtonElement> | undefined; children: string | number | bigint | boolean | Iterable<ReactNode> | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Promise<string | number | bigint | boolean | ReactPortal | Iterable<ReactNode> | null | undefined> | null | undefined, className?: string | undefined, level?: "accent" | "warning" | "error" | "normal" }) => {
    return (
        <button onClick={props.onClick} className={`flex items-center gap-1 text-sm active:border-t-accent-1 bg-${props.level != undefined ? props.level : "accent"}-4 border-b-${props.level != undefined ? props.level : "accent"}-5 px-3 py-1.5 rounded-lg border-b-4 active:border-b-0 active:border-t-4 transition-all duration-[50ms] shadow-md hover:shadow-lg active:shadow-md ${props.className != undefined ? props.className : ''}`}>
            {props.children}
        </button>
    )
}