import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,
     FooterWrap, 
     FooterLinksContainer, 
     FooterLinksWrapper, 
     FooterLinkItems,
    FooterLinkTitle, 
    FooterLinks, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcon, 
    SocialIconLink } from './FooterElements'


const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLinks to="/">How it works</FooterLinks>
                                <FooterLinks to="/">Testimonials</FooterLinks>
                                <FooterLinks to="/">Careers</FooterLinks>
                                <FooterLinks to="/">Inventors</FooterLinks>
                                <FooterLinks to="/">Terms of Services</FooterLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLinks to="/">Contact</FooterLinks>
                                <FooterLinks to="/">Support</FooterLinks>
                                <FooterLinks to="/">Destination</FooterLinks>
                                <FooterLinks to="/">Sponserships</FooterLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLinks to="/">Submit Video</FooterLinks>
                                <FooterLinks to="/">Ambassadors</FooterLinks>
                                <FooterLinks to="/">Agency</FooterLinks>
                                <FooterLinks to="/">Influencer</FooterLinks>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLinks to="/">Instagram</FooterLinks>
                                <FooterLinks to="/">Facebook</FooterLinks>
                                <FooterLinks to="/">Youtube</FooterLinks>
                                <FooterLinks to="/">Twitter</FooterLinks>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" 
                        onClick={toggleHome}>
                            Mula $
                        </SocialLogo>
                        <WebsiteRights>Mula © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcon>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
