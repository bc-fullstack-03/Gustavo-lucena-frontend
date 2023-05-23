import * as Dialog  from '@radix-ui/react-dialog';
import { Button } from '../Button';

function CreatePostButton() {

    return (
        <Dialog.Trigger className='pt-6'>
            <Button>Novo Post</Button>
        </Dialog.Trigger>
    );
}

export default CreatePostButton;