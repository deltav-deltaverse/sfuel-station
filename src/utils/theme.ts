interface ITheme {
    colors: {
        [key: string]: string
    };
    borderRadius: string;
    border: {
        [key: string]: string;
    }
}

export const Theme: ITheme = {
    colors: {
        primary: '#DD1173',
        secondary: '#350E47',
        background: '#444'
    },
    borderRadius: '16px',
    border: {
        defaultWidth: '0.5px',
        defaultColor: '#333'
    }
}

export const BorderRadius = () => `border-radius: ${Theme.borderRadius};`;
export const Border = (width: string = Theme.border.defaultWith, color: string = Theme.border.defaultColor) => `border: ${width} solid ${color}`;