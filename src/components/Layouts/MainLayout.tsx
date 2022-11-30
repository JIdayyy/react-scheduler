import Title from "@components/Title";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function MainLayout({ children }: Props): JSX.Element {
    return (
        <div>
            <Title title={9} />

            {children}
        </div>
    );
}
