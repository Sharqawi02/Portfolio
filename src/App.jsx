import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import './App.css'
import portraitImg from './assets/images/My.jpeg'
import schedularImg from './assets/images/Schedular.png'
import curaImg from './assets/images/Cura Quiz.png'
import cloudoImg from './assets/images/Cloudo.png'

const CONTACT_EMAIL = 'amjadsharqawi20@gmail.com'
const CONTACT_PHONE = '070-021 53 51'
const CONTACT_PHONE_LINK = '0700215351'
const CONTACT_LOCATION = 'Limhamn, Malmo'

const sections = [
  {
    id: 'home',
    title: 'Amjad Sharqawi',
    navLabel: 'Home',
    subtitle: 'Information architecture student',
    lines: [
      'Focused on full-stack development with a strong foundation in UX and information structure.',
      'Open to part-time and full-time roles while finishing my studies.',
    ],
  },
  {
    id: 'about',
    title: 'About',
    navLabel: 'About',
    subtitle: 'Engaged, practical, collaborative',
    lines: [
      'Flexible, detail-oriented, and punctual.',
      'Comfortable working independently or in teams.',
      'Strong focus on usability and clear information flow.',
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    navLabel: 'Experience',
    subtitle: 'Work experience',
    lines: [
      'Internship - Cloudo-AB (Sep 2025 - Jan 2026).',
      'Terminal Worker - Schenker (Mar 2024 - present).',
      'Warehouse Worker & Driver - Airmee (Jul 2022 - Nov 2023).',
    ],
  },
  {
    id: 'education',
    title: 'Education',
    navLabel: 'Education',
    subtitle: 'Malmo University',
    lines: [
      'Information Architecture (2023 - present).',
      'Web development, backend, databases, UX/UI, and security.',
      'Agile project work and client collaboration.',
    ],
  },
  {
    id: 'projects',
    title: 'Projects',
    navLabel: 'Projects',
    subtitle: 'Selected work',
    lines: [
      'Schedular: calendar planning app inspired by Google Calendar.',
      'Cura Quiz: interactive quiz with a clean, accessible flow.',
      'RAG Explorer: Google embeddings with Flash 2.5 light for retrieval-augmented answers.',
    ],
  },
  {
    id: 'skills',
    title: 'Skills',
    navLabel: 'Skills',
    subtitle: 'Core stack',
    lines: [
      'React, HTML/CSS, JavaScript, Python, Node.js, Flask.',
      'PostgreSQL + MySQL, REST APIs, UX/UI in Figma.',
      'RAG architecture, vector search, and evaluation workflows.',
      'Information architecture and content structuring.',
    ],
  },
  {
    id: 'references',
    title: 'References',
    navLabel: 'References',
    subtitle: 'Professional references',
    lines: [
      'StudentConsulting: Robert Nilsson.',
      'Airmee: Kemalettin Demirbas.',
      'Cloudo AB: Christofer Boatright.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    navLabel: 'Contact',
    subtitle: 'Let us talk',
    lines: [`Email: ${CONTACT_EMAIL}`, `Phone: ${CONTACT_PHONE}`, CONTACT_LOCATION],
  },
]

const imageSlides = [
  { src: portraitImg, label: 'Portrait', sections: ['home', 'about'] },
  { src: cloudoImg, label: 'Cloudo', sections: ['experience'] },
  { src: schedularImg, label: 'Schedular', sections: ['projects'] },
  { src: curaImg, label: 'Cura Quiz', sections: ['projects'] },
  { src: portraitImg, label: 'Portrait', sections: ['education', 'skills', 'references', 'contact'] },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const createGlowTexture = () => {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')
  if (!context) {
    return null
  }
  const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
  gradient.addColorStop(0.35, 'rgba(255, 208, 152, 0.75)')
  gradient.addColorStop(1, 'rgba(255, 208, 152, 0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

function App() {
  const stageRef = useRef(null)
  const targetIndexRef = useRef(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionList = useMemo(() => sections, [])

  const goToIndex = (index) => {
    const next = clamp(index, 0, sectionList.length - 1)
    targetIndexRef.current = next
    setActiveIndex(next)
  }

  useEffect(() => {
    if (!stageRef.current) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0b1020)
    scene.fog = new THREE.Fog(0x0b1020, 10, 30)

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 120)
    camera.position.set(0, 0.4, 7)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    stageRef.current.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.65)
    scene.add(ambient)
    const keyLight = new THREE.DirectionalLight(0xf6d7ff, 0.9)
    keyLight.position.set(6, 6, 4)
    scene.add(keyLight)
    const rimLight = new THREE.PointLight(0x66f2ff, 1.1, 18)
    rimLight.position.set(-5, 2, 8)
    scene.add(rimLight)
    const warmLight = new THREE.PointLight(0xff8f6b, 0.8, 14)
    warmLight.position.set(5, -2, 2)
    scene.add(warmLight)

    const floatGroup = new THREE.Group()
    scene.add(floatGroup)

    const materials = []
    const geometries = []
    const textures = []
    const trackMaterial = (material) => {
      materials.push(material)
      return material
    }
    const trackGeometry = (geometry) => {
      geometries.push(geometry)
      return geometry
    }
    const trackTexture = (texture) => {
      textures.push(texture)
      return texture
    }

    const sectionSpacing = 5.2
    const sectionBases = []
    const sectionIndexById = new Map()

    const getSectionPosition = (index) => {
      const z = -index * sectionSpacing
      const x = Math.sin(index * 0.55) * 1.6
      const y = Math.cos(index * 0.45) * 0.45
      return new THREE.Vector3(x, y, z)
    }

    sectionList.forEach((section, index) => {
      sectionBases.push(getSectionPosition(index))
      sectionIndexById.set(section.id, index)
    })

    const imageGroup = new THREE.Group()
    floatGroup.add(imageGroup)

    const textureLoader = new THREE.TextureLoader()
    const imageGeometry = trackGeometry(new THREE.PlaneGeometry(1, 1))
    const frameGeometry = trackGeometry(new THREE.PlaneGeometry(1, 1))

    const imageMeshes = []
    const imageFrames = []
    const imageBases = []
    const imageScales = []

    imageSlides.forEach((slide, index) => {
      let scale = { x: 3.6, y: 2.2 }
      const texture = trackTexture(
        textureLoader.load(slide.src, (loadedTexture) => {
          if (loadedTexture.image?.width && loadedTexture.image?.height) {
            const aspect = loadedTexture.image.width / loadedTexture.image.height
            const maxWidth = 4.2
            const maxHeight = 2.4
            let width = maxHeight * aspect
            let height = maxHeight
            if (width > maxWidth) {
              width = maxWidth
              height = width / aspect
            }
            scale = { x: width, y: height }
            imageScales[index] = scale
            imageMeshes[index]?.scale.set(scale.x, scale.y, 1)
            imageFrames[index]?.scale.set(scale.x * 1.08, scale.y * 1.08, 1)
          }
        })
      )
      texture.colorSpace = THREE.SRGBColorSpace
      texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8)

      const imageMaterial = trackMaterial(
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0.95,
        })
      )
      const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial)
      imageMesh.scale.set(scale.x, scale.y, 1)

      const frameMaterial = trackMaterial(
        new THREE.MeshBasicMaterial({
          color: 0x0b1b2f,
          transparent: true,
          opacity: 0.6,
        })
      )
      const frameMesh = new THREE.Mesh(frameGeometry, frameMaterial)
      frameMesh.scale.set(scale.x * 1.08, scale.y * 1.08, 1)
      frameMesh.position.z = -0.04

      const targetSectionId = slide.sections[0]
      const targetSectionIndex = sectionIndexById.get(targetSectionId) ?? 0
      const x = 0
      const y = 0.1
      const z = -sectionSpacing * (targetSectionIndex + 0.6)
      const base = new THREE.Vector3(x, y, z)
      imageBases.push(base)
      imageScales.push(scale)

      imageMesh.position.copy(base)
      imageMesh.rotation.y = 0
      frameMesh.position.x = imageMesh.position.x
      frameMesh.position.y = imageMesh.position.y
      frameMesh.position.z = imageMesh.position.z - 0.06
      frameMesh.rotation.copy(imageMesh.rotation)

      imageGroup.add(frameMesh)
      imageGroup.add(imageMesh)
      imageMeshes.push(imageMesh)
      imageFrames.push(frameMesh)
    })

    const skyGeometry = trackGeometry(new THREE.SphereGeometry(40, 32, 32))
    const skyMaterial = trackMaterial(
      new THREE.ShaderMaterial({
        uniforms: {
          topColor: { value: new THREE.Color(0x2b1b52) },
          bottomColor: { value: new THREE.Color(0x0b1020) },
          offset: { value: 0.2 },
          exponent: { value: 0.55 },
        },
        vertexShader: `
          varying vec3 vWorldPosition;
          void main() {
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 topColor;
          uniform vec3 bottomColor;
          uniform float offset;
          uniform float exponent;
          varying vec3 vWorldPosition;
          void main() {
            float h = normalize(vWorldPosition + offset).y;
            float t = pow(max(h, 0.0), exponent);
            gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
          }
        `,
        side: THREE.BackSide,
        depthWrite: false,
      })
    )
    const sky = new THREE.Mesh(skyGeometry, skyMaterial)
    scene.add(sky)

    const grid = new THREE.GridHelper(40, 80, 0x66f2ff, 0x1c2742)
    grid.position.y = -2.3
    grid.rotation.x = Math.PI / 2
    grid.material.transparent = true
    grid.material.opacity = 0.35
    scene.add(grid)

    const ringGeometry = trackGeometry(new THREE.TorusGeometry(1.4, 0.05, 16, 120))
    const ringMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: 0x7df9ff,
        metalness: 0.5,
        roughness: 0.2,
        emissive: 0x2f9bb7,
        emissiveIntensity: 0.7,
      })
    )
    const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.position.set(-2.2, 0.8, -sectionSpacing * 0.6)
    ring.rotation.x = Math.PI / 3
    scene.add(ring)

    const orbitGroup = new THREE.Group()
    scene.add(orbitGroup)
    const orbGeometry = trackGeometry(new THREE.SphereGeometry(0.18, 24, 24))
    const orbMaterial = trackMaterial(
      new THREE.MeshStandardMaterial({
        color: 0xff8f6b,
        metalness: 0.4,
        roughness: 0.25,
        emissive: 0xff6b4a,
        emissiveIntensity: 0.8,
      })
    )
    for (let i = 0; i < 4; i += 1) {
      const orb = new THREE.Mesh(orbGeometry, orbMaterial)
      orb.position.set(Math.sin(i) * 2.2, Math.cos(i * 1.3) * 1.1, -i * 2.2)
      orbitGroup.add(orb)
    }

    const glowTexture = createGlowTexture()
    let glowSprite = null
    if (glowTexture) {
      const glowMaterial = trackMaterial(
        new THREE.SpriteMaterial({
          map: glowTexture,
          color: 0xffc38f,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
        })
      )
      glowSprite = new THREE.Sprite(glowMaterial)
      glowSprite.position.set(2.6, 1.4, -sectionSpacing * 0.2)
      glowSprite.scale.set(2.2, 2.2, 1)
      scene.add(glowSprite)
    }

    const sparkGeometry = trackGeometry(new THREE.BufferGeometry())
    const sparkCount = 300
    const sparkPositions = new Float32Array(sparkCount * 3)
    for (let i = 0; i < sparkCount; i += 1) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 18
      sparkPositions[i * 3 + 1] = (Math.random() - 0.5) * 10 + 0.5
      sparkPositions[i * 3 + 2] = -Math.random() * sectionSpacing * (sectionList.length - 1) - 2
    }
    sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3))
    const sparkMaterial = trackMaterial(
      new THREE.PointsMaterial({
        color: 0x9ae6ff,
        size: 0.07,
        opacity: 0.65,
        transparent: true,
      })
    )
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial)
    scene.add(sparks)

    let frameId = 0
    let scrollCooldown = false
    const pointer = { x: 0, y: 0 }
    const tempVec = new THREE.Vector3()
    const tempScale = new THREE.Vector3()

    const onResize = () => {
      if (!stageRef.current) {
        return
      }
      const { clientWidth, clientHeight } = stageRef.current
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }

    const onWheel = (event) => {
      if (scrollCooldown) {
        return
      }
      scrollCooldown = true
      const direction = event.deltaY > 0 ? 1 : -1
      targetIndexRef.current = clamp(
        targetIndexRef.current + direction,
        0,
        sectionList.length - 1
      )
      setActiveIndex(targetIndexRef.current)
      window.setTimeout(() => {
        scrollCooldown = false
      }, 420)
    }

    const onPointerMove = (event) => {
      if (!stageRef.current) {
        return
      }
      const bounds = stageRef.current.getBoundingClientRect()
      const x = (event.clientX - bounds.left) / bounds.width
      const y = (event.clientY - bounds.top) / bounds.height
      pointer.x = clamp(x * 2 - 1, -1, 1)
      pointer.y = clamp(-(y * 2 - 1), -1, 1)
    }

    const clock = new THREE.Clock()
    const animate = () => {
      const delta = clock.getDelta()
      const targetBase = sectionBases[targetIndexRef.current] ?? new THREE.Vector3()
      camera.position.x += (targetBase.x * 0.25 - camera.position.x) * 0.08
      camera.position.y += (targetBase.y * 0.12 + 0.4 - camera.position.y) * 0.08
      camera.position.z += (targetBase.z + 7 - camera.position.z) * 0.08
      camera.lookAt(targetBase.x, targetBase.y, targetBase.z)

      if (!prefersReducedMotion) {
        ring.rotation.x += delta * 0.4
        ring.rotation.y += delta * 0.5
        orbitGroup.rotation.y += delta * 0.25
        orbitGroup.rotation.z += delta * 0.08
        floatGroup.rotation.y = pointer.x * 0.2 + Math.sin(clock.elapsedTime * 0.12) * 0.04
        floatGroup.rotation.x = pointer.y * 0.12
      }

      const activeSectionId = sectionList[targetIndexRef.current]?.id
      const eligibleIndices = imageSlides
        .map((slide, index) => (slide.sections.includes(activeSectionId) ? index : -1))
        .filter((index) => index !== -1)
      const activeImage = eligibleIndices.length ? eligibleIndices[0] : 0

      imageMeshes.forEach((mesh, index) => {
        const base = imageBases[index]
        if (!base) {
          return
        }
        const slot = eligibleIndices.indexOf(index)
        const isActive = slot !== -1
        const depthOffset = isActive ? 0.8 - slot * 0.18 : -0.8
        const yOffset = isActive ? 0.1 - slot * 0.1 : -0.2
        const xOffset = 0
        const targetZ = base.z + depthOffset
        mesh.position.lerp(tempVec.set(base.x + xOffset, base.y + yOffset, targetZ), 0.08)
        const baseScale = imageScales[index] ?? { x: 3.6, y: 2.2 }
        const scaleBoost = isActive ? 1 - slot * 0.06 : 0.7
        mesh.scale.lerp(
          tempScale.set(baseScale.x * scaleBoost, baseScale.y * scaleBoost, 1),
          0.08
        )
        mesh.material.opacity = isActive ? 0.98 - slot * 0.15 : 0

        const frame = imageFrames[index]
        if (frame) {
          frame.position.x = mesh.position.x
          frame.position.y = mesh.position.y
          frame.position.z = mesh.position.z - 0.06
          frame.rotation.copy(mesh.rotation)
          frame.scale.copy(mesh.scale).multiplyScalar(1.08)
          frame.material.opacity = isActive ? 0.65 - slot * 0.12 : 0
        }
      })

      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }

    onResize()
    animate()
    window.addEventListener('resize', onResize)
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('pointermove', onPointerMove)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('pointermove', onPointerMove)
      window.cancelAnimationFrame(frameId)
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
      textures.forEach((texture) => texture.dispose())
      if (Array.isArray(grid.material)) {
        grid.material.forEach((material) => material.dispose())
      } else if (grid.material) {
        grid.material.dispose()
      }
      if (glowTexture) {
        glowTexture.dispose()
      }
      renderer.dispose()
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement)
      }
    }
  }, [sectionList])

  const activeSection = sectionList[activeIndex]

  return (
    <div className="three-root">
      <header className="three-ui">
        <div className="brand">
          <span className="brand-mark" />
          <div>
            <p className="brand-title">Amjad Sharqawi</p>
            <p className="brand-subtitle">interactive portfolio</p>
          </div>
        </div>
        <nav className="three-nav">
          {sectionList.map((section, index) => (
            <button
              key={section.id}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              onClick={() => goToIndex(index)}
            >
              {section.navLabel ?? section.title}
            </button>
          ))}
        </nav>
        <div className="three-cta">
          <a className="ghost" href={`mailto:${CONTACT_EMAIL}`}>
            Email
          </a>
          <a className="primary" href={`tel:${CONTACT_PHONE_LINK}`}>
            Call
          </a>
        </div>
      </header>
      <div className="three-stage" ref={stageRef} />
      <main className="three-overlay">
        {activeSection && (
          <article className="three-card">
            <div className="three-card-top">
              <div className="three-card-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="three-card-kicker">{activeSection.navLabel}</span>
            </div>
            <h1 className="three-card-title">{activeSection.title}</h1>
            {activeSection.subtitle && (
              <p className="three-card-subtitle">{activeSection.subtitle}</p>
            )}
            <ul className="three-card-list">
              {activeSection.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        )}
      </main>
      <div className="three-hint">Scroll or use the nav to explore</div>
    </div>
  )
}

export default App
