import * as Dialog  from '@radix-ui/react-dialog';

function CreateAvatarButton() {

    return (
        <Dialog.Trigger className='pt-1'>
            <div className='px-6 bg-cyan-400 w-full max-w-sm rounded py-2.5 text-base font-semibold hover:bg-cyan-300 text-black'>Imagem de perfil</div>
        </Dialog.Trigger>
    );
}

export default CreateAvatarButton;