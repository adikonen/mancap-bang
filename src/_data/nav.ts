export interface INav {
  route: string
  text: string
  isActive?: boolean
}

export const navlinkData: Array<INav> = [
  {
    route: '#home',
    text: 'home',
    isActive: false
  },
  {
    route: '#product',
    text: 'product',
    isActive: false
  }
]
