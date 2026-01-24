import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  flex: 1;
  padding-right: 3rem;

  a:link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.91);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-right: 0;
    margin-bottom: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-right: 0;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    margin-top: 2rem;
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.accent1};
  box-shadow:
    0 0 0 8px ${props => props.theme.colors.background2},
    0 20px 60px rgba(139, 92, 246, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow:
      0 0 0 8px ${props => props.theme.colors.background2},
      0 25px 80px rgba(139, 92, 246, 0.5);
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    width: 250px;
    height: 250px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 200px;
    height: 200px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  button {
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

// Manteniamo PersonalPhoto per retrocompatibilità ma deprecato
export const PersonalPhoto = styled.div`
  display: none;
`;
