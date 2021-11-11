import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Box } from "@chakra-ui/react";

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

function loadModel(scene) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader().setPath('/')
    
        loader.load(
            'benji.glb',
            gltf => {
                const obj = gltf.scene
                obj.name = 'dog'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = true
                obj.castShadow = true
                scene.add(obj)

                // console.log('model:', obj)

                obj.traverse(child => {
                    if (child.isMesh) {
                        child.castShadow = true
                        child.receiveShadow = true
                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject(error)
            }
        )
    })
}

// using pure three.js 
const VoxelBenji = () => {

    const refContainer = useRef()

    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            15 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
          const scW = container.clientWidth
          const scH = container.clientHeight
    
          renderer.setSize(scW, scH)
        }
      }, [renderer])

    useEffect(() => {

        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            // set renderer
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            const camera = new THREE.PerspectiveCamera(
                21,
                scW / scH,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            // console.log('camera:', camera)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)

            // load GLTF model
            loadModel(scene).then(() => {
                animate()
                setLoading(false)
            })

            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)

                frame = frame <= 40 ? frame + 1 : frame
    
                if (frame <= 40) {
                    const pos = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
    
                    camera.position.y = 15
                    camera.position.x = pos.x * Math.cos(rotSpeed) + pos.z * Math.sin(rotSpeed)
                    camera.position.z = pos.z * Math.cos(rotSpeed) - pos.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                } else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }
    
            return () => {
                // console.log('unmount')
                cancelAnimationFrame(req)
                renderer.dispose()
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
          window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <Box 
            ref={refContainer}
            h={["300px", "300px", "350px"]}
            w={["350px", "350px", "370px"]}
            position="relative"
        />
    )
}

export default VoxelBenji