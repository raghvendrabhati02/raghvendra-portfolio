declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
    strokeWidth?: string | number
  }
  export type Icon = FC<IconProps>
  export const Home: Icon
  export const Grid: Icon
  export const User: Icon
  export const FileText: Icon
  export const Mail: Icon
  export const Sun: Icon
  export const MessageSquare: Icon
  export const Terminal: Icon
  export const Code: Icon
  export const Code2: Icon
  export const Menu: Icon
  export const X: Icon
  export const Moon: Icon
}
