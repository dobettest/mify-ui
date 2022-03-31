import React, { ReactNode, FC, ButtonHTMLAttributes, LinkHTMLAttributes } from "react";
import classnames from "classnames"
export interface BaseButtonProps {
    /**设置按钮大小 */
    size?: 'large' | 'middle' | 'small',
    /**设置按钮类型 */
    btnType?: 'primary' | 'default' | 'danger' | 'link',
    /**按钮失效状态 */
    disabled?: boolean,
    /**按钮额外样式 */
    className?: string,
    children: ReactNode,
    /**点击跳转的地址，指定此属性 button 的行为和 a 链接一致 */
    href?: string
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
type AnchorButtonProps = BaseButtonProps & LinkHTMLAttributes<HTMLAnchorElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
const Button: FC<ButtonProps> = props => {
    const { size, btnType, disabled, className, children, href, ...resetProps } = props;
    let classNames = classnames('button', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: (btnType === 'link') && disabled
    })
    if (btnType === 'link' && href) {
        return <a href={href} {...resetProps} className={classNames}>
            {children}
        </a>
    } else {
        return <button disabled={disabled} className={classNames}>
            {children}
        </button>
    }
}
Button.defaultProps = {
    disabled: false,
    size: 'middle',
    btnType:'default'
}
export default Button;