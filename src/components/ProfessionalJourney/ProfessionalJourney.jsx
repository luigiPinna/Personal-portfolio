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
  width: 2px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981);
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
  ${props => props.side === 'left' ? 'right: -2.5rem;' : 'left: -2.5rem;'}
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.type === 'work' ? '#3b82f6' : '#10b981'};
  z-index: 1;
`;

const ContentCard = styled(motion.div)`
  width: 100%;
  padding: 2rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.background2};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 1px solid ${props => props.$active ? '#3b82f6' : 'rgba(255, 255, 255, 0.1)'};
  transform: ${props => props.$active ? 'scale(1.05)' : 'scale(1)'};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
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
  border-radius: 9999px;
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  font-weight: 600;
`;

const Description = styled.p`
  color: ${props => props.theme.colors.primary1};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled(motion.span)`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.primary1};
  font-size: 0.875rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
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
        <SectionTitle>Professional Journey</SectionTitle>
        
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
