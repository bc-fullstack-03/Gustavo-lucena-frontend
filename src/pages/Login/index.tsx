import { useNavigate } from 'react-router-dom';
import AuthForm, { Auth } from '../../components/AuthForm';
import api from '../../services/api';
import { getAuthHeader } from '../../services/auth';

function Login() {

    const navigate = useNavigate();

    async function handleLogin(auth: Auth) {
        try {
            const { token } = (await api.post("/auth/authenticate", auth)).data;
            localStorage.setItem("accessToken", token);
            const { data } = await api.get("/auth/get-logged", getAuthHeader())
            
            localStorage.setItem("user", data.email);
            localStorage.setItem("userId", data.id);
            localStorage.setItem("userName", data.name);
            localStorage.setItem("avatarImg", data.avatarImgUrl )
            
            navigate("/home")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <AuthForm
            authFormTitle='Faça login e comece usar!'
            submitFormButtonText='Entrar'
            submitFormButtonAction={handleLogin}
            isRegister={false}
            routeName='singup'
        />
    )
}

export default Login;