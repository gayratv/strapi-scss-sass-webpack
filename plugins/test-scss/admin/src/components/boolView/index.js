/**
 *
 * Toggle
 *
 */

import React, { useCallback } from "react";
import PropTypes from "prop-types";

import { Toggle as StyledToggle, ToggleWrapper } from "@buffetjs/styles";
import { Label } from "@buffetjs/core";
import style from "./style.scss";

function Toggle({ disabled, id, className, name, onChange, value }) {
  const isIndeterminate = value === null;

  const handleRef = useCallback(
    (element) => {
      if (element) {
        element.indeterminate = isIndeterminate; // eslint-disable-line no-param-reassign
      }
    },
    [isIndeterminate]
  );

  const handleChange = (e) => {
    let targetValue = e.target.checked;
    // Handle click when the state is inteterminate
    if (isIndeterminate) {
      // Select the right value depending on the mouse position
      targetValue = e.nativeEvent.offsetX >= e.target.offsetWidth / 2;
    }
    onChange({ target: { name, value: targetValue } });
  };

  return (
    <ToggleWrapper className={className}>
      <Label htmlFor={id || name}>
        <StyledToggle
          disabled={disabled}
          checked={value || false}
          id={id || name}
          name={id || name}
          onChange={handleChange}
          ref={handleRef}
        />
        <span>Нет</span>
        <span>Да</span>
      </Label>
      <p className="testSass">testSass</p>
    </ToggleWrapper>
  );
}

Toggle.defaultProps = {
  className: null,
  disabled: false,
  id: null,
  onChange: () => {},
  value: false,
};

Toggle.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export default Toggle;
