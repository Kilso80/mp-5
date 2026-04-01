import styled from "styled-components";
import DigitDisplay from "./digitDisplay";

const Row = styled.div`
    display: flex;
    flex-directon: row;
    justify-content: center;
`;

const Box = styled.div`
    font-weight: 400;
`;

export default function NumberDisplay({ n, name }: { n: number, name: string }) {
    return (
        <Box>
            <Row>
                <DigitDisplay n={Math.floor(n / 10)} />
                <DigitDisplay n={n % 10} />
            </Row>
            <p>{name}</p>
        </Box>
    );
}
