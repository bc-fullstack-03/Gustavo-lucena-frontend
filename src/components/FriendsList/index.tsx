import { useEffect, useState } from 'react'
import { UserCircle } from "@phosphor-icons/react";
import Heading from "../Heading";
import Text from "../Text";
import { Button } from "../Button";
import api from '../../services/api';
import { getAuthHeader } from '../../services/auth';

interface Profile {
    id: string,
    name: string,
    email: string,
    avatarImgUrl: string,
    followers: number,
    following: number

}

function FriendsList() {
    const authHeader = getAuthHeader();

    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        async function getProfiles() {
            try {
                const { data } = await api.get("/user", authHeader)
                setProfiles(data)
            } catch (error) {
                console.log(error)
            }
        }

        getProfiles();
    }, [])

    return (
        <div>
            <Heading className="ml-5 my-4">
                <Text size="xl" className="text-white">Amigos</Text>
            </Heading>
            {profiles && profiles.map((profile) => (
                <div key={profile.id} className="flex flex-col ml-5 w-full max-w-sm">
                    <div className="flex items-center">
                        <UserCircle size={48} weight="light" className="text-slate-50" />
                        <Text size="lg" className="text-white ml-2 font-extrabold">{profile.email}</Text>
                    </div>
                    <div className="flex items-center ml-2">
                        <Text>{profile.followers} seguidores</Text>
                    </div>
                    <div className="flex items-center ml-2">
                        <Text>Seguindo {profile.following} perfis</Text>
                    </div>
                    <Button className="my-2">Seguir</Button>
                </div>
            ))}
        </div>
    );
}

export default FriendsList;