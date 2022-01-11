import React, {useState} from 'react';

const FilterCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleInputChange = (evt) => {
    if (evt.target.checked) {
      setChecked(true)
      return;
    }
      setChecked(false)
  }
  return (
    <div className="checkbox-content">
      <label className="checkbox">
        <input type="checkbox" className="checkbox_type_invisible" onChange={handleInputChange}/>
        <span className={`${checked ? 'checkbox_type_visible' : 'checkbox_type_unchecked'}`}></span>
      </label>
      <p className="checkbox__name">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
