import React, {useState} from 'react';

const FilterCheckbox = () => {
  // const [checked, setChecked] = useState(false);
  //
  // const handleInputChange = (evt) => {
  //   if (evt.target.checked) {
  //     setChecked(true)
  //     return;
  //   }
  //     setChecked(false)
  // }
  return (
    <div className="filter">
      <label className="filter__label">
        <input type="checkbox" className="filter__checkbox filter__checkbox_type_input"/>
        <span className="filter__checkbox filter__checkbox_type_span"></span>
      </label>
      <p className="filter__name">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
