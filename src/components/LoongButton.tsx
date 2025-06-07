import type {JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal} from "react"

export const LoongButton = (props: { onClick?: MouseEventHandler<HTMLButtonElement> | undefined; children: string | number | bigint | boolean | Iterable<ReactNode> | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Promise<string | number | bigint | boolean | ReactPortal | Iterable<ReactNode> | null | undefined> | null | undefined, className?: string | undefined, level?: "accent" | "warning" | "error" | "normal" }) => {
    return (
        <button
            onClick={props.onClick}
            className={`flex items-center gap-1 text-sm
            bg-${props.level ?? "accent"}-4
            border-b-4 border-${props.level ?? "accent"}-5
            px-3 py-1.5 rounded-lg
            transition-all duration-75 ease-in-out
            hover:shadow-md active:shadow-sm
            active:translate-y-[2px]
            ${props.className ?? ''}
          `}
        >
            {props.children}
        </button>


    )
}