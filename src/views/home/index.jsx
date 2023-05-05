import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'

import { HomeWrapper } from './style'
import HomeBanner from './cpns/home-banner'
import HomeSectionV1 from './cpns/home-section-v1'
import HomeSectionV2 from './cpns/home-section-v2'
import { isEmptyObject } from '@/utils'

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
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
        {
          isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />
        }
        {
          isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />
        }
        {
          isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />
        }
      </div>
    </HomeWrapper>
  )
})

export default Home