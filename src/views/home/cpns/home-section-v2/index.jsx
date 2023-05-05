import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props

  const initalName = Object.keys(infoData.dest_list)[0]
  // useState设置初始化值只会在组件首次渲染时才能设置成功
  // 比如 initalName是在第二次渲染时才有值 那么name还是空值 所以我们要控制组件渲染时机
  const [name, setName] = useState(initalName)

  const tabNames = infoData?.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback((index, item) => {
    setName(item)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2