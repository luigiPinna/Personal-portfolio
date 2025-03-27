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
import skillsData from '../../constants/skillsData.json';
import {
    Section,
    SectionDivider,
    SectionTitle,
  } from "../../styles/GlobalComponents";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsRadar = () => {
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
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
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
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Section nopadding id="skillsRadar">
    <SectionDivider />
    <SectionTitle main>Technical Expertise</SectionTitle>
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg p-6">
        <Radar data={data} options={options} />
      </div>
    </div>
    </Section>
  );
};

export default SkillsRadar; 