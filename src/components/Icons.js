import React from 'react';
import glamorous from 'glamorous';

const SvgContainer = glamorous.svg(({ theme, transitionState }) => ({
  fill: theme.colors.green,
  opacity: transitionState === 'entered' ? 1 : 0,
  transition: 'opacity 400ms',
}));

export const Check = ({ size, transitionState }) => (
  <SvgContainer
    version="1.1"
    viewBox="0 0 612 792"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    transitionState={transitionState}
  >
    <path d="M562,396c0-141.4-114.6-256-256-256S50,254.6,50,396s114.6,256,256,256S562,537.4,562,396L562,396z M501.7,296.3l-241,241l0,0l-17.2,17.2L110.3,421.3l58.8-58.8l74.5,74.5l199.4-199.4L501.7,296.3L501.7,296.3z" />
  </SvgContainer>
);
