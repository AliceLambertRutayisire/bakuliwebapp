import React from "react";
import styled from "styled-components";

export const ForgotPasswordRootRoot1 = ({}) => {
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Button2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Button3Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <ForgotPasswordRootRootRoot>
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
                    src={`https://file.rendit.io/n/tQTLXcCwDa5qZORL9BvC.svg`}
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
      <BlackFlexColumn>
        <DialogBox>
          <FlexColumn5>
            <FlexRow1>
              <Text6>Forgot password</Text6>
              <Vuesaxlineareye
                src={`https://file.rendit.io/n/vuqYaa0W5lzB6u86isPh.svg`}
              />
            </FlexRow1>
            <EmailAddress1>Enter your email address</EmailAddress1>
          </FlexColumn5>
          <FlexColumn6>
            <FlexRow2>
              <Button2 onClick={(e) => Button2Function(e, "Button2")}>
                Cancel
              </Button2>
              <Button3 onClick={(e) => Button3Function(e, "Button3")}>
                Submit
              </Button3>
            </FlexRow2>
          </FlexColumn6>
        </DialogBox>
      </BlackFlexColumn>
    </ForgotPasswordRootRootRoot>
  );
};

const Vuesaxlineareye = styled.img`
  width: 24px;
  height: 24px;
`;
const ForgotPasswordRootRootRoot = styled.div`
  width: 1440px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  overflow: hidden;
`;
const FlexColumn = styled.div`
  width: 583px;
  left: 428px;
  top: 128px;
  position: absolute;
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
  background-color: #4c8414;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
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
const BlackFlexColumn = styled.div`
  height: 971px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 120px 402px;
  background-color: rgba(22, 22, 29, 0.3);
  overflow: hidden;
`;
const DialogBox = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const FlexColumn5 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexRow1 = styled.div`
  width: 572px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const Text6 = styled.div`
  color: #16161d;
  font-size: 24px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 36px;
  white-space: nowrap;
`;
const EmailAddress1 = styled.div`
  width: 540px;
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
const FlexColumn6 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexRow2 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Button2 = styled.button`
  width: 246px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-top: 11px;
  padding-right: 15px;
  padding-bottom: 11px;
  padding-left: 15px;
  color: #4c8414;
  font-size: 18px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
  border-width: 0px;
  border-radius: 12px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #4c8414;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
`;
const Button3 = styled.button`
  width: 246px;
  gap: 10px;
  display: flex;
  flex-grow: 1;
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
  background-color: #4c8414;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
