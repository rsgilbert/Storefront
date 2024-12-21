import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Info } from './info'
import youtube from '../icons/youtube.png'
import twitter from '../icons/twitter.svg'
import facebook from '../icons/facebook.svg'
import whatsapp from '../icons/whatsapp.svg'
import instagram from '../icons/instagram.svg'
import { Icon } from './Icon'


export const Footer = props => {


    return (
        <footer className="footer">
            <p className="info-name"> {Info.name } </p>
            <p>{Info.contact }</p>
            <p className="info-email">{ Info.email }</p>
            <div className="social-media">
                <a className="social-link"
                    target="_blank"
                    href={Info.facebook}>
                    <Icon icon={facebook} />
                    <div className="social-name">
                        Facebook
                    </div>
                </a>
                <a className="social-link"
                    target="_blank"
                    href={Info.instagram}>
                    <Icon icon={instagram} />
                    <div className="social-name">
                        Instagram
                    </div>
                </a>
                <a className="social-link"
                    target="_blank"
                    href={Info.youtube}>
                    <Icon icon={youtube} />
                    <div className="social-name">
                        YouTube
                    </div>
                </a>
                <a className="social-link"
                    target="_blank"
                    href={Info.twitter}>
                    <Icon icon={twitter} />
                    <div className="social-name">
                        Twitter                        
                    </div>
                </a>
                <a className="social-link"
                    target="_blank"
                    href={Info.whatsapp}>
                    <Icon icon={whatsapp} />
                    <div className="social-name">
                        WhatsApp
                    </div>
                </a>
            </div>
        </footer>
    )
}