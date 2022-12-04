import React from "react";
import styled from "styled-components";

export const HomePageRootRoot1 = ({}) => {
  const TextButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <HomePageRootRootRoot>
      <Image1 src={`https://file.rendit.io/n/WoGrtgG8ntJM3hm7p2Fw.svg`} />
      <FlexColumn>
        <FlexRow>
          <WhiteFlexRow>
            <FlexColumn1>
              <WhiteFlexRow1>
                <FlexColumn2>
                  <FlexColumn3>
                    <Subtract1
                      src={`https://file.rendit.io/n/QCz5j4KIPzH15SFJeUpa.svg`}
                    />
                    <Ellipse1
                      src={`https://file.rendit.io/n/uk2OcxIaRJTHBBjSEyAo.svg`}
                    />
                  </FlexColumn3>
                </FlexColumn2>
                <RoundedFAB>
                  <Vuesaxlinearadd3
                    src={`https://file.rendit.io/n/VjaFHtuG9v8XY5DKqf3W.svg`}
                  />
                </RoundedFAB>
              </WhiteFlexRow1>
              <Text1>Hi, @healthybunnie!</Text1>
            </FlexColumn1>
          </WhiteFlexRow>
          <WhiteFlexRow2>
            <FlexColumn4>
              <FlexColumn5>
                <Text2>Today’s Food Intake</Text2>
              </FlexColumn5>
              <FlexColumn6>
                <FlexRow1>
                  <FlexColumn7>
                    <FlexColumn8>
                      <Text3>Key</Text3>
                      <FlexColumn9>
                        <FlexRow2>
                          <Text4>Vegetables</Text4>
                          <TertiaryVeg
                            src={`https://file.rendit.io/n/1e9aNyRVxSHhanwWOJux.svg`}
                          />
                        </FlexRow2>
                        <FlexRow2>
                          <Text4>Fruits</Text4>
                          <TertiaryVeg
                            src={`https://file.rendit.io/n/fdsigvSFz01WRwyx377m.svg`}
                          />
                        </FlexRow2>
                        <FlexRow2>
                          <Text4>Grains</Text4>
                          <TertiaryVeg
                            src={`https://file.rendit.io/n/1fTY8goAHwuM1OEEMaXA.svg`}
                          />
                        </FlexRow2>
                        <FlexRow2>
                          <Text4>Protein</Text4>
                          <TertiaryVeg
                            src={`https://file.rendit.io/n/YhKyUPX55dcgqnS91KqF.svg`}
                          />
                        </FlexRow2>
                      </FlexColumn9>
                    </FlexColumn8>
                    <TextButton
                      onClick={(e) => TextButtonFunction(e, "TextButton")}
                    >
                      <Button1>View More Details</Button1>
                      <Vuesaxlinearexport
                        src={`https://file.rendit.io/n/DEF8YBGt5pRAtI7lkD7h.svg`}
                      />
                    </TextButton>
                  </FlexColumn7>
                </FlexRow1>
              </FlexColumn6>
            </FlexColumn4>
          </WhiteFlexRow2>
        </FlexRow>
        <FlexRow>
          <WhiteFlexColumn>
            <Text8>Log New Meal</Text8>
            <FlexColumn10>
              <Text9>Select the meal of the day</Text9>
              <Dropdown>
                <Sex>Meal of the day</Sex>
                <Vuesaxlinearexport
                  src={`https://file.rendit.io/n/CJMcvRu1F5ZuPn45YuIU.svg`}
                />
              </Dropdown>
            </FlexColumn10>
            <FlexRow7>
              <FlexColumn11>
                <Text10>Meal</Text10>
                <FlexColumn12>
                  <FAB>
                    <Vuesaxlinearadd3
                      src={`https://file.rendit.io/n/F3JqM9kB5iQmKxGBhXWK.svg`}
                    />
                  </FAB>
                  <PokeBowlamico
                    src={`https://file.rendit.io/n/nVpKu2k3ukkCQZP0tD6E.svg`}
                  />
                </FlexColumn12>
              </FlexColumn11>
              <FlexColumn11>
                <Text10>Beverage</Text10>
                <FlexColumn12>
                  <FAB>
                    <Vuesaxlinearadd3
                      src={`https://file.rendit.io/n/F3JqM9kB5iQmKxGBhXWK.svg`}
                    />
                  </FAB>
                  <PokeBowlamico
                    src={`https://file.rendit.io/n/Hw6r0z9U6Z6oDf2of252.svg`}
                  />
                </FlexColumn12>
              </FlexColumn11>
            </FlexRow7>
          </WhiteFlexColumn>
          <WhiteFlexColumn1>
            <FlexColumn15>
              <Text10>Track Water Intake</Text10>
              <FlexColumn16>
                <FlexColumn5>
                  <Ellipse>
                    <Subtract>
                      <FlexColumn18>
                        <Ml2>
                          1200<Ml>/</Ml>
                          <Ml1>2000 ml</Ml1>
                        </Ml2>
                        <FlexColumn19>
                          <Text13>60%</Text13>
                          <Text14>Daily Goal</Text14>
                        </FlexColumn19>
                      </FlexColumn18>
                    </Subtract>
                  </Ellipse>
                </FlexColumn5>
              </FlexColumn16>
            </FlexColumn15>
            <WaterInput>
              <AddFAB>
                <Vuesaxlinearadd3
                  src={`https://file.rendit.io/n/87beUowmYM5xX6FotLY1.svg`}
                />
              </AddFAB>
              <WhiteText>ml</WhiteText>
              <RemoveFAB>
                <Vuesaxlinearadd3
                  src={`https://file.rendit.io/n/zJuH1TnE4X17oLj90ij0.svg`}
                />
              </RemoveFAB>
            </WaterInput>
          </WhiteFlexColumn1>
        </FlexRow>
      </FlexColumn>
    </HomePageRootRootRoot>
  );
};

