import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import classNames from 'classnames';

interface PopupProps {
  visible: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  cancelText?: string;
  confirmText?: string;
  children: React.ReactNode;
  position?: 'bottom' | 'top' | 'center';
}

const Popup: React.FC<PopupProps> = ({
  visible,
  onClose,
  onConfirm,
  cancelText = '',
  confirmText = '',
  children,
  position = 'bottom',
}) => {
  const [shouldRender, setShouldRender] = useState(visible);

  useEffect(() => {
    if (visible) setShouldRender(true);
  }, [visible]);

  const handleAnimationEnd = () => {
    if (!visible) setShouldRender(false);
  };

  if (!shouldRender) return null;
/**Portal 是一种将组件挂载到 DOM 树之外的节点 的方式 */
  return ReactDOM.createPortal(
    <div className={styles.mask} onClick={onClose}>
      <div
        className={classNames(styles.popup, styles[position], {
          [styles.active]: visible,
          [styles.hidden]: !visible,
        })}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className={styles.content}>{children}</div>
        {(cancelText || confirmText) && (
          <div className={styles.footer}>
            {cancelText && (
              <div className={classNames(styles.button, styles.cancel)} onClick={onClose}>
                {cancelText}
              </div>
            )}
            {confirmText && (
              <div className={classNames(styles.button, styles.confirm)} onClick={onConfirm}>
                {confirmText}
              </div>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body // 把 popup 挂到 body，而不是原组件树下
  );
};

export default Popup;
