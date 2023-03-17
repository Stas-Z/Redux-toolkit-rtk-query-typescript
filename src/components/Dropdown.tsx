import { FC, useState } from "react";
import "./Dropdown.css";

type OptionTypes={
  value: number,
  label: string
}
interface ILimitProps{
  setLimit: (value: number) => void;
  limit:number  
}

const Dropdown:FC<ILimitProps> = ({limit , setLimit}:ILimitProps) => {
  
  const [isActive, setIsActive] = useState(false);

  const options:OptionTypes[] = [
    { value: 3, label: "3" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
       Sort by: {limit && limit}
        <div className="carret"></div>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div key={option.value}
              className="dropdown-item"
              onClick={(e) => {
                setLimit(option.value);
                setIsActive(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
