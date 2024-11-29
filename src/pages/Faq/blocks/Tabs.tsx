import { FC } from 'react'

type TabsProps = {
  tab: Number,
  setTab: Function,
  tabs: any[],
};

const Tabs: FC<TabsProps> = (props) => {
  const { tab, setTab, tabs } = props;

  return (
    <div className='h-[30vh] bg-brand-300 text-white'>
      <div className='w-full h-full container mx-auto flex items-center justify-between relative'>
        {tabs.map((t) => (
          <div
            key={t.value}
            className='flex flex-col items-center gap-3 cursor-pointer'
            onClick={() => setTab(t.value)}
          >
            <img src={t.src} className='w-24'/>
            <p>{t.label}</p>
            {t.value === tab && (
              <div
                className={`z-10 absolute bottom-[-10px] transform w-0 h-0
                  border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-brand-300
                  ${tab === 1 ? 'left-0 -translate-x-0' : ''}
                  ${tab === 2 ? 'left-1/2 -translate-x-1/2' : ''}
                  ${tab === 3 ? 'right-0 translate-x-0' : ''}
                `}
              />
            )}
          </div>
        ))}

      </div>
    </div>
  )
}

export default Tabs;