const FlexRow = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Vuesaxlinearadd3 = styled.img`
  width: 32px;
  height: 32px;
`;
const FlexColumn5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexRow2 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Text4 = styled.div`
  width: 120px;
  color: #16161d;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
`;
const TertiaryVeg = styled.img`
  width: 128px;
  height: 28px;
  align-self: stretch;
`;
const Vuesaxlinearexport = styled.img`
  width: 20px;
  height: 20px;
`;
const FlexColumn11 = styled.div`
  width: 242px;
  height: 250px;
  gap: 11px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px 23px 15px 15px;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #d3d3de;
  overflow: hidden;
`;
const Text10 = styled.div`
  color: #16161d;
  font-size: 20px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 30px;
  white-space: nowrap;
  letter-spacing: 0.1px;
`;
const FlexColumn12 = styled.div`
  width: 168px;
  height: 201px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  padding: 0px 33px 0px 41px;
`;
const FAB = styled.div`
  left: 194px;
  top: 153px;
  position: absolute;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  border-width: 2px;
  border-radius: 12px;
  border-style: solid;
  border-color: rgba(76, 132, 21, 0.5);
  background-color: #ffffff;
`;
const PokeBowlamico = styled.img`
  width: 168px;
  height: 168px;
  position: relative;
`;
const HomePageRootRootRoot = styled.div`
  width: 1296px;
  height: 1094px;
  gap: 67.1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 72px;
  background-color: #ffffff;
  overflow: hidden;
`;
const Image1 = styled.img`
  width: 1294px;
  height: 60.9px;
`;
const FlexColumn = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
`;
const WhiteFlexRow = styled.div`
  width: 320px;
  gap: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 47px 48px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const FlexColumn1 = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const WhiteFlexRow1 = styled.div`
  width: 96.1px;
  position: relative;
  gap: 13px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  padding: 58px;
  border-radius: 250px;
  background-color: #f0f0f4;
`;
const FlexColumn2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexColumn3 = styled.div`
  width: 52.2px;
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 21.9px;
`;
const Subtract1 = styled.img`
  width: 96.1px;
  height: 48px;
  left: 0px;
  top: 52px;
  position: absolute;
`;
const Ellipse1 = styled.img`
  width: 52.2px;
  height: 52.2px;
  position: relative;
`;
const RoundedFAB = styled.div`
  left: 88.1px;
  top: 117px;
  position: absolute;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  border-width: 2px;
  border-radius: 48px;
  border-style: solid;
  border-color: #4c8414;
  background-color: #ffffff;
`;
const Text1 = styled.div`
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: #16161d;
  font-size: 20px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 30px;
  white-space: nowrap;
`;
const WhiteFlexRow2 = styled.div`
  width: 760px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 32px 48px 24px 48px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const FlexColumn4 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Text2 = styled.div`
  width: 288px;
  height: 28px;
  color: #16161d;
  font-size: 20px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 30px;
  letter-spacing: 0.1px;
