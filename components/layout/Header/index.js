import React from 'react'
import cx from 'classnames'

import useOnScreen from '../../hooks/useOnScreen'

import GameSelect from '../../tierlist/GameSelect'
import SuperTitle from '../../tierlist/SuperTitle'
import FilterInput from '../../tierlist/FilterInput'

import styles from './index.module.css'

const SHADOW_FILTER_OFFSET = 15
const PADDING_MOBILE_OFFSET = 10

const Header = () => {
  const [mainScrollFlagIsIntersecting, mainScrollFlagRef] = useOnScreen({ once: false })
  const [mobileScrollFlagIsIntersecting, mobileScrollFlagRef] = useOnScreen({ once: false })
  const isMainScrolling = !mainScrollFlagIsIntersecting
  const isMobileScrolling = !mobileScrollFlagIsIntersecting

  return (
    <>
      <div ref={mainScrollFlagRef} />
      <div
        className={
          cx(styles.wrapper,
            isMainScrolling && styles.wrapperScrolling,
            isMobileScrolling && styles.wrapperScrollingMobile)
        }
      >
        <div className={styles.wrapperFirstLine}>
          <SuperTitle>Smash Tier List.</SuperTitle>
          <GameSelect />
        </div>
        <div
          ref={mobileScrollFlagRef}
          style={{ transform: `translateY(${PADDING_MOBILE_OFFSET - SHADOW_FILTER_OFFSET}px)` }}
        />
        <div className={styles.wrapperBreakLine}>
          <FilterInput />
        </div>
      </div>
    </>
  )
}

export default Header
