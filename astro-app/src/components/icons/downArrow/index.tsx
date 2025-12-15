import React from "react";

const DownArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.0107422" width="48" height="48" rx="24" fill="#1119D3" />
      <path
        d="M24 17.0107V31.0107M24 31.0107L31 24.0107M24 31.0107L17 24.0107"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
