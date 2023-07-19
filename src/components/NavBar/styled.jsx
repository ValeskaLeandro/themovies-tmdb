import styled from "styled-components"

export const Header = styled.header`
  background: var(--dark-blue);
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid var(--ligth-blue);
  box-shadow: 0px 5px 5px -5px rgba(1,180,228,1);

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.open-search {
    + .InputSearch {
      top: 30px;
    }
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;  

  h2 a {
    display: flex;
    align-items: center;
    gap: .3rem;
    background: var(--main-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--ligth-green);
  }

  small {
    text-align: end;
    margin-top: -7px;
  }
  
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  font-weight: bold;

  a {
    text-decoration: none;    
    color: var(--text-color);
    transition: all .3s ease-in-out;
    padding: 0 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  a:hover {
    color: var(--ligth-green);
  }

  a.active {
    color: var(--ligth-blue);
  }


  @media (max-width: 950px){
    & {
      flex-direction: column;
      position: fixed;
      height: 100%;
      width: 70%;
      top: 0;
      right: -100%;
      align-items: baseline;
      z-index: 3;

      background-color:  var(--dark-blue); 
      align-items: center;
      padding: 1.5rem;
      font-size: 1.5rem;
    }

    li, a {
      width: 100%;
      padding: 1rem;
      transition: all .5s ease-in-out;
    }

    a:hover {
      color: #fafafa;
    }

    &.open-menu {
      transition: all 0.5s ease-in-out;
      right: 0;
    }

    &.close-menu{
      transition: all 0.5s ease-in-out;
    }
  }

  @media (max-width: 400px){
    & {
      font-size: 1rem;
      width: 90%;
    }
  }
`

export const IconMenuMobile = styled.div`
  & {
    display: none;
  }

  @media (max-width: 950px){
    & {
      display: block;
      z-index: 4;
    }

    svg {
      font-size: 2.5rem;      
      opacity: .9;
    }
  }
`

export const ButtonSearch = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: -5px;  
`

export const InputSearch = styled.form`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  input {
    width: 70%;
    max-width: 1800px;
    padding: .5rem;
    border-radius: 0 0 .5rem .5rem;
    border: none;
    background-color: rgba(243, 243, 243, 0.8);
    color: #050505;
    
  }

  input:focus {
    outline: none;
  }

  &.open-search {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 950px) {
    input {
      width: 90%
    }
  }
  
`