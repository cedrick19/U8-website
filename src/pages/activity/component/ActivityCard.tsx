export const ActivityCard = ({ icon, title }: { icon: string; title: string }) => {
  return (
    <>
      <div className="relative h-[151px] w-full overflow-hidden rounded-lg bg-[#F5F3FC] shadow-sm">
        <div className="absolute left-0 top-0 h-[50px] w-full">
          <div
            className="absolute left-0 top-0 h-full w-full bg-[#D5CEF3]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 100%)',
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-full bg-[#C7BCEB]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 70%)',
            }}
          />
          <div
            className="absolute left-0 top-0 h-full w-full bg-[#B3A7E3]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 40%)',
            }}
          />
        </div>

        <div className="absolute bottom-0 h-[110px] w-full rounded-b-lg">
          <div className="relative h-full w-full">
            <div
              className="absolute bottom-0 h-full w-full rounded-b-lg bg-[#D5CEF3]"
              style={{ clipPath: 'circle(44% at 50% 110%)' }}
            />
            <div
              className="absolute bottom-0 h-full w-full rounded-b-lg bg-[#B8ADE9]"
              style={{ clipPath: 'circle(30% at 50% 110%)' }}
            />
            <div
              className="absolute bottom-0 h-full w-full rounded-b-lg bg-[#A598E2]"
              style={{ clipPath: 'circle(15% at 50% 110%)' }}
            />
          </div>
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center">
            <img src={icon} alt={title} className="h-[36px] max-h-full w-[36px] max-w-full" />
          </div>
          <p className="mt-2 text-center text-lg font-bold text-[#5D3B94]">{title}</p>
        </div>
      </div>
    </>
  );
};
