import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/umerfarooq8743" target="_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/umer-farooq-react/ " target="_blank"><BsLinkedin/></a>
        <a href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-passport--passport-webapp&_ga=2.251615488.781012483.1680633488-1620599632.1671374839"><SiIndeed/></a>

    </div>
  )
}

export default HeaderSocials