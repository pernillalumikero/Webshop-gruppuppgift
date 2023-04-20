import styled from "styled-components"

export const Title = styled.h2`
  padding-top: 120px;
  padding-bottom: 20px;
  text-align: center;
`

export const Button = styled.button `
  all: unset;
  background: ${props => props.$primary 
                        ? "var(--primary-color)" : props.$secondary 
                        ? "var(--secondary-color)" : "var(--default-color)"};
  color: ${props => props.$primary || props.$secondary ? "white" : "black"};
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    transform: scale(1.1)
  }
`

export const Main = styled.main `

  a {
    padding-top: 125px;
    text-decoration: none;
    color: black;
  }

  #wrapper {
    margin: 0 auto;
    width: 65%;
    justify-content: space-around;
    display: flex;
    flex-flow: row nowrap;
  }

  #fake {
    width: 100px;
  }
`

