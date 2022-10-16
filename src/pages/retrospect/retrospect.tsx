import { useState, useEffect } from "react";
import {
  MiddleContainer,
  RetroContainer,
  RetroExitButton,
  RetroHeader,
  RetroTitle,
  CommonButton,
  TextArea,
  SatisfyWrapper,
  StarCountWrapper,
  StarCount,
  SatisfyContainer,
} from "./style";

const starCountList: number[] = [1, 2, 3, 4, 5];
let dbTimer: NodeJS.Timeout;

const Retrospect = () => {
  const [curSelectedStarIndex, setCurSelectedStarIndex] = useState<number>(2);

  const [goodPoint, setGoodPoint] = useState<string>("");

  const [badPoint, setBadPoint] = useState<string>("");

  const handleChangeText = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (dbTimer) {
      clearTimeout(dbTimer);
    }

    dbTimer = setTimeout(() => {
      setState(value);
    }, 100);
  };

  const handleSubmitRetrospect = () => {
    // 회고록 제출
  };

  return (
    <RetroContainer>
      <RetroHeader>
        <RetroTitle>오늘의 기록</RetroTitle>
        <RetroExitButton src="/close_button.png"></RetroExitButton>
      </RetroHeader>
      <MiddleContainer>
        <RetroTitle>좋았던 점</RetroTitle>
        <TextArea
          onChange={(e) => handleChangeText(e.target.value, setGoodPoint)}
          placeholder="오늘 할 일들 중 어떤 부분이 좋았나요?"
        ></TextArea>
        <RetroTitle>아쉬웠던 점</RetroTitle>
        <TextArea
          onChange={(e) => handleChangeText(e.target.value, setBadPoint)}
          placeholder="오늘 한 일들 중 어떤 부분이 아쉬웠나요?"
        ></TextArea>

        <SatisfyContainer>
          <SatisfyWrapper>
            <RetroTitle>만족도</RetroTitle>
            <StarCountWrapper>
              {starCountList.map((star, index) => {
                if (curSelectedStarIndex >= index) {
                  return (
                    <StarCount
                      key={star}
                      selected={true}
                      onClick={() => setCurSelectedStarIndex(index)}
                    ></StarCount>
                  );
                }

                return (
                  <StarCount
                    key={star}
                    selected={false}
                    onClick={() => setCurSelectedStarIndex(index)}
                  ></StarCount>
                );
              })}
            </StarCountWrapper>
          </SatisfyWrapper>
        </SatisfyContainer>
      </MiddleContainer>
      <CommonButton type="button" onClick={handleSubmitRetrospect}>
        제출하기
      </CommonButton>
      <CommonButton type="button">다음에 작성하기</CommonButton>
    </RetroContainer>
  );
};

export default Retrospect;
