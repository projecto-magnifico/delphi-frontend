import React from 'react'
import * as three from 'three'
import ReactDOM from 'react-dom'

class Earth extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const{width, height} = this.props
        const Scene = new three.Scene()
        const Camera = new three.PerspectiveCamera(75, width/height, 0.1, 1000)
        const Renderer = new three.WebGLRenderer()
        Renderer.setSize(width, height)
        this.refs.anchor.appendChild(Renderer.domElement)

        const Geometry = new three.SphereGeometry( 3, 32, 32, 4 )
        const Material = new three.MeshBasicMaterial({color: "tomato", transparent: true, opacity: 0.8, wireframe: true})
        const Globe = new three.Mesh(Geometry, Material)

        Scene.add(Globe)
        Scene.background = new three.Color('white')
        Camera.position.z = 5

        function GlobeLoop () {
            requestAnimationFrame(GlobeLoop)
            Globe.rotation.x += 0.015
            Globe.rotation.y += 0.015
            Renderer.render(Scene, Camera)
        }
        GlobeLoop()
    }

    render () {
        const{width, height} = this.props
        const style={
            width: width,
            height: height,
            backgroundColor: "rgb(255, 255, 255)",
            margin: '0 auto',
            padding: '0px'
        }


        return (
            <div>
                <div ref="anchor" style={style}>

                </div>
            </div>
        )
    }
}

export default Earth