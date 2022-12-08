import React from 'react';
import './Notification.scss';

interface NotificationProps {
  type: 'info' | 'warning' | 'success' | 'error';
  message: string | null;
  title: string | null;
  link: string | null;
  linkText: string | null;
  shadow: boolean | false;
}

const Notification = ({
  type = 'info',
  title,
  message,
  link,
  linkText,
  shadow,
} : NotificationProps) => {

  let notificationClass = '';

  switch (type) {
    case 'success':
      notificationClass = 'ys-notification--success';
      break;
    case 'error':
      notificationClass = 'ys-notification--error';
      break;
    case 'warning':
      notificationClass = 'ys-notification--warning';
      break;
  }

  const shadowClass = shadow ? '' : ' shadow-none';
  return (
    <div className={'component-notification ys-notification ' + notificationClass + shadowClass}>
      <span className='ys-notification__icon' aria-hidden='true'>
        {type === 'info' &&
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 12'>
          <g fill='none' fillRule='evenodd'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5v6'/>
            <path fill='currentColor' d='M2 1a1 1 0 11-2 0 1 1 0 012 0'/>
          </g>
        </svg>
        }
        {type === 'warning' &&
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 12'>
          <g fill='none' fillRule='evenodd'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1v6'/>
            <path fill='currentColor' d='M2 11a1 1 0 11-2 0 1 1 0 012 0'/>
          </g>
        </svg>
        }
        {type === 'success' &&
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 10'>
          <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1.5 5.124L5.01 8.75l5.49-7.5'/>
        </svg>
        }
        {type === 'error' &&
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2 12'>
          <g fill='none' fillRule='evenodd'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1v6'/>
            <path fill='currentColor' d='M2 11a1 1 0 11-2 0 1 1 0 012 0'/>
          </g>
        </svg>
        }
      </span>
      <div className='ys-notification__content '>
        <p className='ys-notification__text'>
          <p className='ys-notification__text font-weight-bold'>{title}</p>
          {message}
          {link && (
            <a href={link} className='ys-notification__inline-link component-notification__link'>
              {linkText}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};
export default Notification;
