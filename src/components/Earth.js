import React from 'react'
import * as three from 'three'
import ReactDOM from 'react-dom'
import OrbitControls from 'three-orbitcontrols'
import cities from "./utils/utils.js"

class Earth extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const{width, height} = this.props
        const Scene = new three.Scene()
        const Renderer = new three.WebGLRenderer()
        Renderer.setSize(width, height)
        this.refs.anchor.appendChild(Renderer.domElement)
        Renderer.shadowMap.enabled = true
        Renderer.shadowMap.type = three.PCFSoftShadowMap

        const Light = new three.DirectionalLight('white', 6)
        Light.position.set( 1, 1, 1 ).normalize();
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
        
            color: '#404040', 
            map: Loader.load('https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79765/dnb_land_ocean_ice.2012.3600x1800.jpg'),

            specularMap: Loader.load('http://blog.apoapsys.com/assets/melted-ice/melted-ice-specular-4096x2048.jpg'),
            bumpMap: Loader.load('http://www.cgl.uwaterloo.ca/ecdfourq/courses/cs688/images/bumpearthTexture.jpg'),
            bumpScale: 1,
            metalness: 0.0,
            roughness: 1.0
        })
        const Globe = new three.Mesh(Geometry, Material)

        const Camera = new three.PerspectiveCamera(75, width/height, 1, 1000)
        Camera.position.z = 6

        const Controls = new OrbitControls(Camera, Renderer.domElement)
        Controls.enableDamping = true
        Controls.dampingFactor = 0.25
        Controls.enableZoom = false


        Scene.add(Globe)
        Scene.background = new three.Color('white')

        const Canvas = document.getElementById('openData');
        const CanvassMaterial = new three.MeshBasicMaterial()
        CanvassMaterial.map = new three.CanvasTexture(Canvas)
        CanvassMaterial.transparent = true
        CanvassMaterial.opacity = 0.6
        const DataGlobe = new three.Mesh(Geometry, CanvassMaterial)

        
        const context = Canvas.getContext('2d');
        console.log(cities)
        console.log(cities.findInSentence('Hello Cape Town',1));
        
        function addDataPoint (long, lat) {
            context.beginPath();
            context.arc(long,lat,0.8,0,2*Math.PI)
            context.fillStyle = '#FF0000';
            context.fill();
            context.lineWidth = 2;
            context.strokeStyle = 'red';
            context.stroke();
        }

        

        addDataPoint(88,41);
        addDataPoint(74.0060,40.7128)
        addDataPoint(50,45);
        addDataPoint(195,45);
        addDataPoint(150, 50)
        addDataPoint(160, 40)
        
         
        Scene.add(DataGlobe)

        function GlobeLoop () {
            requestAnimationFrame(GlobeLoop)
            DataGlobe.rotation.y += 0.003
            Globe.rotation.y += 0.003
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
            margin: '0px',
            marginRight: '0px',
            padding: '0px'
        }


        return (
            <div>
                <div ref="anchor" style={style}>
                </div>
                <canvas id="openData"></canvas>
            </div>
        )
    }
}

export default Earth