import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Button({ children, asChild, className, ...props }: PropsButton) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            className={clsx(
                'bg-cyan-400 w-full max-w-sm rounded py-2.5 text-base font-semibold hover:bg-cyan-300 text-black',
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}