import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
  const isXxlScreen = useMediaQuery({ minWidth: 1536 });
  const isXlScreen = useMediaQuery({ minWidth: 1280 });
  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  const isMdScreen = useMediaQuery({ minWidth: 768 });
  const isSmScreen = useMediaQuery({ minWidth: 640 });
  const isXsScreen = useMediaQuery({ maxWidth: 639 });

  return {
    isXsScreen,
    isSmScreen,
    isMdScreen,
    isLgScreen,
    isXlScreen,
    isXxlScreen
  };
};
