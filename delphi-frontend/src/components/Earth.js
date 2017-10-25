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
        Renderer.shadowMap.enabled = true
        Renderer.shadowMap.type = three.PCFSoftShadowMap

        const Light = new three.DirectionalLight('white', 4)
        Light.position.set( 1, 0, 1 ).normalize();
        Light.castShadow = true;
        Scene.add(Light)


        const Geometry = new three.SphereGeometry( 3, 32, 32 )
        const Loader = new three.TextureLoader()
        const Material = new three.MeshStandardMaterial(
            {
                //Day Earth
            // color: '#595959',
            // map: Loader.load('https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/land_ocean_ice_8192.png'),

                //Night Earth
            color: '#8c8c8c', 
            map: Loader.load('https://eoimages.gsfc.nasa.gov/images/imagerecords/55000/55167/earth_lights_lrg.jpg'),
            specularMap: Loader.load('https://static1.squarespace.com/static/58586fa5ebbd1a60e7d76d3e/t/59394abb37c58179160775fa/1496926933082/Ocean_Mask.png'),
            bumpMap: Loader.load('http://read.pudn.com/downloads83/sourcecode/graph/319133/earthbump.png'),
            bumpScale: 1,
            metalness: 0.0,
            roughness: 1.0
        })
        const Globe = new three.Mesh(Geometry, Material)

        Scene.add(Globe)
        Scene.background = new three.Color('white')
        Scene.ambient
        Camera.position.z = 5

        function GlobeLoop () {
            requestAnimationFrame(GlobeLoop)
            Globe.rotation.y += 0.005
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
            margin: '50px auto',
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