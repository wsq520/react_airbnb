import React, { memo, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import HomeSectionV1 from './cpns/home-section-v1'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo
  }), shallowEqual)

  // 派发事件
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
        {/* <div className='high-score'>
          <SectionHeader title={highScoreInfo?.title} />
          <SectionRooms roomList={highScoreInfo?.list} />
        </div> */}
      </div>
    </HomeWrapper>
  )
})

export default Home