import styled from "styled-components";

interface Props {
    backgroundColor: string;
}

export const SectionContainer = styled.div<Props>`
    width: 100%;
    min-height: 95vh;
    background: ${props => props.backgroundColor};
`;
