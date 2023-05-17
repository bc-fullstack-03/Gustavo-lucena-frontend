import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export type textInputRoot = {
    children: ReactNode;
}

function TextInputRoot(props: textInputRoot) {

    return (
        <div className='flex items-center h-12 gap-3 py-3 px-4 rounded bg-[#202024] w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    );
}

export type textInputIcon = {
    children: ReactNode
}
function TextInputIcon(props: textInputIcon) {

    return (
        <Slot className='w-6 h-6 text-[#7C7C8A]'>
            {props.children}
        </Slot>
    );
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputProps) {
    return (
        <input
            className='bg-[#202024] flex-1 text-[#EEEEEE] text-base placeholder:text-[#7C7C8A] outline-none w-full'
            {...props}
        />
    )
}

export const TextInput ={
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}