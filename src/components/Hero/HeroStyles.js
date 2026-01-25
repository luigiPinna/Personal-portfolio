import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 6rem 4rem;
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 0;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr 350px;
    gap: 0;
    padding: 5rem 3rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    padding: 4rem 2rem 4rem 2rem;
    gap: 0;
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 3rem 1.5rem 3rem 1.5rem;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  z-index: 10;

  a:link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary1};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.md} {
    position: absolute;
    top: 3rem;
    right: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 2rem;
    right: 1rem;
  }
`;

export const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.85;

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 300px;
    height: 300px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 180px;
    height: 180px;
    opacity: 0.6;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 140px;
    height: 140px;
    opacity: 0.5;
  }
`;

/* ANIMAZIONI FULL SCREEN - da sinistra a destra TUTTO lo schermo */
export const HeroEffects = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;

  /* Onde luminose pulsanti - FULL SCREEN */
  &::before {
    content: '';
    position: absolute;
    top: 15%;
    right: 15%;
    width: 700px;
    height: 700px;
    background:
      radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.25) 0%, transparent 50%);
    border-radius: 50%;
    filter: blur(80px);
    animation: wave 12s ease-in-out infinite;

    @keyframes wave {
      0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 0.8;
      }
      50% {
        transform: scale(1.5) rotate(180deg);
        opacity: 1;
      }
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 600px;
      height: 600px;
      right: 10%;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      width: 500px;
      height: 500px;
      filter: blur(60px);
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      width: 400px;
      height: 400px;
      filter: blur(40px);
      opacity: 0.6;
    }
  }

  /* Particelle luminose - FULL SCREEN */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      radial-gradient(circle, rgba(139, 92, 246, 0.6) 2.5px, transparent 2.5px),
      radial-gradient(circle, rgba(6, 182, 212, 0.6) 2.5px, transparent 2.5px),
      radial-gradient(circle, rgba(139, 92, 246, 0.5) 2px, transparent 2px),
      radial-gradient(circle, rgba(6, 182, 212, 0.5) 2px, transparent 2px),
      radial-gradient(circle, rgba(139, 92, 246, 0.4) 1.5px, transparent 1.5px),
      radial-gradient(circle, rgba(6, 182, 212, 0.4) 1.5px, transparent 1.5px);
    background-size: 700px 700px, 500px 500px, 400px 400px, 600px 600px, 300px 300px, 450px 450px;
    background-position: 0 0, 150px 100px, 300px 400px, 80px 200px, 400px 150px, 200px 350px;
    animation: particles-move 35s linear infinite;

    @keyframes particles-move {
      0% { transform: translateY(0); }
      100% { transform: translateY(-200px); }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      opacity: 0.7;
    }
  }
`;

/* Linee di codice - FULL SCREEN */
export const CodeLines = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 50px,
      rgba(6, 182, 212, 0.06) 50px,
      rgba(6, 182, 212, 0.06) 52px
    );
  animation: code-scroll 25s linear infinite;

  @keyframes code-scroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(200px); }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 50%;
    opacity: 0.8;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70%;
    opacity: 0.5;
  }
`;

// Manteniamo PersonalPhoto per retrocompatibilità ma deprecato
export const PersonalPhoto = styled.div`
  display: none;
`;
