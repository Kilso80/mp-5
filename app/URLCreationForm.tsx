"use client";
import createNewLink from "@/lib/createNewLink";
import isLinkFree from "@/lib/isLinkFree";
import { url } from "inspector";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.div`
    background-color: var(--secondary-bg);
    padding: 3vh 3vw;
    border-radius: 1vmin;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 3vh;
    min-width: 50vw;
`;

const SubmitButton = styled.button`
    padding: 1.5vh 1.5vw;
    border-radius: 1vmin;
    background-color: var(--accent-color);
    color: var(--secondary-bg);
    font-weight: 700;
    border: none;

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

    &.invalid {
        border-color: red;
    }
`;

const Indicator = styled.p`
    text-align: right;
    font-size: 80%;
    color: grey;
    height: 1vh;

    &.valid, &.valid b {
        color: green;
    }

    &.invalid, &.invalid b {
        color: red;
    }
`;

export default function URLCreationForm() {
    const [userURL, setUserURL] = useState("");
    const [alias, setAlias] = useState("");
    const [aliasStatus, setAliasStatus] = useState<boolean | undefined>(true);

    useEffect(() => {
        setAliasStatus(undefined);
        isLinkFree(alias).then(ans => setAliasStatus(ans));
    }, [alias]);

    const regex = /https?:\/\/[a-z0-9][a-z0-9.-]*\.[a-z]{2,}(\/[a-z0-9-_.%#]*)*(\?[a-z0-9-_%]*=[a-z0-9-_%]*(&[a-z0-9-_%]+=[a-z0-9-_%]*)*)?/i;
    let urlIsValid = (!userURL.startsWith("https://arthurl-shortener.vercel.app/r")) && (!userURL.startsWith("http://arthurl-shortener.vercel.app/r")) && regex.test(userURL)

    return (
        <>
            <StyledForm>
                <div>
                    <label htmlFor="url"><h2>URL</h2></label>
                    <URLInput id="url" placeholder="https://thisisanurl.com/but/a/really/long/one?long=true"
                        value={userURL} onChange={(e) => setUserURL(e.target.value)} className={urlIsValid ? "valid" : "invalid"} />
                </div>
                <div>
                    <label htmlFor="alias"><h2>Custom Alias</h2></label>
                    <Row>
                        <label htmlFor="alias">https://arthurl-shortener.vercel.app/r/</label>
                        <AliasInput id="alias" placeholder="your-alias" value={alias}
                            onChange={(e) => {
                                const filteredAlias = e.target.value.replaceAll(/[^A-Z0-9-_]/gi, "");
                                setAlias(filteredAlias)
                            }} />
                    </Row>
                    {alias === "" ? <Indicator className="indicator">This alias must be unique</Indicator> :
                        aliasStatus === true ? <Indicator className="valid"><b>{alias}</b> is available</Indicator> :
                            aliasStatus === false ? <Indicator className="invalid"><b>{alias}</b> is unavailable</Indicator> :
                                <Indicator className="loading">Checking the availability of <b>{alias}</b>...</Indicator>}
                </div>
                <SubmitButton disabled={alias === "" || aliasStatus !== true || !urlIsValid}
                    onClick={() => {
                        createNewLink(alias, userURL).then(() =>
                            window.location.replace("/info/" + alias)
                        )
                    }}>Create short URL</SubmitButton>
            </StyledForm>
        </>
    );
}
