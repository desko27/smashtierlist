import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import useOnScreen from '../../hooks/useOnScreen'

import styles from './index.module.css'

function Character ({
  name,
  color,
  slug,
  gameSlug,
  visible
}) {
  const [isIntersecting, ref] = useOnScreen()

  const charSrcs = {
    png: `/chars/${gameSlug}/${slug}.png.150.png`,
    webp: `/chars/${gameSlug}/${slug}.png.150.png.webp`
  }

  return (
    <div
      className={cx(styles.wrapper, visible && styles.wrapperVisible)}
      ref={ref}
      itemProp='character'
      itemScope
      itemType='http://schema.org/Person'
    >
      {!isIntersecting
        ? <div className={styles.placeholder} />
        : (
          <>
            <div className={styles.imageWrapper}>
              <picture>
                <source srcSet={charSrcs.webp} type='image/webp' />
                <img itemProp='image' src={charSrcs.png} alt={name} />
              </picture>
            </div>
            <div
              className={cx(styles.name, name.length > 10 && styles.nameLarge)}
              style={{ '--color': color }}
            >
              <span itemProp='name'>{name}</span>
            </div>
          </>
        )}
    </div>
  )
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  gameSlug: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}

export default React.memo(Character)
