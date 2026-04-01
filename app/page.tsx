import styled from "styled-components";
import URLCreationForm from "./URLCreationForm";

const Title = styled.div`
  text-align: center;
`;

export default function URLCreationPage() {
  return (
      <>
        <Title>
          <h1>URL shortener</h1>
          <p>Shorten URLs and share them while keeping track of who used it</p>
        </Title>
        <URLCreationForm />
      </>
  );
}
