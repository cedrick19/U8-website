export const SvgMobile = ({ color = 'white' }: { color?: string }) => (
  <svg
    className="absolute left-0 z-0 h-full w-full shadow-secondary/30"
    viewBox="0 0 440 85"
    preserveAspectRatio="xMidYMid slice"
  >
    <path
      d="M220 57.0004C239.882 57.0004 256 40.8827 256 21.0004C256 13.0706 262.105 3.94169 270 4.68079L436.118 20.2315C442.286 20.8089 447 25.9852 447 32.1793V71.0002C447 78.7322 440.732 85.0002 433 85.0002H7C-0.731989 85.0002 -7 78.7322 -7 71.0002V32.1793C-7 25.9852 -2.2856 20.8088 3.88154 20.2315L170 4.68079C177.895 3.94169 184 13.0706 184 21.0004C184 40.8827 200.118 57.0004 220 57.0004Z"
      fill={color}
      stroke="#4C2CCA"
      strokeOpacity="0.3"
      strokeWidth="0.7"
    />
  </svg>
);

export default SvgMobile;
