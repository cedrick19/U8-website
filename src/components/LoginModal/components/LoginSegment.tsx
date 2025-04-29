import { SegmentButtons } from '@/components/SegmentedTabs';
import { cn } from '@/utils/helper';
import { Button, Segmented, Tab, Tabs } from 'framework7-react';
import { useState } from 'react';

interface SegmentedTabsProps {
  tabArray: SegmentButtons[];
  defaultActiveTabIndex?: number;
  className?: string;
}

export const LoginSegment: React.FC<SegmentedTabsProps> = ({
  tabArray,
  defaultActiveTabIndex = 0,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<number>(defaultActiveTabIndex);

  return (
    <>
      <Segmented strong round className={cn('h-12 w-full items-center border bg-white', className)}>
        {tabArray.map((tab, ids) => (
          <Button
            key={ids}
            tabLink={`#${tab.tabName}`}
            active={activeTab === ids}
            onClick={() => setActiveTab(ids)}
          >
            <span
              className={cn(
                'whitespace-pre-wrap text-xs',
                activeTab === ids ? 'text-white' : 'text-gradient',
              )}
            >
              {tab.tabName}
            </span>
          </Button>
        ))}
      </Segmented>
      <Tabs>
        {tabArray.map((tab, ids) => (
          <Tab key={ids} id={tab.tabName} tabActive={activeTab === ids}>
            {tab.component}
          </Tab>
        ))}
      </Tabs>
    </>
  );
};
