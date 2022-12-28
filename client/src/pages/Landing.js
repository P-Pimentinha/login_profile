import React from 'react';
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='login' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            xxx <span>xxx</span> xxx
          </h1>
          <p>
            Cred marfa crucifix migas cornhole. Blog chartreuse ugh polaroid,
            shabby chic gastropub street art asymmetrical bicycle rights. Master
            cleanse four dollar toast snackwave blog typewriter biodiesel
            everyday carry vibecession flannel heirloom small batch. Poutine sus
            paleo, tumeric swag jean shorts ennui kale chips edison bulb kitsch
            tilde. Ethical edison bulb four dollar toast twee, kombucha
            scenester meditation freegan church-key narwhal skateboard.
            Skateboard PBR&B meggings keffiyeh mixtape pok pok.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='xxx' className='img main-img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
