import { Envelope, Lock } from '@phosphor-icons/react'
import logo from '../../assets/logo.svg'
import { Button } from '../Button';
import Heading from '../Heading';
import Text from '../Text';
import { TextInput } from '../TextInput';
import { Link} from 'react-router-dom';
import { FormEvent } from 'react';


interface AuthFormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement;
    password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
    readonly elements: AuthFormElements;
}

export interface Auth{
    email: string;
    name?: string;
    password: string;
}

interface AuthFormProps{
    authFormTitle: string;
    submitFormButtonText: string;
    routeName: string;
    submitFormButtonAction: (auth: Auth) => void;
}

function AuthForm(props: AuthFormProps ) {

    function handleSubmit(event: FormEvent<AuthFormElement>){
        event.preventDefault();
        const form = event.currentTarget;

        const auth = {
            email: form.elements.email.value,
            password: form.elements.password.value
        }

        props.submitFormButtonAction(auth);
    }
        
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-100 p-6">

            <header className="flex flex-col items-center">
                <img src={logo} alt="Logo" />

                <Heading size="lg" className="mt-4">Sysmap Parrot</Heading>
                <Text size="lg" className="text-[#7C7C8A] mt-1" >{props.authFormTitle}</Text>

            </header>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
                <label className="flex flex-col gap-3 w-full" htmlFor="email">
                    <Text size='lg' className="font-base text-[#E1E1E6]"> Endereço de-email </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>

                        <TextInput.Input type="email" id='email' placeholder="Digite seu email" />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text className="font-base text-[#E1E1E6]" size="lg" > Digite sua senhar</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>

                        <TextInput.Input type="password" id='password' placeholder="************" />
                    </TextInput.Root>
                </label>

                <Button type="submit" className="mt-4 text-[#000]">{props.submitFormButtonText}</Button>
            </form>

            <footer className="mt-9">
                <Text asChild size='sm'>
                    <Link to={props.routeName} className="text-[#7C7C8A] underline hover:text-gray-200"> Não possui conta? Crie uma agora! </Link>
                </Text>
            </footer>
        </div>
    )
}

export default AuthForm;