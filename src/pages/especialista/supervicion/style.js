import styled from "styled-components";

export const ContainerSupervicion = styled.div`
  width: 100%;
  padding: 2rem;
`

export let InputSave = styled.label`
  display: block;
  border: ${({ state }) => !state ? '1px solid #B71111' : ''}; ;
  width: 100%;
  height: 2.3rem;
  background: ${({ theme }) => theme.text3};
  display: inline-flex;
  align-items:center;
  justify-content: space-between;
  border-radius: .2rem;
  box-shadow: 2px 2px 4px rgba(23,23,23,0.18);
  & input {
    background: ${({ theme }) => theme.text3};
    color: ${({ theme }) => theme.textinput};
    height: 2.1rem;
    border:none;
    outline: 0;
    width:90%;
    padding: 0 0.5rem;
    pointer-events:none;
  }
 @media screen and (min-width: 768px) {
  width: 60%;
  & input {
    width:95%;
  }
 }
`

export let EditIcon = styled.span`
  margin-right: 0.3rem;
  display: inline-block;
  overflow: hidden;
  width:1.2rem;
  height:1.2rem;
  cursor: pointer;
  & svg {
    width:1.2rem;
    height:1.2rem;
    fill:  ${({ theme, type }) => {
    switch (type) {
      case 'cancel':
        return 'red'
      case 'check':
        return 'green'
      default:
        return theme.textinput
    }
  }};
    position: relative;
    top: 0;

    & :hover{
      fill: ${({ type }) => {
    switch (type) {
      case 'cancel':
        return ''
      case 'check':
        return ''
      default:
        return '#CE920E'
    }
  }};
      transition: fill 450ms ease-out;
    }
  }
`