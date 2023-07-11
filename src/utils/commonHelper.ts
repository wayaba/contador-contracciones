export const getTwoDigits = (value: number): string => {
  return value.toString().padStart(2, '0')
}

export const getFormatedShortTime = (currentTime: number): string => {
  const minutes: number = Math.floor((currentTime % 3600) / 60)
  const seconds: number = currentTime % 60

  return `${getTwoDigits(minutes)}:${getTwoDigits(seconds)}`
}

export const getFormatedTime = (currentTime: number): string => {
  const hours: number = Math.floor(currentTime / 3600)
  const minutes: number = Math.floor((currentTime % 3600) / 60)
  const seconds: number = currentTime % 60

  return `${getTwoDigits(hours)}:${getTwoDigits(minutes)}:${getTwoDigits(seconds)}`
}
