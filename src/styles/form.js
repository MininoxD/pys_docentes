import styled from "styled-components";

export const FormStyle = styled.div`

    & .auth_titulo{
      text-align:center;
      text-transform:uppercase;
    }

    & .fake-button{
      display:flex;
      align-items:center;
      justify-content:center;
      width: 18rem;
      height: 40px;
      border-radius: 8px;
      border:none;
      color:${({ theme }) => theme.secondary};
      background:${({ theme }) => theme.primary};
    }

    & .spiner{
      margin-left:10px;
      margin-right:10px;
      border:4px solid rgba(0,0,0, .1);
      width:30px;
      height:30px;
      border-radius:50%;
      border-left-color:${({ theme }) => theme.secondary};

      animation: spin 1s ease infinite;
    }
    @keyframes spin{
      0%{
        transform:rotate(0deg);
      }
      100%{
        transform:rotate(360deg);
      }
    }

    & p{
      font-size: 1.7em;
      color: ${({ theme }) => theme.primary}
    }

    .text-error{
      font-size: 0.8em;
      font-style: oblique;
      color:red;
      margin-bottom: .5rem;
    }
    .input-icon{
      padding:0 .2rem;
      margin-bottom:20px;
      background-color:${({ theme }) => theme.secondary};
      border: 1px solid ${({ theme }) => theme.onePrimary};
      width: 20rem;
      height: 40px;
      display: inline-flex;
      align-items: center;
      border-radius:5px;
      box-sizing: border-box;
      & span{
        color: ${({ theme }) => theme.textinput};
        margin-left:10px;
      }
      & input{
        width:80%;
        background: ${({ theme }) => theme.secondary};
        border:none;
        outline: 0;
        font-size: 1.1em;
        ::placeholder { color: ${({ theme }) => theme.textinput};; }
      }
    }
    .input-icon.error{
      border: 1px solid red;
    }
    & form {
      display:flex;
      flex-direction:column;
      align-items:center;
      & input[type=submit]{
        width: 18rem;
        height: 40px;
        border-radius: 8px;
        border:none;
        color:${({ theme }) => theme.secondary};
        background:${({ theme }) => theme.primary};
      }
    }
`

export let FormModal = styled.div`
  & .text-input{
    margin-left: .5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.primary};
    align-self: flex-start;
  }
  & .fake-button{
    display:flex;
    align-items:center;
    justify-content:center;
    width: 18rem;
    height: 40px;
    border-radius: 8px;
    border:none;
    color:${({ theme }) => theme.secondary};
    background:${({ theme }) => theme.primary};
  }

  & .spiner{
    margin-left:10px;
    margin-right:10px;
    border:4px solid rgba(0,0,0, .1);
    width:30px;
    height:30px;
    border-radius:50%;
    border-left-color:${({ theme }) => theme.secondary};

    animation: spin 1s ease infinite;
  }
  @keyframes spin{
    0%{
      transform:rotate(0deg);
    }
    100%{
      transform:rotate(360deg);
    }
  }


  .text-error{
    font-size: 0.8em;
    font-style: oblique;
    color:red;
    margin-bottom: .5rem;
  }
  .input-icon{
    padding:0 .2rem;
    margin-bottom:20px;
    background-color:${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.onePrimary};
    width: 100%;
    height: 40px;
    display: inline-flex;
    align-items: center;
    border-radius:5px;
    box-sizing: border-box;
    & span{
      color: ${({ theme }) => theme.textinput};
      margin-left:10px;
    }
    & input{
      width:80%;
      background: ${({ theme }) => theme.secondary};
      border:none;
      outline: 0;
      font-size: 1.1em;
      ::placeholder { color: ${({ theme }) => theme.textinput};; }
    }
    & select{
      width:90%;
      background: ${({ theme }) => theme.secondary};
      border:none;
      outline: 0;
      font-size: 1.1em;
      color: ${({ theme }) => theme.textinput};
    }
  }
  .input-icon.error{
    border: 1px solid red;
  }

  .input-textarea{
    padding:0 .2rem;
    margin-bottom:20px;
    background-color:${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.onePrimary};
    border-radius:5px;
    box-sizing: border-box;
    width: 100%;
    & textarea {
      width:100%;
      background: ${({ theme }) => theme.secondary};
      border:none;
      outline: 0;
      font-size: 1.1em;
      ::placeholder { color: ${({ theme }) => theme.textinput};; }
    }
  }

  & form {
    display:flex;
    flex-direction:column;
    align-items:center;
    & input[type=submit]{
      width: 18rem;
      height: 40px;
      border-radius: 8px;
      border:none;
      color:${({ theme }) => theme.secondary};
      background:${({ theme }) => theme.primary};
    }
  }
`