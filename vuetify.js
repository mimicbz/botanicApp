import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import {createVuetify} from "vuetify"
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import * as labsComponents from 'vuetify/labs/components'

export default createVuetify({

    components: {
        ...components,
        ...labsComponents,
    },
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.green.darken1,
                    secondary: colors.green.darken3,
                }
            }
        },
    },
})