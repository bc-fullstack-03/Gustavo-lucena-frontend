import { House, User, UsersThree } from '@phosphor-icons/react'
import logo_menu from '../../assets/logo_menu.svg'
import Text from '../Text';
import { MenuItem } from '../MenuItem';

function Menu() {

    return (
        <div className="min-w-max basis-1/6 border-r border-slate-400 ml-2 pt-10">
            <div className="flex items-center ml-4">
                <img src={logo_menu} alt="logo menu" />
                <Text className='font-extrabold ml-4 text-white text-xl' >Parrot</Text>
            </div>

            <ul className='pr-2'>
                <MenuItem.Root route='/home'>
                    <MenuItem.Icon>
                        <House size={48} weight='fill'></House>
                    </MenuItem.Icon>
                    <Text size='lg' className='text-white font-extrabold ml-4'>Página inicial</Text>
                </MenuItem.Root>

                <MenuItem.Root route='/profile'>
                    <MenuItem.Icon>
                        <User size={48} weight='fill'></User>
                    </MenuItem.Icon>
                    <Text size='lg' className='text-white font-extrabold ml-4'>Perfil</Text>
                </MenuItem.Root>

                <MenuItem.Root route='/friends'>
                    <MenuItem.Icon>
                        <UsersThree size={48} weight='fill'></UsersThree>
                    </MenuItem.Icon>
                    <Text size='lg' className=' text-white font-extrabold ml-4'>Amigos</Text>
                </MenuItem.Root>
            </ul>
        </div>
    );
}

export default Menu;