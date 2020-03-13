import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function ListViewSelector(props) {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  function toggle() {
    setdropdownOpen(!dropdownOpen);
  }
  const { options, nowShowing, onChangeValue } = props;
  return (
    <Dropdown isOpen={dropdownOpen} toggle={() => toggle()}>
      <DropdownToggle color="info" className="text-white mr-15" caret size="sm">
        {nowShowing}
      </DropdownToggle>
      <DropdownMenu>
        {options &&
          options.map((opt, key) => {
            return (
              <DropdownItem
                style={{ fontSize: 14 }}
                onClick={() => onChangeValue(opt)}
                key={key}
              >
                {opt.name}
              </DropdownItem>
            );
          })}
      </DropdownMenu>
    </Dropdown>
  );
}

export default ListViewSelector;
