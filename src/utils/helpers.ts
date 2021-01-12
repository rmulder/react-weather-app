export const isObjectEmpty = (object: any): boolean => {
  return Object.keys(object).length === 0;
};

export const convertUTCTimestamp = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleString('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
  });
};
