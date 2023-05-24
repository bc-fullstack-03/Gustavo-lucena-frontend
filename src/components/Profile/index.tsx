import * as Dialog  from '@radix-ui/react-dialog';
import { useState } from "react";
import { UserCircle } from "@phosphor-icons/react";
import Heading from "../Heading";
import Text from "../Text";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import CreateAvatarButton from '../CreateAvatarButton';
import CreateAvatarDialog from '../CreateAvatarDialog';

function Profile() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const [userImg, setUserImg] = useState(localStorage.getItem("avatarImg"));

    function handleLogout() {
        localStorage.clear();
        navigate("/");
    }

    function avatarImgUpdated(userImg: any){
        setOpen(false);
        setUserImg(userImg)
    }


    return (
        <div className="basis-5/6">
            <div>
                <Heading className="border-b border-slate-400 mt-4 mb-4">
                    <Text size="xl" className="text-white font-extrabold ml-5" >Perfil</Text>
                    <div className="ml-4 my-4">
                        <div className="flex items-center flex-1 my-4">
                            {
                                userImg ? 
                                (<img src={userImg} className='w-[48px] h-[48px] rounded-full' />) :
                                (<UserCircle size={48} weight="light" />)
                            }
                            <Text className="font-extrabold ml-2 text-white">{user}</Text>
                        </div>
                        <div>
                            <Dialog.Root open={open} onOpenChange={setOpen}>
                                <CreateAvatarButton />

                                <CreateAvatarDialog avatarUpdated={avatarImgUpdated} />
                            </Dialog.Root>
                        </div>
                        <Button className="my-2 bg-cyan-700 hover:bg-cyan-500 border-2 border-cyan-500 transition" onClick={handleLogout}>Sair</Button>
                    </div>
                </Heading>
            </div>
        </div>
    );
}

export default Profile;