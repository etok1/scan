import { useState } from "react";
import style from "./style.module.css";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  const [isChecked, setChecked] = useState(checked || false);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);
  };
  return (
    <label
      className={style.checkboxContainer}
      style={{ color: isChecked ? "black" : "rgba(0, 0, 0, 0.5)" }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={style.checkmark}></span>
      {label}
    </label>
  );
}
