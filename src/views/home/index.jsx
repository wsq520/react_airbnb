import React, { memo, useEffect, } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './cpns/home-banner'
import HomeSectionV1 from './cpns/home-section-v1'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual)

  const tabNames = discountInfo?.dest_address?.map(item => item.name)

  // 派发事件
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle} />
          <SectionTabs tabNames={tabNames} />
          <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.33%" />
        </div>
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
    </HomeWrapper>
  )
})

export default Home