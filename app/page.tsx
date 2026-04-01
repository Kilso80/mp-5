import styled from "styled-components";
import URLCreationForm from "./URLCreationForm";
import createNewLink from "@/lib/createNewLink";

const Title = styled.div`
  text-align: center;
`;

export default function URLCreationPage() {
  createNewLink("test", "https://github.com");

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
