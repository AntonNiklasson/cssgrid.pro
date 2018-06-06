import React from 'react';

const icons = {
  check: size => (
    <svg viewBox="0 0 612 792" width={size} height={size}>
      <path d="M562,396c0-141.4-114.6-256-256-256S50,254.6,50,396s114.6,256,256,256S562,537.4,562,396L562,396z M501.7,296.3l-241,241l0,0l-17.2,17.2L110.3,421.3l58.8-58.8l74.5,74.5l199.4-199.4L501.7,296.3L501.7,296.3z" />
    </svg>
  ),
};

const Icon = ({ shape, size }) => {
  const Shape = icons[shape];

  if (!Shape) return null;

  return <Shape size={size} />;
};

export default Icon;
