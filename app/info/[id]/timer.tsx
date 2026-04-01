'use client';

import reactivate from "@/lib/reactivate";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NumberDisplay from "./numberDisplay";

const ReactivateButton = styled.button`
    padding: 1.5vh 1.5vw;
    border-radius: 1vmin;
    background-color: var(--accent-color);
    color: var(--secondary-bg);
    font-weight: 700;
    border: none;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-weight: 700;
    font-size: 150%;
    margin-bottom: .2vh;
`;

export default function Timer({ timeLeft, alias }: {
    timeLeft: number, alias: string
}) {
    const [expirationDate, setExpirationDate] = useState(timeLeft + 1000 * 60 * 60 * 24 * 30);
    const [now, setNow] = useState(timeLeft);
    
    const time = Math.floor((expirationDate - now) / 1000);
    useEffect(() => {
        if (expirationDate > now)
            setTimeout(() => setNow(Math.min(Date.now(), expirationDate)), 1000)
    }, [now]);

    return (
        <>
            <div>
                <Row>
                    <NumberDisplay n={Math.floor(time / 60 / 60 / 24)} name="days" />:
                    <NumberDisplay n={Math.floor(time / 60 / 60) % 24} name="hours" />:
                    <NumberDisplay n={Math.floor(time / 60) % 60} name="minutes" />:
                    <NumberDisplay n={time % 60} name="seconds" />
                </Row>
                <p>Before link expiration</p>
            </div>
            <ReactivateButton onClick={() => {
                reactivate(alias);
                setExpirationDate(now + 1000 * 60 * 60 * 24 * 30);
            }}>Reactivate link</ReactivateButton>
        </>
    );
}