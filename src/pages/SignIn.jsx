import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container, LeftData, Title, RightData, RightContainer, Sign, SignInTag, SignInWith, GoogleBtn, GoogleIcon,
  GoogleTag, AppleBtn, AppleIcon, AppleTag, LoginForm, EmailTag, EmailInput, PasswordTag, PasswordInput, ForgetPassword,
  SignInButton, SignInButtonTag, SignupSuggestion
} from './SignIn-Styling'


function SignIn() {
  return (
    <>


      <Container>

        <LeftData>

          <Title>
            Board.
          </Title>

        </LeftData>

        <RightData>

          <RightContainer>

            <Sign>
              Sign In
            </Sign>

            <SignInTag>
              Sign in to your account
            </SignInTag>

            <SignInWith>

              <GoogleBtn>
                <GoogleIcon src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' />
                <GoogleTag>Sign in with Google</GoogleTag>
              </GoogleBtn>

              <AppleBtn>
                <AppleIcon src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' />
                <AppleTag>Sign in with Apple</AppleTag>
              </AppleBtn>

            </SignInWith>

            <LoginForm>

              <EmailTag>Email address</EmailTag>
              <EmailInput></EmailInput>

              <PasswordTag>Password</PasswordTag>
              <PasswordInput type='password' ></PasswordInput>

              <ForgetPassword>Forgot password?</ForgetPassword>

              <Link to="/dashboard">
                <SignInButton>
                  <SignInButtonTag>Sign In</SignInButtonTag>
                </SignInButton>
              </Link>

            </LoginForm>

            <SignupSuggestion>
              Don’t have an account? <label style={{ color: "#346BD4" }}>Register here</label>
            </SignupSuggestion>

          </RightContainer>

        </RightData>

      </Container>


    </>
  )
}

export default SignIn