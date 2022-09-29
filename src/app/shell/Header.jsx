import { Cart } from '../../components';
import { cartConnector } from '../../components/Cart/helpers/cartConnector';

const ConnectedCard = cartConnector(Cart)
export const Header = () =>
  <header>
    <div className='content'>
      <div className="end">
        <ConnectedCard />
      </div>
    </div>
  </header>