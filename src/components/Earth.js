import React from 'react'
import * as three from 'three'
import ReactDOM from 'react-dom'
import OrbitControls from 'three-orbitcontrols'
import cities from "./utils/utils.js"
import locIcon  from '../maps/location-Icon.png';

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
        Camera.position.z = 5

        const PositionLight = new three.PointLight( 'white', 6 );
        PositionLight.position.set(1,1,2);
        Camera.add(PositionLight);
        Scene.add(Camera)

        const Controls = new OrbitControls(Camera, Renderer.domElement)
        Controls.enableDamping = true
        Controls.dampingFactor = 0.25
        Controls.enableZoom = false


        Scene.add(Globe)
        Scene.background = new three.Color('white')

        const Canvas = document.getElementById('openData');
        Canvas.width = this.props.width;
        Canvas.height = this.props.height;
        const CanvassMaterial = new three.MeshBasicMaterial()
        CanvassMaterial.map = new three.CanvasTexture(Canvas)
        CanvassMaterial.transparent = true
        CanvassMaterial.opacity = 0.6
        const DataGlobe = new three.Mesh(Geometry, CanvassMaterial)

        
        const context = Canvas.getContext('2d');    
        function addDataPoint (long, lat) {
            // var img1 = new Image();
            // img1.onload = function () {
            //     context.drawImage(img1, long, lat, 100, 100)
            // }
            // img1.src = locIcon;
            context.beginPath();
            context.arc(long,lat,2,0,2*Math.PI)

            context.moveTo(486,113);
            context.lineTo(230,180);
            context.lineWidth=0.5;

            context.moveTo(230,180);
            context.lineTo(530,353)

            context.fillStyle = 'red';
            context.fill();
            context.strokeStyle = 'red';
            context.stroke();
        }

        addDataPoint(486,113);
        addDataPoint(230,180);
        addDataPoint(530,353)
         
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
            <div className ='tile earth'>
                <div ref="anchor" style={style}>
                </div>
                <canvas style={{display: 'none'}}id="openData"></canvas>
            </div>
        )
    }
}

export default Earth