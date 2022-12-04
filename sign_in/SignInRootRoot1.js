import React from "react";
import styled from "styled-components";

export const SignInRootRoot1 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <SignInRootRootRoot>
      <FlexColumn>
        <Text1>Sign In</Text1>
        <FlexColumn1>
          <FlexColumn2>
            <FlexColumn3>
              <FlexColumn4>
                <EmailAddress>Username or email address</EmailAddress>
                <PasswordField>
                  <Text2>Password (at least 6 characters)</Text2>
                  <Vuesaxlineareye
                    src={`https://file.rendit.io/n/S9Z7yxbb6DkLBj09qRFQ.svg`}
                  />
                </PasswordField>
              </FlexColumn4>
              <Text3>Forgot password?</Text3>
            </FlexColumn3>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              Sign In
            </Button1>
          </FlexColumn2>
          <FlexRow>
            <Text4>New to Bakuli?</Text4>
            <Text5>Sign Up</Text5>
          </FlexRow>
        </FlexColumn1>
      </FlexColumn>
    </SignInRootRootRoot>
  );
};

const SignInRootRootRoot = styled.div`
  height: 955px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 128px 429px 128px 428px;
  background-color: #ffffff;
  overflow: hidden;
`;
const FlexColumn = styled.div`
  width: 583px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Text1 = styled.div`
  width: 583px;
  align-self: stretch;
  color: #32580d;
  font-size: 48px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 72px;
  text-align: center;
`;
const FlexColumn1 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const FlexColumn2 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
`;
const FlexColumn3 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn4 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
`;
const EmailAddress = styled.div`
  width: 384px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 11px 15px;
  color: #414157;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #414157;
`;
const PasswordField = styled.div`
  width: 384px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 15px;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #414157;
  background-color: #ffffff;
`;
const Text2 = styled.div`
  color: #414157;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const Vuesaxlineareye = styled.img`
  width: 24px;
  height: 24px;
`;
const Text3 = styled.div`
  color: #4c8414;
  font-size: 16px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 24px;
  white-space: nowrap;
`;
const Button1 = styled.button`
  width: 384px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
  border-width: 0px;
  border-radius: 12px;
  box-sizing: content-box;
  background-color: rgba(76, 132, 21, 0.5);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const FlexRow = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text4 = styled.div`
  color: #16161d;
  font-size: 18px;
  font-family: Inter;
  white-space: nowrap;
`;
const Text5 = styled.div`
  color: #4c8414;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  white-space: nowrap;
`;
