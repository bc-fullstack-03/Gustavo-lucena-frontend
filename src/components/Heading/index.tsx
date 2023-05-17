import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { ReactNode } from "react";

export interface PropsHeading{
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
    children: ReactNode;
    className?: string;
}

function Heading( {size='md', asChild, children, className}: PropsHeading ){

    const Comp = asChild ? Slot : 'h2'

    return(
        <Comp className={clsx(
            'text-[#EEEEEE] font-bold',
            {
                'text-lg': size ==='sm',
                'text-xl': size ==='md',
                'text-4xl': size ==='lg',
            },
            className, 
        )}>  
            
            {children}
        </Comp>
    );
}


export default Heading;