import React from 'react';
import classnames from 'classnames';

import './Dialog.css';

export default ({ visible }) => (
    <form className={classnames('Dialog', { show: visible })} />
);
