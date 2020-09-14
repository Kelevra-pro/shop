import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAlert } from '../store/actions/alertActions';

export const Alert = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alertReducer);

  if (!alert.show) return null;

  return (
    <div
      className={`alert alert-${alert.alertType} alert-dismissible`}
      role="alert"
    >
      {alert.text}
      <button
        aria-label="Close"
        className="close"
        onClick={() => dispatch(hideAlert())}
        type="button"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
