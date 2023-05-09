import styled from "styled-components";

const AppWrapper = styled.div`
  display:flex;
  flex-direction: column;
  min-height: 100vh;
`

const Container = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  align-items: center;
  &.grow {
    flex: 1 0 0;
  }
  &.justify-center {
    justify-content: center;
  }
`

const Row = styled.div`
    width: 100%;
    flex-direction: row;
    max-width: ${props => props.maxWidth ? props.maxWidth : '1200px'};
    display: flex;
    padding: 0 20px;
    gap: 20px;
  &.full-width{
    max-width: unset;
  }
  &.align-center {
    align-items: center;
  }
  &.align-top {
    align-items: start;
  }
  &.align-bottom {
    align-items: end;
  }
  &.justify-center {
    justify-content: center;
  } 
  &.justify-right {
    justify-content: right;
  }
  &.justify-space-between {
    justify-content: space-between;
  }
  &.no-padding {
    padding: unset;
  }
  &.no-gap {
    gap: unset;
  }
  &.grow {
    flex: 1 0 auto;
  }
`
const Column = styled.div `
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  &.align-center {
    align-items: center;
  }
  &.align-top {
    align-items: start;
  }
  &.align-right {
    align-items: end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-space-between {
    justify-content: space-between;
  }
  &.no-padding {
    padding: unset;
  }
  &.no-gap {
    gap: unset;
  }
  &.text-center {
    text-align: center;
  }
`

export {AppWrapper, Container, Row, Column}