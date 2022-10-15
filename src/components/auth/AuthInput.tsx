import styled from "styled-components";

export default function AuthInput() {
  return (
    <Form>
      <FormDiv>
        <Label htmlFor="email">이메일</Label>
        <Input type="email" id="email" />
      </FormDiv>
      <FormDiv>
        <Label htmlFor="nickname">별명</Label>
        <Input type="text" id="nickname" />
      </FormDiv>
      <FormDiv>
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" />
      </FormDiv>
      <FormDiv>
        <Label htmlFor="passwordCheck">비밀번호 확인</Label>
        <Input type="password" id="passwordCheck" />
      </FormDiv>
      <Submit>
        <P>회원가입</P>
      </Submit>
    </Form>
  );
}

const P = styled.p`
  width: 45px;
  height: 18px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  /* identical to box height, or 18px */

  /* material-theme/sys/light/on-primary */

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Submit = styled.button`
  /* 버튼 */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;

  width: 304px;
  height: 48px;

  /* material-theme/sys/light/primary

token=md.sys.color.primary

primary / on-primary

Regular text:
Level AA - ✅ Pass
Level AAA - ❌ Fail

Large text:
Level AA - ✅ Pass
Level AAA - ✅ Pass

Icons:
Level AA - ✅ Pass
*/
  background: #6750a4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 4;
  align-self: stretch;
  flex-grow: 0;
`;

const FormDiv = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 304px;
  height: 60px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const Label = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  padding: 0px;
  gap: 16px;
  font-size: 14px;
  height: 20px;

  /* Inside auto layout */

  flex: none;
  order: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  gap: 32px;

  position: relative;
  width: 320px;
  height: 448px;

  /* material-theme/sys/light/background

token=md.sys.color.background

background / on-background

Regular text:
Level AA - ✅ Pass
Level AAA - ✅ Pass

Large text:
Level AA - ✅ Pass
Level AAA - ✅ Pass

Icons:
Level AA - ✅ Pass
*/
  background: #fffbff;
  border-radius: 16px;
`;
const Input = styled.input`
  /* Frame 6 */

  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 304px;
  height: 32px;

  /* material-theme/sys/light/surface

token=md.sys.color.surface

surface / on-surface

Regular text:
Level AA - ✅ Pass
Level AAA - ✅ Pass

Large text:
Level AA - ✅ Pass
Level AAA - ✅ Pass

Icons:
Level AA - ✅ Pass
*/
  background: #fffbff;
  /* material-theme/sys/light/outline

token=md.sys.color.outline
*/
  border: 1px solid #7a757f;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;
