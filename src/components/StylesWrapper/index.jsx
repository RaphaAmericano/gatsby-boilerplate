import React from 'react';
import P from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {  GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';

export const StyledWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};
StyledWrapper.propTypes = {
    children: P.node.isRequired,
};
