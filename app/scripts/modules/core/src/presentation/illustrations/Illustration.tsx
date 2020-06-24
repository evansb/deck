import React, { memo } from 'react';

import { illustrationsByName } from './illustrationsByName';

export type IllustrationName = keyof typeof illustrationsByName;

export interface IIllustrationProps {
  name: IllustrationName;
}

const throwInvalidIllustrationError = (name: string) => {
  throw new Error(`No illustration with the name ${name} exists`);
};

export const Illustration = memo(({ name }: IIllustrationProps) => {
  const Component = illustrationsByName[name];

  if (!Component) {
    throwInvalidIllustrationError(name);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}>
      <Component style={{ gridColumn: 1, gridRow: 1 }} />
    </div>
  );
});
