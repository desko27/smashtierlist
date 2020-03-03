import React, { useEffect, useState } from 'react'

import useOnScreen from '../../hooks/useOnScreen'

import HeartSolidIcon from '../../icons/heart-solid.svg'
import LinkedinBrandsIcon from '../../icons/linkedin-brands.svg'
import TwitterSquareBrandsIcon from '../../icons/twitter-square-brands.svg'
import GithubSquareBrandsIcon from '../../icons/github-square-brands.svg'
import ReactBrandsIcon from '../../icons/react-brands.svg'

import placeholderStyles from './placeholder.module.css'

const getDynamicStyles = () => import(
  /* webpackChunkName: "footerDynamicStyles" */
  './index.module.css'
)

const Footer = () => {
  const [isIntersecting, ref] = useOnScreen({ rootMargin: '300px' })
  const [styles, setStyles] = useState({})

  useEffect(() => {
    if (styles.wrapper || !isIntersecting) return
    getDynamicStyles().then(cssModule => setStyles(cssModule.default))
  }, [isIntersecting])

  return (
    <footer className={styles.wrapper} ref={ref}>
      {!isIntersecting || !styles.wrapper
        ? <div className={placeholderStyles.placeholder} />
        : (
          <>
            <img className={styles.footerTop} src='/svg/footer-top.svg' alt='Footer top' />
            <div className={styles.contentsWrapper}>
              <div className={styles.footerLine}>
                <span>Made with</span>
                <span>
                  <strong><HeartSolidIcon /></strong>
                </span>
                <span>by</span>
                <span><strong>desko27</strong></span>
              </div>
              <div className={styles.footerSeparator} />
              <div className={styles.socialIcons}>
                <a
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href='https://linkedin.com/in/desko27'
                  title="Desko27's LinkedIn"
                >
                  <LinkedinBrandsIcon />
                </a>
                <a
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href='https://twitter.com/desko27'
                  title="Desko27's Twitter"
                >
                  <TwitterSquareBrandsIcon />
                </a>
                <a
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  href='https://github.com/desko27'
                  title="Desko27's GitHub"
                >
                  <GithubSquareBrandsIcon />
                </a>
              </div>
              <div className={styles.footerSeparator} />
              <div className={styles.footerLine}>
                <span>Powered by</span>
                <span>
                  <strong><ReactBrandsIcon /></strong>
                </span>
                <span>React</span>
              </div>
            </div>
          </>
        )}
    </footer>
  )
}

export default Footer
