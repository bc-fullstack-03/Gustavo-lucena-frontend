import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface PropsText{
    size?: 'sm'|'md'|'lg'|'xl';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

function Text({ size='md', children, asChild, className }: PropsText){

    const Comp = asChild ? Slot : 'span'

    return(
        <Comp className={clsx(
            'text-[#7C7C8A]',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
                'text-lg': size === 'xl',
            },
            className
        )}>

            {children}
        </Comp>
    );
}

export default Text;