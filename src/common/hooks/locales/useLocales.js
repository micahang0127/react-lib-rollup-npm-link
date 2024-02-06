import { useTranslation } from 'react-i18next';

function useLocalesFunc(type) {
  const { t } = useTranslation(type);

  return function $(key, data = []) {
    return t(key, { ...data });
  };
}

export { useLocalesFunc };
