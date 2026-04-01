import getLinkInfo from "@/lib/getLinkInfo";
import Timer from "./timer";
import styled from "styled-components";
import LinkButton from "./linkButton";

const Card = styled.div`
    background-color: var(--secondary-bg);
    min-width: 50vw;
    background-color: var(--secondary-bg);
    padding: 3vh 3vw;
    border-radius: 1vmin;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1vh;
    text-align: center;
`;

const Icon = styled.img`
    height: 3vh;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1vw;
    justify-content: center;
`;

const Title = styled.h2``

export default async function Redirecter({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const info = await getLinkInfo(id);

    if (info === undefined || info === null)
        return (<>
            <h2>This URL does not exist</h2>
            <p>Maybe it has expired?</p>
        </>);

    return (
        <Card>
            <LinkButton href={`https://arthurl-shortener.vercel.app/r/${id}`} />
            <p>
                Redirects to <a target="_blank" rel="noopener noreferrer" href={info.link}>{info.link}</a>
            </p>
            <Row>
                <Icon src="/click.svg" alt="clicks" />
                <p>{info.uses} clicks</p>
            </Row>
            <Timer timeLeft={info.timestamp} alias={id} />
        </Card>
    );
}

