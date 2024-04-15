export const radioUtil = (variant: string): number => {
  switch (variant) {
    case 'Did not know':
      return 1
    case 'Forgot':
      return 2
    case 'A lot of though':
      return 3
    case 'Confused':
      return 4

    case 'Knew the answer':
      return 5

    default:
      return 1
  }
}
