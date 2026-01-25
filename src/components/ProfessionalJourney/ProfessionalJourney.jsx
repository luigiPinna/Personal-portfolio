import React, { useState, useEffect } from 'react';
import professionalJourneyData from '../../constants/professionalJourney.json';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';


const TimelineContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  margin-bottom: 12rem;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 3px;
  background: linear-gradient(to bottom, #8b5cf6, #06b6d4, #10b981);
  border-radius: 2px;
  box-shadow: 0 0 20px ${props => props.theme.colors.shadow};
`;

const TimelineSide = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 12rem;
  ${props => props.side === 'right' && 'margin-top: 24rem;'}
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const TimelineDot = styled.div`
  position: absolute;
  ${props => props.side === 'left' ? 'right: -2.8rem;' : 'left: -2.8rem;'}
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.type === 'work' ? 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)' : 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)'};
  z-index: 1;
  border: 3px solid ${props => props.theme.colors.background1};
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { transform: translateY(-50%) scale(1); }
    50% { transform: translateY(-50%) scale(1.1); }
  }
`;

const ContentCard = styled(motion.div)`
  width: 100%;
  padding: 2rem;
  border-radius: 16px;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.$active ? props.theme.colors.accent1 : props.theme.colors.border};
  backdrop-filter: blur(10px);
  cursor: pointer;
  transform: ${props => props.$active ? 'scale(1.05)' : 'scale(1)'};
  transition: all 0.3s ease;
  box-shadow: ${props => props.$active ? `0 20px 60px ${props.theme.colors.shadow}` : `0 4px 6px ${props.theme.colors.shadow}`};

  &:hover {
    transform: scale(1.02);
    border-color: ${props => props.theme.colors.accent1};
    box-shadow: 0 12px 40px ${props => props.theme.colors.shadow};
  }
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary1};
`;

const YearBadge = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 1.4rem;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => props.theme.colors.background3};
  color: ${props => props.theme.colors.primary1};
  font-size: 1.2rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.accent2 + '30'};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.accent2 + '20'};
    border-color: ${props => props.theme.colors.accent2};
  }
`;

const ProfessionalJourney = () => {
  const [activeYear, setActiveYear] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Sort all items by year in descending order
  const sortedItems = [...professionalJourneyData.journey].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return yearB - yearA;
  });

  // Split into left and right items
  const leftItems = sortedItems.filter((_, index) => index % 2 === 0);
  const rightItems = sortedItems.filter((_, index) => index % 2 !== 0);

  return (
    <Section nopadding id="journey">
      <SectionDivider divider/>
      <SectionTitle className="gradient-text">Professional Journey</SectionTitle>
        
        <TimelineContainer
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <TimelineLine />
          
          <TimelineSide side="left">
            {leftItems.map((item, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
              >
                <TimelineDot type={item.type} side="left" />
                <ContentCard
                  $active={activeYear === item.year}
                  onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CardTitle>
                    <TitleText>{item.title}</TitleText>
                    <YearBadge>{item.year}</YearBadge>
                  </CardTitle>
                  
                  <Description>{item.description}</Description>
                  
                  {item.technologies && (
                    <TechContainer>
                      {item.technologies.map((tech, techIndex) => (
                        <TechTag
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </TechTag>
                      ))}
                    </TechContainer>
                  )}
                </ContentCard>
              </TimelineItem>
            ))}
          </TimelineSide>

          <TimelineSide side="right">
            {rightItems.map((item, index) => (
              <TimelineItem
                key={index}
                variants={itemVariants}
              >
                <TimelineDot type={item.type} side="right" />
                <ContentCard
                  $active={activeYear === item.year}
                  onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CardTitle>
                    <TitleText>{item.title}</TitleText>
                    <YearBadge>{item.year}</YearBadge>
                  </CardTitle>
                  
                  <Description>{item.description}</Description>
                  
                  {item.technologies && (
                    <TechContainer>
                      {item.technologies.map((tech, techIndex) => (
                        <TechTag
                          key={techIndex}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </TechTag>
                      ))}
                    </TechContainer>
                  )}
                </ContentCard>
              </TimelineItem>
            ))}
          </TimelineSide>
        </TimelineContainer>
   
    </Section>
  );
};

export default ProfessionalJourney; 
