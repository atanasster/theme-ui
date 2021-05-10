import React from 'react';
import { RunOnlyConfiguration } from "@component-controls/core";
import { Link } from "@component-controls/components";
import { defaultLinks } from "@component-controls/app";
// import { swiss } from '../../preset-swiss/src'

const config: RunOnlyConfiguration =  {
  title: `theme-ui components`,
  description: `theme-ui components.`,
  author: 'component-controls',
  logo: 'https://raw.githubusercontent.com/system-ui/theme-ui/HEAD/packages/docs/static/logo.png',
  components: {
    playground: {
      openTab: 'source',
    }
  },
  links: [...defaultLinks, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Montserrat:400,700|Poppins:400,700,900|Roboto:400,600|Architects+Daughter",
  }],
  theme:{
    // ...swiss,
    pagecontainer: {
      default: {
        px: [2, 3],
        maxWidth: '1400px',
      }
    },
    appheader: {
      logo: {
        maxHeight: 40,
      },
    },
  },
  toolbar: {
    right: [
      {
        node: (
          <Link href="https://theme-ui.com">
            Theme UI
          </Link>
        ),
      }
    ]
  }
};

export default config;