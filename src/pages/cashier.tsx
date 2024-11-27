import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CashierView } from 'src/sections/cashier/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Cashier - ${CONFIG.appName}`}</title>
      </Helmet>

      <CashierView />
    </>
  );
}
