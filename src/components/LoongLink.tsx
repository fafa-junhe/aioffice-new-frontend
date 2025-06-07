import type {JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal} from "react"
import {useNavigate} from "react-router-dom";
import {SquareArrowOutUpRight} from "lucide-react";

export const LoongLink = (props: { hasIcon?: boolean | undefined, href?: string | undefined, onClick?: MouseEventHandler<HTMLAnchorElement> | undefined; children: string | number | bigint | boolean | Iterable<ReactNode> | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Promise<string | number | bigint | boolean | ReactPortal | Iterable<ReactNode> | null | undefined> | null | undefined, className?: string | undefined, level?: "accent" | "warning" | "error" | "normal" }) => {
    const navigate = useNavigate()
    return (
        <a onClick={props.onClick == undefined ? (() => {navigate(props.href != undefined ? props.href : "#", {})}) : props.onClick} className={`
              items-center gap-1 relative
              rounded-lg cursor-pointer flex
              text-${props.level ?? "accent"}-10
              hover:bg-${props.level ?? "accent"}-3
              px-2
              transition-colors duration-75
              ${props.className ?? ""}
            `}>
            {props.children}{props.hasIcon ? <SquareArrowOutUpRight size={16}/> : <div></div>}
        </a>
    )
}