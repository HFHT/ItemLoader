import './badge.css';

interface IBadge {
  icon: JSX.Element;
  onClick?(e: HTMLButtonElement | null): Function | void;
  onFocus?(e: HTMLButtonElement | null): Function | void;
  onBlur?(e: HTMLButtonElement | null): Function | void;
  label?: string;
  labelClass?: string;
  color?: string;
  content?: string;
  contentClass?: string;
}

export function Badge(badgeProps: IBadge) {

  const colors: any = {
    red: 'bg-red',
    blue: 'bg-blue',
    green: 'bg-green'
  }

  const color: string = badgeProps.color ? badgeProps.color : 'green';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    badgeProps.onClick && badgeProps.onClick(e.currentTarget.closest('button'));
  }

  const handleFocus = (e: React.MouseEvent<HTMLButtonElement>) => {
    badgeProps.onFocus && badgeProps.onFocus(e.currentTarget.closest('button'));
  }

  const handleBlur = (e: React.MouseEvent<HTMLButtonElement>) => {
    badgeProps.onBlur && badgeProps.onBlur(e.currentTarget.closest('button'));
  }

  !colors[color] && console.warn('Badge: invalid color provided')

  return (
    <div>
      <button title={badgeProps.label} onClick={(e) => handleClick(e)} onMouseEnter={(e) => handleFocus(e)} onMouseLeave={(e) => handleBlur(e)}>
        <div className="badge">
          {badgeProps.icon}
          {badgeProps.content && badgeProps.content !== '0' && <span className={`${colors[color]} content`}>{badgeProps.content}</span>}
        </div>
        <span className={`${badgeProps.labelClass} label`}>{badgeProps.label}</span>
      </button>
    </div>
  )
}