`;
const FlexColumn6 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;
const FlexColumn7 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn8 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
  align-items: flex-start;
  padding: 0px 16px;
`;
const Text3 = styled.div`
  color: #16161d;
  font-size: 18px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const FlexColumn9 = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: stretch;
`;
const TextButton = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  border-width: 0px;
  border-radius: 12px;
  box-sizing: content-box;
  background: none;
  cursor: pointer;
  &: hover {
    opacity: 70%;
  } ;
`;
const Button1 = styled.div`
  color: #4c8414;
  font-size: 18px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const WhiteFlexColumn = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const Text8 = styled.div`
  align-self: flex-start;
  font-size: 20px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 30px;
  white-space: nowrap;
  letter-spacing: 0.1px;
`;
const FlexColumn10 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text9 = styled.div`
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const Dropdown = styled.div`
  width: 556px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  padding: 11px 15px;
  border-width: 1px;
  border-radius: 12px;
  border-style: solid;
  border-color: #414157;
  background-color: #ffffff;
`;
const Sex = styled.div`
  color: #414157;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const FlexRow7 = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const WhiteFlexColumn1 = styled.div`
  width: 423px;
  height: 462px;
  gap: 73px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-end;
  padding: 24px 189px 24px 24px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;
const FlexColumn15 = styled.div`
  width: 423px;
  gap: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: flex-start;
`;
const FlexColumn16 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-end;
`;
const Ellipse = styled.div`
  height: 258px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 0.34px 0px 0px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/cXo3dNqJab8P30zH9A3u.svg");
`;
const Subtract = styled.div`
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 61.5px 58.9px 61.9px 60.5px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/uKoFkNt0hbmmewWAFfbe.svg");
`;
const FlexColumn18 = styled.div`
  width: 138px;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Ml2 = styled.div`
  color: #6d6d91;
  font-size: 20px;
  font-family: Manrope;
  line-height: 30px;
  white-space: nowrap;
  letter-spacing: 0.1px;
`;
const Ml = styled.div`
  display: contents;
  color: #414157;
  font-size: 20px;
  font-family: Manrope;
  line-height: 30px;
  letter-spacing: 0.1px;
`;
const Ml1 = styled.div`
  display: contents;
  color: #16161d;
  font-size: 20px;
  font-family: Manrope;
  line-height: 30px;
  letter-spacing: 0.1px;
`;
const FlexColumn19 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Text13 = styled.div`
  align-self: stretch;
  color: #16161d;
  font-size: 48px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 72px;
  white-space: nowrap;
`;
const Text14 = styled.div`
  color: #6d6d91;
  font-size: 16px;
  font-family: Manrope;
  line-height: 24px;
  white-space: nowrap;
  letter-spacing: 0.1px;
`;
const WaterInput = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 3px 0px 0px;
`;
const AddFAB = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  border-width: 2px;
  border-radius: 12px;
  border-style: solid;
  border-color: rgba(28, 120, 227, 0.5);
  background-color: #ffffff;
`;
const WhiteText = styled.div`
  width: 76px;
  height: 28px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 14px;
  color: #414157;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
  border-width: 2px;
  border-radius: 12px;
  border-style: solid;
  border-color: #d3d3de;
  background-color: #ffffff;
`;
const RemoveFAB = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6px;
  border-width: 2px;
  border-radius: 12px;
  border-style: solid;
  border-color: rgba(204, 15, 3, 0.5);
  background-color: #ffffff;
`;
