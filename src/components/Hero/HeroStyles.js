import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 6rem 2rem;

  /* Foto come sfondo - ben posizionata */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    width: 450px;
    height: 450px;
    background-image: url('/images/hero_img.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.25;
    z-index: -1;
    pointer-events: none;
    animation: float 6s ease-in-out infinite;

    @keyframes float {
      0%, 100% { transform: translateY(-50%) translateX(0); }
      50% { transform: translateY(-50%) translateX(10px); }
    }

    @media ${(props) => props.theme.breakpoints.lg} {
      width: 380px;
      height: 380px;
      right: 3%;
      opacity: 0.2;
    }

    @media ${(props) => props.theme.breakpoints.md} {
      width: 320px;
      height: 320px;
      right: 0;
      opacity: 0.18;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      width: 250px;
      height: 250px;
      right: -10%;
      opacity: 0.15;
    }
  }

  /* Particelle tecnologiche animate */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      radial-gradient(2px 2px at 20% 30%, rgba(139, 92, 246, 0.3), transparent),
      radial-gradient(2px 2px at 60% 70%, rgba(6, 182, 212, 0.3), transparent),
      radial-gradient(1px 1px at 50% 50%, rgba(139, 92, 246, 0.2), transparent),
      radial-gradient(2px 2px at 80% 10%, rgba(6, 182, 212, 0.3), transparent),
      radial-gradient(1px 1px at 90% 60%, rgba(139, 92, 246, 0.2), transparent),
      radial-gradient(2px 2px at 33% 80%, rgba(6, 182, 212, 0.3), transparent),
      radial-gradient(1px 1px at 15% 90%, rgba(139, 92, 246, 0.2), transparent);
    background-size: 200% 200%;
    background-position: 0% 0%;
    animation: particles 20s ease-in-out infinite;
    opacity: 0.6;
    z-index: -2;
    pointer-events: none;

    @keyframes particles {
      0%, 100% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
    }

    @media ${(props) => props.theme.breakpoints.sm} {
      opacity: 0.3;
    }
  }

  a:link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary1};
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 5rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 4rem 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 3rem 1.5rem;
  }
`;

// Manteniamo PersonalPhoto per retrocompatibilità ma deprecato
export const PersonalPhoto = styled.div`
  display: none;
`;
