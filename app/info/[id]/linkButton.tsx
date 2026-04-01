"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 1vh 1vw;
    border-radius: 1vmin;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
    height: 4vh;
`;

const Link = styled.p`
    font-weight: 500;
`;

const Subtitle = styled.p`
    filter: opacity(70%);
    font-size: 80%;
`;

export default function LinkButton({ href }: { href: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied)
            setTimeout(() => setCopied(false), 2500);
    }, [copied]);


    return (
        <StyledButton onClick={() => {
            navigator.clipboard.writeText(href);
            setCopied(true);
        }}>
            <Column>
                <Link>{href}</Link>
                <Subtitle>Click to copy link</Subtitle>
            </Column>
            <Icon src={copied ? "/tick.svg" : "/clipboard.svg"} alt="Copy Icon" />
        </StyledButton>
    );
}
