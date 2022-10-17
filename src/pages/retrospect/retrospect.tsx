import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router";
import { authState } from "../../atoms/atoms";
import { strictModeState } from "../preference/atoms";
import useFireReq from "../../hooks/useFireReq";
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

const Retrospect = ({ handleExit }: { handleExit: () => void }) => {
  const strictMode = useRecoilValue(strictModeState);
  const navigate = useNavigate();
  const [curSelectedStarIndex, setCurSelectedStarIndex] = useState<number>(2);

  const [goodPoint, setGoodPoint] = useState<string>("");

  const [badPoint, setBadPoint] = useState<string>("");

  const { removeTodoListFireBase, addRetrospectFireBase } = useFireReq();

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

  const handleSubmitRetrospect = async () => {
    // 회고록 제출
    // firestore 컬렉션 문서들이 삭제. (해당 id의 컬렉션 전체 삭제)
    await removeTodoListFireBase();

    // firestroe에 회고록 데이터 추가. (회고록 데이터가 들어갈 내용들은..? todo도 넣을까??)
    addRetrospectFireBase({
      goodPoint: goodPoint,
      badPoint: badPoint,
      curSelectedStarIndex: curSelectedStarIndex,
      date: new Date(),
    });

    // 새로고침
    location.reload();
  };

  return (
    <RetroContainer>
      <RetroHeader>
        <RetroTitle>오늘의 기록</RetroTitle>
        {!strictMode.strictMode && (
          <RetroExitButton
            src="/close_button.png"
            onClick={handleExit}
          ></RetroExitButton>
        )}
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

      {!strictMode.strictMode && (
        <CommonButton type="button">다음에 작성하기</CommonButton>
      )}
    </RetroContainer>
  );
};

export default Retrospect;
