import { useEffect, useState } from 'react'
import { UserCircle } from "@phosphor-icons/react";
import Heading from "../Heading";
import Text from "../Text";
import { Button } from "../Button";
import api from '../../services/api';
import { getAuthHeader, getUserId } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

interface Profile {
    id: string,
    name: string,
    email: string,
    avatarImgUrl: string,
    followers: string[],
    following: string[]

}

function FriendsList() {
    const authHeader = getAuthHeader();
    const userId = getUserId();
    const navigate = useNavigate();

    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        async function getProfiles() {
            try {
                const response: Profile[] = await (await api.get("/user", authHeader)).data
                setProfiles(response.filter(prof => prof.id != userId))
            } catch (error: any) {
                if (error.response.status == 403) {
                    navigate("/");
                }
            }
        }

        getProfiles();
    }, [])

    async function handleFollow(profileEmail: string) {
        try {
            await api.post(`/user/follow/${profileEmail}`, null, authHeader);
            const response = (await api.get(`/user/${profileEmail}`, authHeader)).data;
            setProfiles((profiles) => {
                const newProfiles = profiles.map(profile => {
                    if (profile.email === profileEmail) {
                        profile.followers = response[0].followers;
                    }
                    return profile;
                })
                return [...newProfiles];
            })
        } catch (error) {
            console.log("Erro ao tentar seguir perfil.")
        }
    }

    async function handleUnFollow(profileEmail: string) {
        try {
            await api.post(`/user/unfollow/${profileEmail}`, null, authHeader);
            const response = (await api.get(`/user/${profileEmail}`, authHeader)).data;
            setProfiles((profiles) => {
                const newProfiles = profiles.map(profile => {
                    if (profile.email === profileEmail) {
                        profile.followers = response[0].followers;
                    }
                    return profile;
                })
                return [...newProfiles];
            })
        } catch (error) {
            console.log("Erro ao tentar seguir perfil.")
        }
    }

    return (
        <div className='basis-5/6 overflow-y-auto scroll-smooth'>
            <Heading className="pb-2 mt-4 border-b border-slate-400">
                <Text size="xl" className="text-white ml-5">Amigos</Text>
            </Heading>
            <ul>
                {profiles && profiles.map((profile) => (
                    <li key={profile.id} className="flex flex-col ml-5 my-5 w-full max-w-sm ">
                        <div className="flex items-center">
                            {
                                profile.avatarImgUrl ?
                                    <img src={profile.avatarImgUrl} className='w-[48px] h-[48px] rounded-full' /> :
                                    <UserCircle size={48} weight="light" className="text-slate-50" />

                            }
                            <Text size="lg" className="text-white ml-2 font-extrabold">{profile.email}</Text>
                        </div>
                        <div className="flex items-center ml-2">
                            <Text>{profile.followers ? profile.followers.length : 0} seguidores</Text>
                        </div>
                        <div className="flex items-center ml-2">
                            <Text>Seguindo {profile.following ? profile.following.length : 0} perfis</Text>
                        </div>
                        {
                            profile.followers.includes(getUserId()) ?
                                (<Button className="my-2 bg-cyan-700 hover:bg-cyan-500 border-2 border-cyan-500 transition" onClick={() => handleUnFollow(profile.email)}>Deixar De Seguir</Button>) :
                                (<Button className="my-2 bg-cyan-400 transition" onClick={() => handleFollow(profile.email)}>Seguir</Button>)
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FriendsList;