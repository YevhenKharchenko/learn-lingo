import Select from 'react-select';
import s from './FiltersBar.module.scss';

const langOptions = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'ukrainian', label: 'Ukrainian' },
  { value: 'polish', label: 'Polish' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'italian', label: 'Italian' },
  { value: 'korean', label: 'Korean' },
  { value: 'chinese', label: 'Mandarin Chinese' },
  { value: 'vietnamese', label: 'Vietnamese' },
];
const levelOptions = [
  { value: 'a1', label: 'A1 Beginner' },
  { value: 'a2', label: 'A2 Elementary' },
  { value: 'b1', label: 'B1 Intermediate' },
  { value: 'b2', label: 'B2 Upper-Intermediate' },
  { value: 'c1', label: 'C1 Advanced' },
  { value: 'c2', label: 'C2 Proficient' },
];
const priceOptions = [
  { value: '10', label: '10 $' },
  { value: '20', label: '20 $' },
  { value: '30', label: '30 $' },
  { value: '40', label: '40 $' },
];

const customStyles = {
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
    indicatorSeparator: () => ({ display: 'none' }),
  }),
  option: provided => ({
    ...provided,
    fontFamily: 'Roboto, sans-serif',
  }),
};

const FiltersBar = () => {
  return (
    <form className={s.filtersForm}>
      <label className={s.selectLabel}>
        Languages
        <Select
          className={s.langSelect}
          styles={customStyles}
          options={langOptions}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </label>
      <label className={s.selectLabel}>
        Level of knowledge
        <Select
          className={s.langSelect}
          styles={customStyles}
          options={levelOptions}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </label>
      <label className={s.selectLabel}>
        Price
        <Select
          className={s.langSelect}
          styles={customStyles}
          options={priceOptions}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </label>
    </form>
  );
};

export default FiltersBar;
