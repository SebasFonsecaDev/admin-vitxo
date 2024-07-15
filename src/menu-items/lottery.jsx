// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import ChromeOutlined from '@ant-design/icons/ChromeOutlined';

// type

// icons
const icons = { ChromeOutlined };

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const lottery = {
  id: 'sorteo',
  title: <FormattedMessage id="Sorteo" />,
  type: 'group',
  url: '/sorteo',
  icon: icons.ChromeOutlined
};

export default lottery;
