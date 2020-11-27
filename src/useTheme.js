import React, {useState, useEffect} from 'react'
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import storage from 'local-storage-fallback'
import style from 'styled-theming'
import theme from 'styled-theming';

export default function useTheme(
    defaultTheme = { mode: 'light' }
) {
    const [theme, _setTheme] = useState(getInitialTheme);
    
    function getInitialTheme() {
        const savedTheme = storage.getItem('theme');
        return savedTheme 
        ? JSON.parse(savedTheme) 
        : defaultTheme;
    }

    useEffect(
    () => {
        storage.setItem('theme', JSON.stringify(theme));
    },
    [theme]
    );

    return {
        ...theme,
        setTheme: ({setTheme, ...theme}) => _setTheme(theme)
    }
}