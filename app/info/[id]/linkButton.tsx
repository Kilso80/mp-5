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
`;

const Icon = styled.img`
    height: 4vh;
`;

export default function LinkButton({ href }: { href: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied)
            setTimeout(() => setCopied(false), 3000);
    });


    return (
        <StyledButton onClick={() => {
            navigator.clipboard.writeText(href);
            setCopied(true);
        }}>
            <Column>
                <p>{href}</p>
                <p>Click to copy link</p>
            </Column>
            <Icon src={copied ? "/tick.svg" : "/clipboard.svg"} alt="Copy Icon" />
        </StyledButton>
    );
}
