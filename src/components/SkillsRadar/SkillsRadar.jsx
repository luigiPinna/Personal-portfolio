import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { useTheme as useStyledTheme } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import skillsData from '../../constants/skillsData.json';
import {
    Section,
    SectionDivider,
    SectionTitle,
  } from "../../styles/GlobalComponents";
import { ScrollReveal } from '../../animations/ScrollAnimations';
import { fadeInUp, scaleIn } from '../../animations/variants';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsRadar = () => {
  const styledTheme = useStyledTheme();
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const data = {
    labels: skillsData.skills.flatMap(category =>
      category.skills.map(skill => skill.name)
    ),
    datasets: [
      {
        label: 'Technical Skills',
        data: skillsData.skills.flatMap(category =>
          category.skills.map(skill => skill.level)
        ),
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        borderColor: '#8b5cf6',
        borderWidth: 2,
        pointBackgroundColor: '#8b5cf6',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#06b6d4',
        pointHoverBorderColor: '#8b5cf6',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
          backdropColor: 'transparent',
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        angleLines: {
          color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(22, 22, 31, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        titleColor: isDark ? '#e4e4e7' : '#18181b',
        bodyColor: isDark ? '#a1a1aa' : '#52525b',
        borderColor: '#8b5cf6',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <Section id="skillsRadar" style={{ padding: '4rem 2rem' }}>
      <SectionDivider />
      <ScrollReveal variants={fadeInUp}>
        <SectionTitle main className="gradient-text" style={{ textAlign: 'center', width: '100%' }}>Technical Expertise</SectionTitle>
      </ScrollReveal>
      <ScrollReveal variants={scaleIn}>
        <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}>
          <div className="glass-dark dark:glass-dark" style={{ borderRadius: '16px', padding: '4rem', border: `1px solid ${styledTheme.colors.border}` }}>
            <Radar data={data} options={options} />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};

export default SkillsRadar; 