export const selectStyles = {
  control: provided => ({
    ...provided,
    width: '221px',
    borderRadius: '14px',
    border: 'none',
    boxShadow: 'none',
    padding: '4px 4px 4px 8px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '1.11',
    color: '#121417',
    cursor: 'pointer',
    indicatorSeparator: () => ({ display: 'none' }),
  }),
  option: provided => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif',
  }),
};
