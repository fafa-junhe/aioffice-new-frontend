import type {JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal} from "react"

export const LoongButton = (props: { onClick?: MouseEventHandler<HTMLButtonElement> | undefined; children: string | number | bigint | boolean | Iterable<ReactNode> | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Promise<string | number | bigint | boolean | ReactPortal | Iterable<ReactNode> | null | undefined> | null | undefined, className?: string | undefined, level?: "accent" | "warning" | "error" | "normal" }) => {
    return (
        <button
            onClick={props.onClick}
            className={`
              flex items-center gap-1 text-sm
              px-3 py-1.5 rounded-lg
              border-t-4 border-b-4
              bg-${props.level ?? "accent"}-4
              border-t-transparent border-b-${props.level ?? "accent"}-5
              active:border-t-${props.level ?? "accent"}-1 active:border-b-transparent
              active:translate-y-0.5
              transition-all duration-75
              hover:shadow-md active:shadow-sm
              ${props.className ?? ""}
            `}

        >
            {props.children}
        </button>

    )
}