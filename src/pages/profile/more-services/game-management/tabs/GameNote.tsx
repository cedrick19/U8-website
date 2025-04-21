import { Block, CardContent } from 'framework7-react';
import { GameNotePopUp } from './utils';
import { useState } from 'react';
import { DropBottom } from '@/pages/profile/more-services/component';

const stats = [
  { label: 'Bet', value: '0 \npens\n' },
  { label: 'Wind or Lose', value: '0' },
  { label: 'Bet', value: '0' },
  { label: 'Effective Bet', value: '0' },
];

export const GameNote = () => {
  const [activeOption, setActiveOption] = useState<Record<string, string>>({
    gameOption: 'All types',
    statusOption: 'All state',
    gameNoteDate: 'Today',
  });

  const renderHighlightedText = (text: string) => {
    const parts = text.split('\n');

    return parts.map((part, idx) => {
      if (idx % 2 === 1) {
        return (
          <span key={idx} className="text-sm font-semibold">
            {part}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <Block className="flex flex-col items-start gap-6 rounded-3xl bg-white py-5">
      <DropBottom
        popUpConfig={GameNotePopUp}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        spanTwo={['Poker']}
      />

      <CardContent className="grid w-full grid-cols-2 gap-2 rounded-2xl bg-primary-gradient p-4">
        {stats.map((stat, ids) => (
          <div key={ids} className="rounded-md bg-white py-3">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gradient text-2xl font-bold">
                {renderHighlightedText(stat.value)}
              </p>
              <p className="text-gradient">{stat.label}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Block>
  );
};
