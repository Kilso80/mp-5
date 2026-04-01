"use client";
import getLink from "@/lib/getLink";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    background-color: var(--secondary-bg);
    padding: 3vh 3vw;
    border-radius: 1vmin;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3vh;
    min-width: 50vw;
`;

const SubmitButton = styled.input`
    padding: 1.5vh 1.5vw;
    border-radius: 1vmin;
    background-color: var(--accent-color);
    color: var(--secondary-bg);
    font-weight: 700;

    &[disabled] {
        filter: grayscale(100%)
                brightness(200%);
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
`;


const AliasInput = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    flex-grow: 1;
    
    &:focus-visible {
        border-color: var(--accent-color);
    }
`;

const URLInput = styled.input`
    width: 100%;
    padding: .75vh .75vw;
    outline: none;

    &:focus-visible {
        border-color: var(--accent-color);
    }
`;

const Indicator = styled.p`
    text-align: right;
    content: "This alias must be unique";

    &.valid {
        content: "This alias must be unique";
    }

    &.invalid {
        content: "This alias must be unique";
    }

    &.loading {
        content: "This alias must be unique";
    }
`;

export default function URLCreationForm() {
    const [alias, setAlias] = useState("");
    const [aliasStatus, setAliasStatus] = useState<boolean | undefined>(true);

    useEffect(() => {
        setAliasStatus(undefined);
        getLink(alias).then(l => setAliasStatus(l === undefined));
    }, [alias]);

    return (
        <>
            <StyledForm>
                <div>
                    <label htmlFor="url"><h2>URL</h2></label>
                    <URLInput id="url" placeholder="https://thisisanurl.com/but/a/really/long/one?long=true" />
                </div>
                <div>
                    <label htmlFor="alias"><h2>Custom Alias</h2></label>
                    <Row>
                        <label htmlFor="alias">https://truc.vercel.app/r/</label>
                        <AliasInput id="alias" placeholder="your-alias" value={alias} onChange={(e) => setAlias(e.target.value)} />
                    </Row>
                    {alias === "" ? <Indicator className="indicator">This alias must be unique</Indicator> :
                        aliasStatus === true ? <Indicator className="valid"><b>{alias}</b> is available</Indicator> :
                            aliasStatus === false ? <Indicator className="invalid"><b>{alias}</b> is unavailable</Indicator> :
                                <Indicator className="loading">Checking the availability of <b>{alias}</b>...</Indicator>}
                </div>
                <SubmitButton type="submit" disabled value="Create short URL" />
            </StyledForm>
        </>
    );
}
