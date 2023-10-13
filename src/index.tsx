import React from 'react';

import s from './styles.module.css';

type TestComponentProps = {
  textText?: string;
};

export const TestComponent: React.FC<TestComponentProps> = ({ textText }) => {
  return <div className={s.root}>{textText ?? 'Hello!'}</div>;
};
