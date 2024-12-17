import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Box,
  Grid2,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuth, startGoogleLogin } from "../../store/auth/";

export const LoginPage = () => {

  const dispatch=useDispatch();


  const { email, password, onInputChange, formState } = useForm({
    email: "sebas@google.com",
    password: "sebas123",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
    dispatch(checkingAuth())
  };

  const onGoogleSignIn = ()=>{
    console.log("google login")
    dispatch(startGoogleLogin())
  }

  return (
    <AuthLayout title="Ingresar">
      <form onSubmit={onSubmit}>
        <Grid container flexDirection={"column"}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              onChange={onInputChange}
              name="password"
              value={password}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Entrar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
              
              variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction={"row"} justifyContent={"flex-end"}>
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Crear una cuenta
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
