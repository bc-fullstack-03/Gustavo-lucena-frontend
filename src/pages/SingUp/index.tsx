import { useNavigate } from 'react-router-dom';
import AuthForm, { Auth } from '../../components/AuthForm';
import api from '../../services/api';

function SingUp() {

    const navigate = useNavigate();

    async function handleRegister(auth: Auth) {
        try {
            await api.post("/auth/register", auth)
            navigate("/")
        } catch (error) {
            alert(error)
        }
    }


    return (
        <AuthForm
            authFormTitle='Faça o cadastro e comece usar!'
            submitFormButtonText='Cadastrar'
            submitFormButtonAction={handleRegister}
            routeName='/'
        />
    )
}

export default SingUp;