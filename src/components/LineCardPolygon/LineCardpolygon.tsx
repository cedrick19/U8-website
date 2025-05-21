export const LineCardPolygon = () => {
  return (
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
  );
};

export default LineCardPolygon;
