import Select from 'react-select';
import s from './FiltersBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/selectors.js';
import { setFilters } from '../../redux/teachers/slice.js';

const langOptions = [
  { value: null, label: 'All languages' },
  { value: 'English', label: 'English' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Ukrainian', label: 'Ukrainian' },
  { value: 'Polish', label: 'Polish' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Korean', label: 'Korean' },
  { value: 'Mandarin Chinese', label: 'Mandarin Chinese' },
  { value: 'Vietnamese', label: 'Vietnamese' },
];
const levelOptions = [
  { value: null, label: 'Any level' },
  { value: 'A1 Beginner', label: 'A1 Beginner' },
  { value: 'A2 Elementary', label: 'A2 Elementary' },
  { value: 'B1 Intermediate', label: 'B1 Intermediate' },
  { value: 'B2 Upper-Intermediate', label: 'B2 Upper-Intermediate' },
  { value: 'C1 Advanced', label: 'C1 Advanced' },
  { value: 'C2 Proficient', label: 'C2 Proficient' },
];
const priceOptions = [
  { value: null, label: 'Any price' },
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
  const dispatch = useDispatch();

  const handleSelectChange = (selectedOption, { name }) => {
    dispatch(setFilters({ [name]: selectedOption.value }));
  };

  return (
    <form className={s.filtersForm}>
      <label className={s.selectLabel}>
        Languages
        <Select
          className={s.langSelect}
          styles={customStyles}
          options={langOptions}
          name="language"
          onChange={handleSelectChange}
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
          name="level"
          onChange={handleSelectChange}
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
          name="price"
          onChange={handleSelectChange}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </label>
    </form>
  );
};

export default FiltersBar;
