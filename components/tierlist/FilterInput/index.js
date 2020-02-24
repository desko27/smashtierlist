import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import DomainContext from '../../../domain/context'

import styles from './index.module.css'

const FilterInput = ({ gameSlug, setCharactersByTier }) => {
  const [search, setSearch] = useState('')
  const domain = useContext(DomainContext)
  const updatedSearchRef = useRef(search)
  const inputRef = useRef()

  useEffect(() => {
    updatedSearchRef.current = search
  }, [search])

  const applyFilter = useCallback(async value => {
    const hasValueArgument = typeof value !== 'undefined'
    const result =
      await domain.get('get_filtered_tierlist_use_case').execute(
        gameSlug,
        hasValueArgument ? value : updatedSearchRef.current
      )
    setCharactersByTier(result.rosterGroupedByTier)
  }, [gameSlug])

  const handleFocus = async () => applyFilter()
  const handleChange = async event => {
    const { value } = event.target
    setSearch(value)
    applyFilter(value)
  }

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode > 127) return // allow only ascii keys
      if (document.activeElement === inputRef.current) return
      inputRef.current.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInput}>
        <input
          ref={inputRef}
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
