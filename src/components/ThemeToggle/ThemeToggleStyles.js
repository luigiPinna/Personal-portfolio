import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleButton = styled(motion.button)`
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  color: ${props => props.theme.colors.primary1};
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    background: ${props => props.theme.colors.accent1};
    color: white;
    box-shadow: 0 8px 16px rgba(139, 92, 246, 0.3);
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 40px;
    height: 40px;
  }
`;
