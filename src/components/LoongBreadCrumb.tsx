import {LoongLink} from "./LoongLink.tsx";
import {ChevronRight} from "lucide-react";

interface LoongBreadCrumbType {
    name: string,
    link?: string
}
interface LoongBreadCrumbPropType {
    links: LoongBreadCrumbType[],
    currentName: string
}

export const LoongBreadCrumb = (props: LoongBreadCrumbPropType) => {
    return (
        <div className=" px-3 py-1 mt-3 mb-2 rounded bg-gray-1 items-center flex gap-2">
            <p className="other-font text-lg text-gray-11">
                {props.currentName}
            </p>
            <div className=" border-gray-7 py-2 border-r"></div>
            {props.links.map((link, i) => (
                <div className="flex"><LoongLink className="text-md " key={i} href={link.link!}>
                    {link.name}
                </LoongLink>
                    {i != props.links.length - 1 ? <ChevronRight/> : <div></div>}
                </div>
            ))}
        </div>
    )
}