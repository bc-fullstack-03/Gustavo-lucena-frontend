import * as Dialog  from '@radix-ui/react-dialog';

function CreatePostButton() {

    return (
        <Dialog.Trigger className='pt-6'>
            <div className='bg-cyan-400 w-full max-w-sm rounded py-2.5 text-base font-semibold hover:bg-cyan-300 text-black'>Novo Post</div>
        </Dialog.Trigger>
    );
}

export default CreatePostButton;