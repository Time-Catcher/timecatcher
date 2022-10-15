import React from "react";
import { useState } from "react";
import { dropDownType } from "./interface";
import {
  DropDownArrow,
  DropDownContainer,
  DropDownName,
  DropDownSelectWrapper,
  SubDropDown,
  SubDropDownWrapper,
} from "./style";

const DropDown = ({ width, list }: dropDownType) => {
  const [curDropDownValue, setCurDropDownvalue] = useState<string>(list[0]);

  const [dropDownState, setDropDownState] = useState<boolean>(false);

  const handleSelectDropDown = (value: string) => {
    setCurDropDownvalue(value);
    return;
  };

  return (
    <>
      <DropDownContainer width={width}>
        <DropDownSelectWrapper
          type="button"
          onClick={() => {
            setDropDownState(!dropDownState);
          }}
        >
          <DropDownName>{curDropDownValue}</DropDownName>

          <DropDownArrow
            src="/dropdown_arrow.png"
            state={dropDownState}
          ></DropDownArrow>
        </DropDownSelectWrapper>

        {dropDownState && (
          <SubDropDownWrapper>
            {list.map((element: string, idx: number) => {
              if (element === curDropDownValue) return;

              return (
                <SubDropDown
                  key={element + String(idx)}
                  onClick={() => {
                    handleSelectDropDown(element);
                    setDropDownState(!dropDownState);
                  }}
                  value={element}
                >
                  {element}
                </SubDropDown>
              );
            })}
          </SubDropDownWrapper>
        )}
      </DropDownContainer>
    </>
  );
};

export default React.memo(DropDown);
