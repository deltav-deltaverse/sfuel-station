import styled from "styled-components";

interface Props {
    backgroundColor?: string;
    backgroundImage?: string;
}

export const SectionContainer = styled.div<Props>`
    width: 100%;
    min-height: 95vh;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'none'};
    background-image: ${props => props.backgroundImage ? props.backgroundImage : 'none'};
    position: relative;
`;
