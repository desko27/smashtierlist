import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import DomainContext from '../../../domain/context'

import styles from './index.module.css'

const FilterInput = ({ gameSlug, setCharactersByTier }) => {
  const [search, setSearch] = useState('')
  const domain = useContext(DomainContext)
  const getFilteredTierlistUseCaseRef = useRef()

  const handleFocus = async () => {
    getFilteredTierlistUseCaseRef.current =
      await domain.get('get_filtered_tierlist_use_case')
  }

  const handleChange = async event => {
    const { value } = event.target
    setSearch(value)

    const getFilteredTierlistUseCase = getFilteredTierlistUseCaseRef.current
    if (!getFilteredTierlistUseCase) return

    const result = await getFilteredTierlistUseCase.execute(gameSlug, value)
    setCharactersByTier(result.rosterGroupedByTier)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInput}>
        <input
          className={styles.input}
          autoComplete='off'
          type='text'
          value={search}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder='Search characters...'
        />
      </div>
    </div>
  )
}

FilterInput.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  setCharactersByTier: PropTypes.func.isRequired
}

export default FilterInput
