import * as Dialog from '@radix-ui/react-dialog';
import {  useState } from 'react'
import Dropzone from '../Dropzone';
import { Button } from '../Button';
import { FormEvent } from 'react'
import api from '../../services/api';
import { getAuthHeader } from '../../services/auth';

interface CreateAvatarDialog {
    avatarUpdated?: (userImg: any) => void;
}

interface PostFormElements extends HTMLFormControlsCollection {
    content: HTMLInputElement;
}

interface PostFormElement extends HTMLFormElement {
    readonly elements: PostFormElements;

}

function CreateAvatarDialog({ avatarUpdated }: CreateAvatarDialog) {
    const [selectedFile, setSelectedFile] = useState<File>();

    async function handleSubmit(event: FormEvent<PostFormElement>) {
        event.preventDefault();

        const formData = new FormData();
        if (selectedFile) {
            formData.append('avatarImg', selectedFile)
        }

        try {
            const { data } = (await api.post("/user/avatarImg", formData, getAuthHeader()));
            localStorage.setItem("avatarImg", data)
            avatarUpdated && avatarUpdated(data);
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
            <Dialog.Content className='fixed bg-[#121214] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-96 shadow-lg shadow-black/25'>
                <Dialog.Title className='text-2xl font-extrabold'>Adicinar Imagem</Dialog.Title>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-4'>

                    <Dropzone onFileUploaded={setSelectedFile} />

                    <div className='mt-4 flex gap-4'>
                        <Dialog.Close onClick={() => setSelectedFile(undefined)} type='button' className='bg-zinc-500 px-5 h-12 rounded-md hover:bg-zinc-600'>
                            Fechar
                        </Dialog.Close>
                        {
                            selectedFile != null &&
                            <Button type='submit'>Salvar</Button>
                        }
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}

export default CreateAvatarDialog;