import type {JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal} from "react"

export const LoongButton = (props: { onClick?: MouseEventHandler<HTMLButtonElement> | undefined; children: string | number | bigint | boolean | Iterable<ReactNode> | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Promise<string | number | bigint | boolean | ReactPortal | Iterable<ReactNode> | null | undefined> | null | undefined, className?: string | undefined, level?: "accent" | "warning" | "error" | "normal" }) => {
    return (
        <button
            onClick={props.onClick}
            className={`relative flex items-center gap-1 text-sm
    bg-${props.level ?? "accent"}-4
    px-3 py-1.5 rounded-lg border-b-4 border-${props.level ?? "accent"}-5
    transition-all duration-75 ease-in-out 
    hover:shadow-[0_4px_6px_rgba(255,219,220,0.5)] active:shadow-sm
    active:translate-y-[3px]
    hover:border-b-4 
    hover:border-accent-4
    before:content-[''] before:absolute before:inset-x-0 before:bottom-0
    before:h-1 before:rounded-b-lg
    before:bg-${props.level ?? "accent"}-500
    ${props.className ?? ''}
  `}
        >
  <span className="relative top-[2px] flex items-center gap-1">
    {props.children}
  </span>
        </button>



    )


}