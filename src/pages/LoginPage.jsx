import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { AppContext } from '../contents/AppContext';
import { loginService } from "../services/LoginService";

const initData = {
    username: '',
    password: '',
};

function LoginPage() {
    const navigate = useNavigate();
    const { login } = useContext(AppContext);
    const [data, setData] = useState(initData);
    const [error, setError] = useState('');  // Estado para manejar errores

    const onChangeUsername = (e) => {
        setData({ ...data, username: e.target.value });
    };

    const onChangePassword = (e) => {
        console.log("Contraseña:", e.target.value);  // Añade esta línea para verificar el valor
        setData({ ...data, password: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resp = await loginService(data);
            console.log(resp, data);
            login(resp.data);
            navigate('/categorias');
        } catch (error) {
            window.alert('El usuario o contraseña es incorrecto');
        }
    };

    return (
        <section className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="container">
                <div className="row justify-content-sm-center">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="mb-3">
                                        <label className="mb-2 text-muted" htmlFor="username">Username</label>
                                        <input
                                            onChange={onChangeUsername}
                                            value={data.username}  // Asegúrate de vincular el valor
                                            id="username"
                                            type="text"
                                            className="form-control"
                                            name="username"  // Cambié 'email' a 'username'
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <div className="mb-2 w-100">
                                            <label className="text-muted" htmlFor="password">Contraseña</label>
                                            <a href="forgot.html" className="float-end">
                                                Recuperar Contraseña?
                                            </a>
                                        </div>
                                        <input
                                            onChange={onChangePassword}
                                            value={data.password}  // Vincula el valor con el estado de la contraseña
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            required
                                        />
                                    </div>
                                    {error && <div className="alert alert-danger">{error}</div>}  {/* Mostrar error si lo hay */}
                                    <div className="d-flex align-items-center">
                                        <div className="form-check">
                                            <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                            <label htmlFor="remember" className="form-check-label">Recordarme</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary ms-auto">
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; Tecsup 2024
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;
