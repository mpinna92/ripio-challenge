import { AppContext } from 'next/app'
import { ThemeProvider } from '@emotion/react';
import { getSnapshot } from 'mobx-keystone'
import { AnimatePresence, motion } from 'framer-motion'

import { StoreProvider, initStore } from 'stores'
import { theme } from 'helpers/theme';
import { BgApp, Gradient } from 'components/layout/layout.styles';

const easing = [0.6, -0.05, 0.01, 0.99]
const containerVars = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      ease: easing
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.5,
      ease: easing,
    }
  },
}

export default function App({ Component, pageProps, initialState, router }: any) {
  return (
    <StoreProvider snapshot={initialState}>
      <ThemeProvider theme={theme}>
        <BgApp>
          <Gradient />
          <AnimatePresence exitBeforeEnter>
            <motion.div
              style={{ zIndex: 2, position: 'relative' }}
              initial={'hidden'}
              animate={'visible'}
              exit={'exit'}
              variants={containerVars}
              key={router.route}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </BgApp>
      </ThemeProvider>
    </StoreProvider>
  )
}

App.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const store = initStore()

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { initialState: getSnapshot(store), pageProps }
}


