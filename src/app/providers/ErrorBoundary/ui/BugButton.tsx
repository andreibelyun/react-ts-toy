import { FC, useEffect, useState } from 'react';

// Component for testing ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState<Boolean>(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) throw new Error('Something went wrong');
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <button type="button" onClick={onThrow}>
      Throw error
    </button>
  );
};
