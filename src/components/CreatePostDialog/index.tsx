import * as Dialog from '@radix-ui/react-dialog';
import Text from '../Text';
import { TextInput } from '../TextInput';
import { Button } from '../Button';
import { FormEvent } from 'react'
import api from '../../services/api';
import { getAuthHeader } from '../../services/auth';
import { Post } from '../../models/Post';

interface CreatePostDialog {
    postCreated: (post: Post) => void;
}

interface PostFormElements extends HTMLFormControlsCollection {
    content: HTMLInputElement;
}

interface PostFormElement extends HTMLFormElement {
    readonly elements: PostFormElements;

}

function CreatePostDialog({ postCreated }: CreatePostDialog) {
    const auth = getAuthHeader();

    async function handleSubmit(event: FormEvent<PostFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData();
        formData.append("content", form.elements.content.value)

        try {
            const response = (await api.post("/post", formData, auth)).data;
            const { data } = await api.get(`/post/${response}`, auth);
            postCreated(data);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#121214] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-96 shadow-lg shadow-black/25'>
                <Dialog.Title className='text-2xl font-extrabold'>Novo Post</Dialog.Title>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-4'>

                    <Text className='text-white'>Conteúdo do Post</Text>
                    <TextInput.Root>
                        <TextInput.Input id='content' placeholder='Qual a mensagem ?' />
                    </TextInput.Root>

                    <div className='mt-4 flex justify-end gap-4'>
                        <Dialog.Close type='button' className='bg-zinc-500 px-5 h-12 rounded-md hover:bg-zinc-600'>
                            Fechar
                        </Dialog.Close>
                        <Button type='submit' >Postar</Button>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}

export default CreatePostDialog;