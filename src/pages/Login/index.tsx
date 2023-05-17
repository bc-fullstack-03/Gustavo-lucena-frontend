import { useNavigate } from 'react-router-dom';
import AuthForm, { Auth } from '../../components/AuthForm';
import api from '../../services/api';
import jwtDecode from 'jwt-decode';

interface UserToken{
    sub: string;
    profile: string;
}

function Login() {

    const navigate = useNavigate();

    async function handleLogin(auth: Auth) {
        try {
            const { data } = await api.post("/auth/authenticate", auth)
            const decodedToken = jwtDecode(data.token) as UserToken;
            //localStorage.setItem("profile", decodedToken.profile);
            localStorage.setItem("user", decodedToken.sub);
            localStorage.setItem("accessToken", data.token);
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
            routeName='singup'
        />
    )
}

export default Login;