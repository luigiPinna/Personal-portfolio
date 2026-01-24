import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  flex: 1;
  position: relative;
  z-index: 1;

  /* Foto come background dietro il titolo - effetto 3D */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -100px;
    width: 400px;
    height: 400px;
    background-image: url('/images/profile.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    opacity: 0.15;
    filter: blur(2px);
    z-index: -1;
    pointer-events: none;

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 300px;
      height: 300px;
      right: -50px;
      top: -30px;
      opacity: 0.1;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      display: none;
    }
  }

  a:link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary1};
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

// Rimossi RightSection, ProfileImage, ButtonWrapper che non servono più

// Manteniamo PersonalPhoto per retrocompatibilità ma deprecato
export const PersonalPhoto = styled.div`
  display: none;
`;
