import React from 'react';
import { Logo } from '@/components/Logo';

type SidebarProps = {
  onSelectPreset: (preset: string) => void;
};

const presets = [
  "What are the benefits of recycling?",
  "How can I reduce my carbon footprint?",
  "What are renewable energy sources?",
  "How does climate change affect biodiversity?",
  "What are the best practices for sustainable living?",
  "What is the impact of plastic pollution on marine life?",
  "How can I make my home more energy efficient?",
  "What are the advantages of using solar energy?",
  "How can I get involved in local environmental initiatives?",
  "What are the consequences of deforestation?",
  "How does composting help the environment?",
  "What are some eco-friendly alternatives to single-use plastics?",
  "How can businesses adopt sustainable practices?",
  "What is the role of government in combating climate change?",
  "How can I conserve water at home?",
  "What are the effects of air pollution on human health?",
  "How does eating a plant-based diet benefit the environment?",
  "What are the most effective ways to reduce waste?",
  "How can urban planning contribute to environmental sustainability?",
  "What is the circular economy and how does it work?"
];

export const Sidebar: React.FC<SidebarProps> = ({ onSelectPreset }) => {
  return (
    <aside className='p-6 bg-gray-950 text-white overflow-auto'>
      <Logo className='h-auto w-fit mb-10 mx-auto' />

      <div className='flex flex-col gap-2'>
        {presets.map((preset, index) => (
          <button
            key={index}
            className='text-left p-2 bg-gray-800 rounded hover:bg-gray-700'
            onClick={() => onSelectPreset(preset)}
          >
            {preset}
          </button>
        ))}
      </div>
    </aside>
  );
};
