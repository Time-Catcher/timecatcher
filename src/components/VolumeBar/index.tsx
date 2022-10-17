import { useRecoilState } from "recoil";
import { useState, useRef } from "react";
import { volumeState } from "../../pages/preference/atoms";
import { VolumeContainer, VolumeInput } from "./style";

const VolumeBar = () => {
  const [volLevel, setVolLevel] = useRecoilState(volumeState);
  const soundInputRef = useRef<HTMLInputElement>(null);
  const handleVolumeChange = () => {
    // setVolLevel(soundInputRef?.current!.value);
    setVolLevel(parseFloat(soundInputRef?.current?.value as string));
  };
  return (
    <VolumeContainer>
      <VolumeInput
        type={"range"}
        min={0}
        max={1}
        step={0.1}
        onChange={handleVolumeChange}
        // value={volLevel}
        ref={soundInputRef}
      ></VolumeInput>
    </VolumeContainer>
  );
};

// onClick={function (event) {
//     let per = event.layerX / parseFloat(BarEmpty.scrollWidth);
//     Howler.volume(per);
//   }}

export default VolumeBar;
