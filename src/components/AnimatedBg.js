import React, { PureComponent } from 'react'
import { debounce } from 'lodash'

export class AnimatedBg extends PureComponent {
  constructor(props) {
    super(props)
    this.c = React.createRef()
  }

  getContext = () => {
    const c = this.c.current

    const ctx = c.getContext('2d')

    c.width = window.innerWidth
    c.height = window.innerHeight

    let cubes = [],
      //more spacing less squares
      spacing = 30,
      xPos = 0,
      n = window.innerWidth / spacing,
      tSpeedFactor = [0.2, 0.4, 0.6, 0.8, 1],
      i

    const colors = ['#a5dff9', '#ef5285', '#feee7d']

    for (i = 0; i < n; i++) {
      cubes.push({
        x: xPos,
        y: Math.round(Math.random() * c.height),
        width: Math.round(Math.random() * 10) * 2,
        tSpeed: tSpeedFactor[Math.floor(Math.random() * tSpeedFactor.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: 0,
        upDownFactor: Math.random() >= 0.5 ? 1 : -1
      })
      xPos += spacing
    }

    const draw = () => {
      let i

      ctx.clearRect(0, 0, c.width, c.height)

      for (i = 0; i < n; i++) {
        ctx.save()
        ctx.translate(
          cubes[i].x + cubes[i].width / 2,
          cubes[i].y + cubes[i].width / 2
        )
        ctx.rotate(cubes[i].angle)
        ctx.fillStyle = cubes[i].color
        ctx.globalAlpha = 1
        ctx.fillRect(
          -cubes[i].width / 2,
          -cubes[i].width / 2,
          cubes[i].width,
          cubes[i].width
        )
        ctx.restore()

        cubes[i].y = cubes[i].y + cubes[i].tSpeed * cubes[i].upDownFactor
        cubes[i].angle += Math.PI / 360

        if (cubes[i].upDownFactor === -1) {
          if (cubes[i].y + cubes[i].width < 0) {
            cubes[i].y = c.height
          }
        } else if (cubes[i].upDownFactor === 1) {
          if (cubes[i].y >= c.height) {
            cubes[i].y = -cubes[i].width
          }
        }
      }
      window.requestAnimationFrame(draw)
    }

    draw()
  }

  componentDidMount() {
    this.getContext()
    window.addEventListener('resize', debounce(this.getContext, 500))
  }

  render() {
    return <canvas ref={this.c} style={{ position: 'fixed' }} />
  }
}

export default AnimatedBg
