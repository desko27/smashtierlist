import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import DomainContext from '../../../domain/context'

import EyeIcon from '../../icons/eye.svg'
import EyeSlashIcon from '../../icons/eye-slash.svg'

import styles from './index.module.css'

const FilterInput = ({ gameSlug, setCharactersByTier }) => {
  const domain = useContext(DomainContext)

  const [search, setSearch] = useState('')
  const [filterMode, setFilterMode] = useState()
  const updatedSearchRef = useRef(search)
  const inputRef = useRef()

  useEffect(() => {
    domain.get('settings__get_setting_use_case').execute('filterMode').then(setFilterMode)
  }, [])

  useEffect(() => {
    updatedSearchRef.current = search
  }, [search])

  const applyFilter = useCallback(async value => {
    const hasValueArgument = typeof value !== 'undefined'
    const result =
      await domain.get('tierlist__get_filtered_tierlist_use_case').execute(
        gameSlug,
        {
          searchString: hasValueArgument ? value : updatedSearchRef.current,
          filterMode
        }
      )
    setCharactersByTier(result.rosterGroupedByTier)
  }, [gameSlug, filterMode])

  const handleFocus = async () => applyFilter()
  const handleChange = async event => {
    const { value } = event.target
    setSearch(value)
    applyFilter(value)
  }

  const handleFilterModeToggle = () => {
    setFilterMode(mode => {
      const newValue = !mode
      domain.get('settings__set_setting_use_case').execute('filterMode', newValue)
      return newValue
    })
  }
  useEffect(() => search && applyFilter(), [search, filterMode])

  useEffect(() => {
    const handleKeyDown = ({ keyCode }) => {
      if (keyCode > 127) return // allow only ascii keys
      if (document.activeElement === inputRef.current) return
      inputRef.current.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

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
        <button className={styles.eyeButton} onClick={handleFilterModeToggle}>
          {filterMode ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
      </div>
    </div>
  )
}

FilterInput.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  setCharactersByTier: PropTypes.func.isRequired
}

export default FilterInput
