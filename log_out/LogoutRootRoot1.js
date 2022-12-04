import React from "react";
import styled from "styled-components";

export const LogOutRootRoot1 = ({}) => {
  const ToggleButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Button2Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <LogOutRootRootRoot>
      <NavigationMenu>
        <BakuliNewLogo
          src={`https://file.rendit.io/n/L45qXviitGYpe4FAuokg.png`}
        />
        <FlexRow>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/W94qrLkQNMHplnGcn9fN.svg`}
            />
            <Text1>Home</Text1>
          </NavigationLinks>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/224j0FntCCS7htSHVPDN.svg`}
            />
            <Text1>Food Log</Text1>
          </NavigationLinks>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/n7mXzrBxdp2RgxHgNOOf.svg`}
            />
            <Text1>Health Space</Text1>
          </NavigationLinks>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/POE0vDFLj4e53JDDIHOT.svg`}
            />
            <Text4>Settings</Text4>
          </NavigationLinks>
        </FlexRow>
        <Image1 src={`https://file.rendit.io/n/zanQv9TK2yJezZyIUsME.svg`} />
      </NavigationMenu>
      <FlexColumn>
        <WhiteFlexColumn>
          <FlexColumn1>
            <Text5>Notifications</Text5>
            <Line src={`https://file.rendit.io/n/rMsQUlvb9v2w3prA6n5D.svg`} />
          </FlexColumn1>
          <FlexRow1>
            <Paragraph>Receive notifications about weekly reports</Paragraph>
            <ToggleButton
              onClick={(e) => ToggleButtonFunction(e, "ToggleButton")}
            />
          </FlexRow1>
        </WhiteFlexColumn>
        <WhiteFlexColumn1>
          <FlexColumn1>
            <Text5>Account Management</Text5>
            <Line1>
              <Line2
                src={`https://file.rendit.io/n/rMsQUlvb9v2w3prA6n5D.svg`}
              />
            </Line1>
          </FlexColumn1>
          <FlexRow1>
            <Paragraph>Log out</Paragraph>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/7VEXRfk22OPvtfSdnwDt.svg`}
            />
          </FlexRow1>
          <FlexRow1>
            <DeleteAccount1>Delete account </DeleteAccount1>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/7VEXRfk22OPvtfSdnwDt.svg`}
            />
          </FlexRow1>
        </WhiteFlexColumn1>
      </FlexColumn>
      <BlackFlexColumn>
        <DialogBox>
          <FlexColumn3>
            <FlexRow2>
              <PasswordResetLink>Log Out</PasswordResetLink>
              <Vuesaxlinearhome
                src={`https://file.rendit.io/n/1GdzVe9l2pYnAW5mzra9.svg`}
              />
            </FlexRow2>
            <Text7>Are you sure you want to log out?</Text7>
          </FlexColumn3>
          <FlexColumn4>
            <FlexRow3>
              <Button1 onClick={(e) => Button1Function(e, "Button1")}>
                Cancel
              </Button1>
              <Button2 onClick={(e) => Button2Function(e, "Button2")}>
                Log Out
              </Button2>
            </FlexRow3>
          </FlexColumn4>
        </DialogBox>
      </BlackFlexColumn>
    </LogOutRootRootRoot>
  );
};

const NavigationLinks = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Vuesaxlinearhome = styled.img`
  width: 24px;
  height: 24px;
`;
const Text1 = styled.div`
  align-self: stretch;
  color: #414157;
  font-size: 18px;
  font-family: Inter;
  line-height: 28px;
  white-space: nowrap;
`;
const FlexColumn1 = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text5 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 12px;
  color: #16161d;
  font-size: 24px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 36px;
  white-space: nowrap;
`;
const FlexRow1 = styled.div`
  width: 784px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px;
`;
const Paragraph = styled.div`
  color: #16161d;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const LogOutRootRootRoot = styled.div`
  width: 1440px;
  height: 814px;
  position: relative;
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  overflow: hidden;
`;
const NavigationMenu = styled.div`
  width: 1296px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 72px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const BakuliNewLogo = styled.img`
  width: 47.9px;
  height: 48px;
  position: relative;
`;
const FlexRow = styled.div`
  position: relative;
  gap: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text4 = styled.div`
  align-self: stretch;
  color: #4c8414;
  font-size: 18px;
  font-family: Inter;
  line-height: 28px;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 72px;
  height: 8px;
  left: 1225px;
  top: 72px;
  position: absolute;
`;
const FlexColumn = styled.div`
  position: relative;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: center;
`;
const WhiteFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 24px 16px 24px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const Line = styled.img`
  width: 808px;
  height: 1px;
  align-self: stretch;
`;
const ToggleButton = styled.button`
  width: 48px;
  height: 24px;
  padding: 0px;
  border-width: 0px;
  box-sizing: content-box;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-image: url("https://file.rendit.io/n/21r5JvLbHIqN27s5u2My.svg");
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
const WhiteFlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 24px 8px 24px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const Line1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/rMsQUlvb9v2w3prA6n5D.svg");
`;
const Line2 = styled.img`
  width: 808px;
  height: 1px;
`;
const DeleteAccount1 = styled.div`
  color: #16161d;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: pre-wrap;
`;
const BlackFlexColumn = styled.div`
  height: 686px;
  left: 0px;
  top: 0px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 64px 514px;
  background-color: rgba(22, 22, 29, 0.4);
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
const FlexColumn3 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexRow2 = styled.div`
  width: 348px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const PasswordResetLink = styled.div`
  color: #16161d;
  font-size: 24px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 36px;
  white-space: nowrap;
`;
const Text7 = styled.div`
  width: 348px;
  color: #16161d;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
`;
const FlexColumn4 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const FlexRow3 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Button1 = styled.button`
  width: 134px;
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
const Button2 = styled.button`
  width: 134px;
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
  background-color: #cc0f03;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  } ;
`;
