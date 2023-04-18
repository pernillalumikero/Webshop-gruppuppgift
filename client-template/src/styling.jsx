import styled from "styled-components"

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

`