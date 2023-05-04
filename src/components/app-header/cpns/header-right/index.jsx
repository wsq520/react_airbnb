import React, { memo } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
import { useState, useEffect } from 'react'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  function profileCickHandle() {
    setShowPanel(true)
  }

  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // 这里涉及到事件冒泡和捕获的问题 这里采用了事件捕获方法解决显示隐藏的问题
    window.addEventListener("click", windowHandleClick, true)
    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className='profile' onClick={profileCickHandle}>
        <IconMenu />
        <IconAvatar />
        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item login'>登录</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight