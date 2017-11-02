import React from 'react'
import * as three from 'three'
import ReactDOM from 'react-dom'
import OrbitControls from 'three-orbitcontrols'
import cities from "./utils/utils.js"
import locIcon from '../maps/location-Icon.png';
import PT from 'prop-types';

class Earth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            context: null
        }
    }

    componentDidMount() {
        const { width, height } = this.props
        const Scene = new three.Scene()
        const Renderer = new three.WebGLRenderer()
        Renderer.setSize(width, height)
        this.refs.anchor.appendChild(Renderer.domElement)
        Renderer.shadowMap.enabled = true
        Renderer.shadowMap.type = three.PCFSoftShadowMap

        const earthDayProfile = {
            color: '#595959',
            map: Loader.load('https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57730/land_ocean_ice_8192.png')
        }

        const earthNightProfile = {
            color: '#404040',
            map: Loader.load('https://eoimages.gsfc.nasa.gov/images/imagerecords/79000/79765/dnb_land_ocean_ice.2012.3600x1800.jpg'),
            specularMap: Loader.load('http://blog.apoapsys.com/assets/melted-ice/melted-ice-specular-4096x2048.jpg'),
            metalness: 0.0,
            roughness: 1.0,
            // bumpMap: Loader.load('http://naturalearth.springercarto.com/ne3_data/16200/elev_bump_16k.jpg'),
            // bumpScale: 0.5,
        }

        const Geometry = new three.SphereGeometry(3, 32, 32);
        const Loader = new three.TextureLoader();
        const Material = new three.MeshStandardMaterial(earthNightProfile);
        const Globe = new three.Mesh(Geometry, Material);

        const Camera = new three.PerspectiveCamera(75, width / height, 1, 1000)
        Camera.position.z = 5;

        const PositionLight = new three.PointLight('white', 6);
        PositionLight.position.set(1, 1, 2);
        Camera.add(PositionLight);
        Scene.add(Camera)

        const Controls = new OrbitControls(Camera, Renderer.domElement)
        Controls.enableDamping = true
        Controls.dampingFactor = 0.25
        Controls.enableZoom = false

        Scene.add(Globe)
        Scene.background = new three.Color('white')

        const Canvas = document.getElementById('openData');
        Canvas.width = 800;
        Canvas.height = 600;
        const CanvassMaterial = new three.MeshBasicMaterial()
        CanvassMaterial.map = new three.CanvasTexture(Canvas)
        CanvassMaterial.transparent = true
        CanvassMaterial.opacity = 0.6
        const DataGlobe = new three.Mesh(Geometry, CanvassMaterial)

        const context = Canvas.getContext('2d');

        Scene.add(DataGlobe)

        function GlobeLoop() {
            requestAnimationFrame(GlobeLoop)
            DataGlobe.rotation.y += 0.003
            Globe.rotation.y += 0.003
            Renderer.render(Scene, Camera)
        }
        GlobeLoop()

        this.setState({
            context: context
        })
    }

    componentWillReceiveProps(newProps) {
        const { context } = this.state;
        const tags = this.props.story.tags;
        const locations = tags.filter(tag => tag.type === 'location');
        const coordinates = locations.map(location => {
            let details = location.detail.split(',');
            return [details[0], details[1]];
        })
        this.addLines(context, coordinates[0], coordinates.slice(1));
    }

    addLines(context, startingPoint, endPoints) {
        context.beginPath();
        context.arc(...startingPoint, 2, 0, 2 * Math.PI);
        endPoints.forEach(endPoint => {
            context.lineTo(...endPoint);
            context.fillStyle = 'red';
            context.fill();
            context.strokeStyle = 'red';
            context.stroke();
        })
    }

    render() {
        const { width, height } = this.props
        const style = {
            width: width,
            height: height,
            backgroundColor: "rgb(255, 255, 255)",
            margin: '0px',
            marginRight: '0px',
            padding: '0px'
        }
        return (
            <div onClick={this.props.renderAlternativeView} className='tile earth'>
                <div ref="anchor" style={style}>
                </div>
                <canvas style={{ display: 'none' }} id="openData"></canvas>
            </div>
        )
    }

    static propTypes = {
        width: PT.number.isRequired,
        height: PT.number.isRequired,
        story: PT.object.isRequired
    }
}

export default Earth