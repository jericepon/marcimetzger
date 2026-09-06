import icons, { type IconName } from "./icons"

type IconProps = {
  name: IconName
  fill?: string
  stroke?: string
  strokeWidth?: number
}

export const Icon = (props: IconProps) => {
  const iconPath = icons[props.name] ?? ""
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" aria-label={props.name}>
      {Array.isArray(iconPath) ? (
        iconPath.map((d, index) => (
          <path key={index} fill={props.fill ?? "currentColor"} stroke={props.stroke} strokeWidth={props.strokeWidth} d={d}/>
        ))
      ) : (
        <path fill={props.fill ?? "currentColor"} stroke={props.stroke} strokeWidth={props.strokeWidth} d={iconPath}/>
      )}
    </svg>
  )
}
