import styled from 'styled-components';

export const PersonalPhoto = styled.div` 
  border-radius: 50%;
  top: 8.5%;
  margin-left: 75%;
  height: 100px;
  width: 100px;
  position: absolute;
  display: grid;
  flex-direction: column;
  background-image: url("images/me3.png");
  background-size: 180px;
  background-position-x: center;
  background-position-y: 170px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  @media only screen and (max-width: 1000px){
    background-image: none;
    box-shadow: none;
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    background-image: none;
  
  }
  @media ${(props) => props.theme.breakpoints.md} {   
    display: flex;
    flex-direction: column;
    background-image: none;
    margin-left:30%;
    
  }
`
export const LeftSection = styled.div`
  width: 100%;
  a:link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.91);    
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
