import Head from 'next/head';
import styled from 'styled-components';
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo  src="data:image/jpeg;base64,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"/>
                <Button onClick={signIn} variant="outlined">Sign in with Google</Button>   
                    
                
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div`
display: grid;
place-items: center;
height: 100vh;
`

const LoginContainer = styled.div`
padding: 100px;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`
const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom: 50px;
`
