import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 200px; // Altezza fissa per le immagini
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 600px; // Altezza fissa per le card
  display: flex; // Aggiunto display flex
  flex-direction: column; // Organizza il contenuto verticalmente
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: 0.2s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 600px; // Mantiene l'altezza fissa anche su mobile
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 5px;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  flex: 1; // Permette al contenuto di espandersi
  overflow-y: auto; // Aggiunge scrolling se il contenuto è troppo lungo
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #f1ebeb;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #176e7a;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background: #28c3d7;
    color: black;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
