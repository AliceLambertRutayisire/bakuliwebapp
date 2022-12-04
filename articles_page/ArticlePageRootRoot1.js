import React from "react";
import styled from "styled-components";

export const ArticlePageRootRoot1 = ({}) => {
  const TextButtonFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <ArticlePageRootRootRoot>
      <NavigationMenu>
        <BakuliNewLogo
          src={`https://file.rendit.io/n/t7ukMEwiuBjHvVBm3i1U.png`}
        />
        <FlexRow>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/DvsxwNNZCDfkVfnQFy3K.svg`}
            />
            <Text1>Home</Text1>
          </NavigationLinks>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/avWpMvjwPFUAGcYcioag.svg`}
            />
            <Text1>Food Log</Text1>
          </NavigationLinks>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/X8cGvDl98eBnRq3sE7Ql.svg`}
            />
            <Text3>Health Space</Text3>
          </NavigationLinks>
          <NavigationLinks>
            <Vuesaxlinearhome
              src={`https://file.rendit.io/n/OQPP3u66l34KzG31kxTy.svg`}
            />
            <Text1>Settings</Text1>
          </NavigationLinks>
        </FlexRow>
        <Image1 src={`https://file.rendit.io/n/WA9UhawLyDy6dfjNXPi3.svg`} />
      </NavigationMenu>
      <TextButton onClick={(e) => TextButtonFunction(e, "TextButton")}>
        <Image2 src={`https://file.rendit.io/n/b9gBBArIwJcONov31EKi.svg`} />
        <Button1>Back to Articles</Button1>
      </TextButton>
      <ArticleComponent>
        <FlexRow1>
          <FlexColumn>
            <ArticleTitle>Hair and Health</ArticleTitle>
            <FlexRow2>
              <Image3
                src={`https://file.rendit.io/n/a6hLRHAz2nSsYX2s6PMj.svg`}
              />
              <Text5>22h</Text5>
            </FlexRow2>
          </FlexColumn>
        </FlexRow1>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
          interdum morbi justo, vel nunc vitae nulla sed. Vel cras ullamcorper
          non sollicitudin risus. Duis tristique pellentesque amet amet
          faucibus. Turpis nam tempus convallis et arcu ipsum, morbi eu in.
          Sollicitudin accumsan, urna dignissim nullam condimentum consequat.
          Tristique tortor eget ut lacus, pellentesque luctus netus ultrices
          arcu. Ut sed metus, odio elit. Enim augue posuere diam ipsum lectus.
          Tincidunt nascetur lectus elementum, bibendum eget nunc feugiat sapien
          potenti. Amet phasellus cras quam volutpat aliquam molestie sit
          magnis. In risus nunc, nunc, nunc orci. Sodales consectetur quam massa
          nisl. Etiam est tortor facilisis etiam sapien. Non lorem amet, a sit.
          <br />
          Potenti libero at tincidunt amet feugiat vitae etiam tempor. Donec
          fames risus viverra rhoncus velit urna urna. Ut rutrum dignissim
          ultrices venenatis, montes. Ornare curabitur ac placerat morbi aenean
          faucibus aliquet. Cursus sem et sed quam vivamus cursus quis. Dui mi
          nisi, in ornare nulla at tincidunt lacinia. Aenean cursus a nulla
          suspendisse. Vitae cursus magna a nunc vel. At enim urna lorem
          habitant sed tempor. Feugiat nulla libero dui imperdiet. Feugiat
          convallis at in interdum. Sit aliquam consectetur arcu odio. Eget
          gravida phasellus sit sit proin scelerisque elit tortor erat.
          Ultricies diam phasellus nibh convallis elementum massa neque quis.
          Aliquam viverra sed suspendisse sapien porta integer sollicitudin.
          <br />
          Et id aliquet proin sit nullam elementum vitae. Ut aliquam, ipsum
          cursus consectetur vitae facilisi. Cras mi vestibulum etiam odio
          curabitur a ultrices phasellus. Amet, mauris natoque sit nunc. Luctus
          quis sed consectetur semper nulla et mattis. Elementum facilisis
          accumsan tempor duis morbi. Ultricies mauris quisque enim, tellus
          pharetra, iaculis commodo, nisl. Ut luctus lorem vestibulum semper.
          Tempor feugiat tristique scelerisque aliquam. Pretium habitant enim
          fermentum augue etiam ullamcorper. Scelerisque diam massa tortor amet,
          bibendum. Dolor in porttitor quis viverra ipsum fringilla pulvinar
          vitae. Dictum dis felis nunc ac dapibus venenatis eget turpis et.
          <br />
          Aliquet in tellus augue convallis. In blandit leo dignissim malesuada
          hendrerit sagittis, id velit. Quis nibh vestibulum pulvinar lectus
          varius vitae hendrerit. Ut velit augue purus id facilisi. Risus,
          gravida malesuada pellentesque lectus nullam tempor quis ut id.
          Ultricies eget pharetra, in gravida duis lorem pulvinar.
          <br />
          Vitae in at amet, fermentum, tristique. Nulla ullamcorper nunc
          imperdiet pellentesque. Purus in tincidunt iaculis aliquet interdum
          nullam sed. Suscipit tincidunt scelerisque adipiscing duis varius.
          Pretium nunc scelerisque cras posuere ipsum vel, massa. Quam non
          suspendisse at nisi, diam fames morbi. Dolor feugiat malesuada morbi
          neque, sapien, quam etiam. Amet, lacus volutpat amet, accumsan mi dui.
          Metus consectetur nunc iaculis diam a adipiscing cursus magna.
          Tincidunt fames cras consectetur nunc, platea hac donec. Morbi mauris
          luctus nam eu. Vitae sed et at integer vivamus urna. Mattis urna at
          suspendisse lectus tincidunt elementum massa.
        </Paragraph>
      </ArticleComponent>
    </ArticlePageRootRootRoot>
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
const ArticlePageRootRootRoot = styled.div`
  width: 1440px;
  height: 1173px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
`;
const NavigationMenu = styled.div`
  width: 1296px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
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
const Text3 = styled.div`
  align-self: stretch;
  color: #4c8414;
  font-size: 18px;
  font-family: Inter;
  line-height: 28px;
  white-space: nowrap;
`;
const Image1 = styled.img`
  width: 116px;
  height: 8px;
  left: 1062px;
  top: 72px;
  position: absolute;
`;
const TextButton = styled.button`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: center;
  margin: 0px 0px 0px 72px;
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
const Image2 = styled.img`
  width: 20px;
  height: 20px;
`;
const Button1 = styled.div`
  color: #4c8414;
  font-size: 18px;
  font-weight: 600;
  font-family: Manrope;
  line-height: 28px;
  white-space: nowrap;
`;
const ArticleComponent = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 32px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px 0px rgba(0, 0, 0, 0.3);
`;
const FlexRow1 = styled.div`
  width: 1012px;
  gap: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const ArticleTitle = styled.div`
  align-self: stretch;
  color: #16161d;
  font-size: 20px;
  font-weight: 700;
  font-family: Manrope;
  line-height: 30px;
  white-space: nowrap;
  letter-spacing: 0.1px;
`;
const FlexRow2 = styled.div`
  gap: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Image3 = styled.img`
  width: 4px;
  height: 4px;
`;
const Text5 = styled.div`
  color: #575774;
  font-size: 12px;
  font-family: Manrope;
  line-height: 18px;
  white-space: nowrap;
`;
const Paragraph = styled.div`
  width: 1012px;
  color: #16161d;
  font-size: 18px;
  font-family: Manrope;
  line-height: 28px;
`;
