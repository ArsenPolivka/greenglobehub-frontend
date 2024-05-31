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

const presetsUA = [
  "Які переваги має переробка відходів?",
  "Як я можу зменшити свій вуглецевий слід?",
  "Що таке відновлювані джерела енергії?",
  "Як зміна клімату впливає на біорізноманіття?",
  "Які найкращі практики сталого життя?",
  "Який вплив має забруднення пластиком на морське життя?",
  "Як я можу зробити свій дім енергоефективнішим?",
  "Які переваги використання сонячної енергії?",
  "Як я можу долучитися до місцевих екологічних ініціатив?",
  "Які наслідки має вирубка лісів?",
  "Як компостування допомагає навколишньому середовищу?",
  "Які існують екологічні альтернативи одноразовому пластику?",
  "Як бізнеси можуть впроваджувати стійкі практики?",
  "Яка роль уряду в боротьбі зі зміною клімату?",
  "Як я можу зберігати воду вдома?",
  "Які наслідки має забруднення повітря для здоров'я людини?",
  "Як харчування на основі рослинної дієти впливає на довкілля?",
  "Які найефективніші способи зменшення відходів?",
  "Як міське планування може сприяти екологічній стійкості?",
  "Що таке циркулярна економіка і як вона працює?"
];

export const Sidebar: React.FC<SidebarProps> = ({ onSelectPreset }) => {
  return (
    <aside className='p-6 bg-gray-950 text-white overflow-auto'>
      <Logo className='h-auto w-fit mb-10 mx-auto' />

      <div className='flex flex-col gap-2'>
        {presetsUA.map((preset, index) => (
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
