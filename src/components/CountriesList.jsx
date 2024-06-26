import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

export default function CountriesList({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
