import React from 'react'

import styles from './index.module.css'

const FilterInput = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInput}>
        <input
          className={styles.input}
          autoComplete='off'
          type='text'
          value=''
          onChange={() => {}}
          placeholder='Search characters...'
        />
      </div>
    </div>
  )
}

export default FilterInput
