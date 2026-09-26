import { useMemo } from 'react';

export function useAppMeta() {
  return useMemo(
    () => ({
      title: 'Service Marketplace',
      description: 'A safer, easier-to-maintain local services platform.'
    }),
    []
  );
}
