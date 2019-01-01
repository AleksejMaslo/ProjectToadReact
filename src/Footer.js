import React from 'react';
import './FooterStyle.css';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="main-footer">
                    <div className="page-width">
                        <div className="footer-text">
                            <p className="brand-family-title">Wizards brand family:</p>
                            <p className="brand-family-menu">
                                <a href="https://magic.wizards.com" target="_blank">Magic</a>
                                <span
                                    className="separator"> | </span>
                                <a
                                    href="http://dnd.wizards.com"
                                    target="_blank">D&amp;D</a>
                                <span
                                    className="separator"> | </span>
                                <a
                                    href="http://wpn.wizards.com/"
                                    target="_blank">wpn</a>
                            </p>
                            <p className="terms">
                                <a href="http://company.wizards.com/tou"
                                   target="_blank">Terms of
                                    Use</a><span
                                className="separator"> | </span><a
                                href="http://company.wizards.com/policies/web/privacy"
                                target="_blank">Privacy
                                Policy</a><span className="separator"> | </span><a
                                href="http://company.wizards.com/conduct"
                                target="_blank">Code of
                                Conduct</a><span className="separator"> | </span><a
                                href="http://company.wizards.com/policies/web/cookie"
                                target="_blank">Cookies</a><span
                                className="separator"> | </span><a
                                href="http://support.wizards.com/"
                                target="_blank">Customer Service</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}