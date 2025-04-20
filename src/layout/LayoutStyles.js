import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: auto;

  main {
    padding-top: 70px; /* Stessa altezza dell'header */

    @media ${(props) => props.theme.breakpoints.sm} {
      padding-top: 60px; /* Stessa altezza dell'header mobile */
    }
  }
`;
