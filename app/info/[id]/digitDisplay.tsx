import styled from "styled-components";

const Frame = styled.div`
    overflow: hidden;
    height: var(--font-size);
`;

export default function DigitDisplay({ n }: { n: number }) {
    return (
        <Frame>
            {n}
        </Frame>
    );
}
