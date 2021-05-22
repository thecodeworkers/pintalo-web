import { ReactChild } from "react";

export type Button = {
  backgroundColor: string
  textColor: string
  method?: any
  bold?: boolean
  large?: string
  type?: any
  children: ReactChild
  showLoader?: boolean
}
