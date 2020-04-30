import React from 'react';
import { Header } from '../components/Header';
import { PageTitle } from '../components/PageTitle';
import { InfoCard } from '../components/InfoCard';
import { CartContext } from '../providers/CartContext'


export const BasketView = () => (
    <>
        <Header />
        <PageTitle>Mój koszyk</PageTitle>
        <InfoCard>
            tu będzie lista twoich produktów
        </InfoCard>
    </>
);
