export type Position = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

export type Type = 'danger' | 'info' | 'success' | 'warning'

export interface ToastNotification {
  title: string
  description?: string
  type: Type
  icon?: string
}
