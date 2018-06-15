import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import TitleBar from '../../../components/molecules/TitleBar'
import IndexBox from '../../organisms/IndexBox'
import BaseModal from '../../../containers/modals/BaseModal'
import BaseSnackbar from '../../../containers/BaseSnackbar'

const style = {
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
  padding: '20px 20px 20px 20px',
}

const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <IndexBox />
      <Card style={style}>
        <CardHeader
          avatar={
            <Avatar
              backgroundColor={'#FFFFFF00'}
              src={'/title.png'}
            />
          }
          title={'SNUwagon?'}
          style={{ textAlign: 'center' }}
          titleStyle={{ color: colors.indigo300, fontSize: 40, textAlign: 'center' }}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <br /><br />
          {'SNUwagon은 서울대학교 학교생활과 관련한 정보를 사고 팔 수 있는 플랫폼입니다.'}
          <br /><br />
          {'날씨가 너무 좋아 자체휴강한 날, 과제가 나왔는지 알고 싶으신가요?'}
          <br />
          {'질문(Question)을 올려 정보를 구매해보세요!'}
          <br /><br />
          <span style={{ color: colors.indigo400, fontSize: 20 }}>{'오늘 소개원실 과제 나왔어요? '}</span>
          <span style={{ color: colors.orange800 }}>{'#과제 #자체휴강'}</span>
          <br /><br />
          {'시험 꿀팁을 공유하고 싶나요?'}
          <br />
          {'정보(Information)를 팔아보세요!'}
          <br /><br />
          <span style={{ color: colors.indigo400, fontSize: 20 }}>{'소개원실 기말고사 꿀팁 '}</span>
          <span style={{ color: colors.orange800 }}>{'#A+'}</span>
          <br /><br />
          {'찾고 싶은 정보를 검색(Search)하고!'}
          <br />
          {'답변, 태그 알림도 받아보세요!'}
        </CardText>
      </Card>
      <BaseModal />
      <BaseSnackbar />
    </div>
  )
}


export default HomePage
