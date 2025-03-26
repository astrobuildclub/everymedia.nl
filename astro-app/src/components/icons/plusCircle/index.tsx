export const PlusCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="plus">
        <path
          id="Vector"
          d="M12 5.02246V19.0225M5 12.0225H19"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};
