import { UserCircle } from "@phosphor-icons/react";
import Heading from "../Heading";
import Text from "../Text";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

function Profile(){
    const navigate = useNavigate();
    const user = localStorage.getItem("user");

    function handleLogout(){
        localStorage.clear();
        navigate("/");
    }

    return(
        <div className="basis-5/6">
            <div>
                <Heading  className="border-b border-slate-400 mt-4 mb-4">
                    <Text size="xl" className="text-white font-extrabold ml-5" >Perfil</Text>
                    <div className="ml-4 my-4">
                        <div className="flex items-center flex-1 my-4">
                            <UserCircle size={48} weight="light"/>
                            <Text className="font-extrabold ml-2 text-white">{user}</Text>
                        </div>
                        <Button onClick={handleLogout}>Sair</Button>
                    </div>
                </Heading>
            </div>
        </div>
    );
}

export default Profile;