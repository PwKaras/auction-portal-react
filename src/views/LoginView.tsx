import React from 'react';
import { Header } from '../components/Header'
import { PageTitle } from '../components/PageTitle';
import { LoginForm } from '../components/LoginForm';

export const LoginView = () => (
            <>
                <Header />
                <PageTitle>Logowanie do portalu aukcyjnego</PageTitle>
                <LoginForm/>
            </>
       
);