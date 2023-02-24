/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import useCard7 from 'components/Card7/useCard7'

const TypeQuest = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(250, 250, 250, 1)`,
  boxShadow: `0px 4px 6px rgba(3, 0, 161, 0.2)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `465px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}))

const Image1 = styled('div', {
  shouldForwardProp: (prop) => !['data'].includes(prop.toString()),
})(({ data }) => ({
  backgroundPosition: `center`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  width: `290px`,
  margin: `0px`,
  overflow: `hidden`,
  backgroundImage:
    `url(${data?.image})` ||
    `url(https://app.quest.ai/public_neo/52814/176499/assets/images/Card7_Image.png?tid=1677251660060)`,
}))

const TextButton = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px 40px 0px 28px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flexGrow: `1`,
  margin: `0px 0px 0px 22px`,
})

const Content = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
})

const About = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
})

const Label = styled('div')({
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
})

const Container = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(2, 136, 209, 1)`,
  borderRadius: `16px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `4px`,
  boxSizing: `border-box`,
  height: `28px`,
  margin: `0px`,
}))

const Typography = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `3px 6px`,
  boxSizing: `border-box`,
  margin: `0px`,
})

const Label1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `13px`,
  letterSpacing: `0.1599999964237213px`,
  textDecoration: `none`,
  lineHeight: `18px`,
  textTransform: `none`,
  margin: `0px`,
}))

const HotelName = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 10px`,
}))

const Details = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `28px 0px 0px 0px`,
})

const Title = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}))

const Price = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}))

const Rating = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `28px 0px 0px 0px`,
})

const Star = styled('img')({
  height: `15.83px`,
  width: `16.67px`,
  margin: `0px`,
})

const Rating1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.6)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  flexGrow: `1`,
  height: `21px`,
  margin: `0px 0px 0px 6px`,
}))

const Description = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 0.87)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `26px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `28px 0px 0px 0px`,
}))

const ButtonClicked = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(25, 118, 210, 1)`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  height: `48px`,
  width: `138px`,
  margin: `28px 0px 0px 0px`,
})

const ButtonContained = styled(Button)({
  margin: `28px 0px 0px 0px`,
})

function Card7(props) {
  const { data, fns } = useCard7(props)
  console.log('🚀 ~ file: Card7.jsx:292 ~ Card7 ~ data:', data)

  return (
    <TypeQuest className={props.className}>
      <Image1 data={data?.data}></Image1>
      <TextButton>
        <Content>
          <About>
            <Label>
              <Container>
                <Typography>
                  <Label1>{`NEW`}</Label1>
                </Typography>
              </Container>
            </Label>
            <HotelName>{`Boutique Hotel`}</HotelName>
          </About>
          <Details>
            <Title>{data?.character?.name}</Title>
            <Price>{`$295 / night`}</Price>
          </Details>
          <Rating>
            <Star
              src={`assets/images/Card7_star.png`}
              loading="lazy"
              alt={'star'}
            />
            <Rating1>{`4.69 (239 reviews)`}</Rating1>
          </Rating>
          <Description>
            {`Lorem ipsum test to be seen and not read for placement only. Lorem ipsum test to be seen.`}
          </Description>
          {false && <ButtonClicked>{`Button Clicked!`}</ButtonClicked>}
          <ButtonContained
            variant="contained"
            size="large"
            color="primary"
            onClick={fns.changeImage}
          >
            {' '}
            Book ME{' '}
          </ButtonContained>
        </Content>
      </TextButton>
    </TypeQuest>
  )
}

export default Card7