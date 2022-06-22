import styled from 'styled-components';

export const H1 = styled.h1<any>`
    font-size: 2.25rem;
    color: black;
    font-weight: bold;
    ${(props) => props.customStyle};
`;

export const H2 = styled.h2<any>`
    font-size: 2rem;
    color: #FEFEFE;
    font-weight: bold;
    ${(props) => props.customStyle};
`;

export const H3 = styled.h3<any>`
    font-size: 1.75rem;
    color: #FEFEFE;
    ${(props) => props.customStyle};
`;

export const Text = styled.p<any>`
    font-size: 1.15rem;
    color: #FEFEFE;
    ${(props) => props.customStyle};
`;

export const SubText = styled.p<any>`
    font-size: 1.15rem;
    color: #FEFEFE;
    ${(props) => props.customStyle};
`;