import instance from './instance'

const themeResource = {
  getThemeByLevel (level) {
    return instance.get('/theme/level/' + level)
  }
}

export default themeResource
