import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/teachers/slice.js';
import { langOptions, levelOptions, priceOptions } from '../../constants/filterOptions.js';
import { selectStyles } from '../../constants/selectStyles.js';
import Select from 'react-select';
import s from './FiltersBar.module.scss';

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
          styles={selectStyles}
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
          styles={selectStyles}
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
          styles={selectStyles}
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
