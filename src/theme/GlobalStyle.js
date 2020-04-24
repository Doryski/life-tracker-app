import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans', sans-serif;
        // background: ${props => props.theme.colors.primary};
    }
    div, section {
        border: 1px dotted black;
    }

    #root {
        max-height: 100vh;
        display: grid;
        grid-template-rows: 10vh 90vh;
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    code {
        font-family: 'Courier New', monospace;
    }

    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    button {
        cursor: pointer;
        // background: ${props => props.theme.colors.primary};
        text-align: center;
        // color: ${props => props.theme.colors.dark};
        border: 1px solid black;
    }
    
    input, select {
        // border: none;
        // background: ${props => props.theme.colors.primary};
        // color: ${props => props.theme.colors.dark};
    }

    label, p, h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.dark};
    }

    // scrollbar styling
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.light};
        border-radius: 15px; 
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.secondary};
        border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.primary}; 
    }

    // react-calendar styling
    .react-calendar {
        width: 350px;
        max-width: 100%;
        // background: ${props => props.theme.colors.dark2};
    }

    .react-calendar__navigation {
        height: 36px;
        margin: 0;
    }
    .react-calendar__navigation button {
        min-width: 44px;
        // background: ${props => props.theme.colors.primary};
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
        // background: ${props => props.theme.colors.secondary};
    }
    .react-calendar__navigation button[disabled] {
        // background: ${props => props.theme.colors.primary};
    }
    .react-calendar__month-view__weekdays {
        text-transform: none;
        // color: ${props => props.theme.colors.primary};
    }
    .react-calendar__month-view__weekdays__weekday {
        // background: ${props => props.theme.colors.primary};
    }
    .react-calendar__month-view__days__day--weekend {
        color: #d10000; // red weekends
    }
    .react-calendar__month-view__days__day--neighboringMonth {
        color: #757575; // grey 
    }
    .react-calendar__tile {
        max-width: 100%;
        padding: 0.75em 0.5em;
        // background: ${props => props.theme.colors.primary};
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
        // background: ${props => props.theme.colors.secondary};
    }
    .react-calendar__tile--hasActive {
        // background: ${props => props.theme.colors.primary};
    }
    .react-calendar__tile--hasActive:enabled:hover,
    .react-calendar__tile--hasActive:enabled:focus {
        // background: ${props => props.theme.colors.secondary};
    }
    .react-calendar__tile--active {
        // background: ${props => props.theme.colors.primary};
        // color: ${props => props.theme.colors.light};
    }
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        // background: ${props => props.theme.colors.secondary};
    }

    // react-date-picker styling
    .react-date-picker {
        // background: ${props => props.theme.colors.primary};
        width: 150px;
        // color: ${props => props.theme.colors.light};
    }
    .react-date-picker--disabled {
        // background-color: ${props => props.theme.colors.dark};
        // color: ${props => props.theme.colors.light};
    }
    .react-date-picker__wrapper {
        border: none;
    }
    .react-date-picker__wrapper & .react-date-picker--disabled {
        // background: ${props => props.theme.colors.dark};
    }
    .react-date-picker__inputGroup {
        min-width: 0px;
    }
    .react-date-picker__inputGroup__divider {
        padding: 0;
    }
    .react-date-picker__inputGroup__input {
        border: 0;
    }
    .react-date-picker__inputGroup__leadingZero {
        padding: 1px 0;
    }
    .react-date-picker__inputGroup__input:invalid {
        background: rgba(255, 0, 0, 0.2);
    }
    .react-date-picker__button {
        padding: 4px 4px;
    }
    .react-date-picker__button:enabled:hover .react-date-picker__button__icon,
    .react-date-picker__button:enabled:focus .react-date-picker__button__icon {
        // stroke: ${props => props.theme.colors.primary};
    }
    .react-date-picker__button:disabled .react-date-picker__button__icon {
        // stroke: ${props => props.theme.colors.dark};
    }
    .react-date-picker__button:disabled {
        cursor: auto;
    }
    .react-date-picker__button svg {
        // stroke: ${props => props.theme.colors.light};
    }
`
export default GlobalStyle
