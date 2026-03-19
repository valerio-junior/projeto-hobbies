import { useState } from 'react'
import {
  Container,
  Sidebar,
  SidebarHeader,
  Logo,
  Nav,
  NavItem,
  ToggleButton,
  MainContent,
  PageTitle,
  PageDescription,
  VideoGrid,
  VideoCard,
  VideoTitle,
  HomeSection,
  HomeHero,
  HomeHeroTitle,
  HomeHeroSubtitle,
  HobbyCards,
  HobbyCard,
  HomeHeroContent,
  HomeHeroText,
  AvatarImage
} from './style'

// Importação dos vídeos
import magicaAntonio from '../../assets/videos/magica-antonio.mp4'
import magicaCartaMeio from '../../assets/videos/magica-carta-meio-trocada.mp4'
import magicaCartaReis from '../../assets/videos/magica-carta-reis.mp4'
import magicaEnvelope from '../../assets/videos/magica-envelope.mp4'

import academiaHack from '../../assets/videos/academia-hack.mp4'
import academiaLegPress from '../../assets/videos/academia-leg-press.mp4'
import academiaPuxadaAlta from '../../assets/videos/academia-puxada-alta.mp4'
import academiaRemada from '../../assets/videos/academia-remada.mp4'
import academiaRoscaInvertida from '../../assets/videos/academia-rosca-invertida.mp4'
import academiaSumo from '../../assets/videos/academia-sumo.mp4'

import goleiroDefFalta from '../../assets/videos/goleiro-def-falta.mp4'
import goleiroTreinamento from '../../assets/videos/goleiro-treinamento.mp4'

import malabares3Claves from '../../assets/videos/malabares-3-claves.mp4'
import malabares4Claves from '../../assets/videos/malabares-4-claves.mp4'

// Importação da imagem de avatar
import avatarImage from '../../assets/image/avatar.jpg'

// Dados dos vídeos
const videosMagica = [
  { src: magicaAntonio, title: 'Mágica inspiração Antonio' },
  { src: magicaCartaMeio, title: 'Carta Trocada no meio do baralho' },
  { src: magicaCartaReis, title: 'Mágica carta trocada nos reis' },
  { src: magicaEnvelope, title: 'Mágica do Envelope' }
]

const videosAcademia = [
  { src: academiaHack, title: 'Agachamento Hack' },
  { src: academiaLegPress, title: 'Leg Press' },
  { src: academiaPuxadaAlta, title: 'Puxada Alta' },
  { src: academiaRemada, title: 'Remada baixa' },
  { src: academiaRoscaInvertida, title: 'Rosca Invertida' },
  { src: academiaSumo, title: 'Sumo' }
]

const videosFutebol = [
  { src: goleiroDefFalta, title: 'Defesa de Falta' },
  { src: goleiroTreinamento, title: 'Treinamento especifico' }
]

const youtubeVideosFutebol = [
  { id: 'sqCKqAkLCrw', title: 'Campeonato jogos abertos' },
  { id: 'lZ2JGS_Uy00', title: 'Campeonato terceira divisão paranaense' },
  { id: '3Uhy3F5p9Eg', title: 'Entrevista terceira divisão paranaense' }
]

const videosMalabares = [
  { src: malabares3Claves, title: 'Malabares com 3 Claves' },
  { src: malabares4Claves, title: 'Malabares com 4 Claves' }
]

// Ícones SVG
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
)

const IconMagic = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v4M10 8l4 0M12 8l-2 4 2 2 2-2-2-4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5h1M15 19h1" />
  </svg>
)

const IconDumbbell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h2v12H4zM18 6h2v12h-2zM6 10h12v4H6z" />
  </svg>
)

const IconSoccer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7l3 2.5v3L12 15l-3-2.5v-3L12 7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v5M12 17v5M2.5 9.5l4.5 3M17 12.5l4.5 3M2.5 14.5l4.5-2M17 9.5l4.5-2" />
  </svg>
)

const IconJuggle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="8" cy="6" r="3" strokeWidth={2} />
    <circle cx="16" cy="6" r="3" strokeWidth={2} />
    <circle cx="12" cy="14" r="3" strokeWidth={2} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v-3" />
  </svg>
)

const IconArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

function Home() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: <IconHome /> },
    { id: 'magicas', label: 'Mágicas', icon: <IconMagic /> },
    { id: 'treinos', label: 'Treinos', icon: <IconDumbbell /> },
    { id: 'futebol', label: 'Futebol', icon: <IconSoccer /> },
    { id: 'malabares', label: 'Malabares', icon: <IconJuggle /> }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <HomeSection>
            <HomeHero>
              <HomeHeroContent>
                <HomeHeroText>
                  <HomeHeroTitle>
                    Olá, eu sou <span>Valerio</span>
                  </HomeHeroTitle>
                  <HomeHeroSubtitle>
                    Decidi criar este projeto para mostrar um pouco mais de quem eu sou além do código. 
                    Aqui você vai encontrar algumas das minhas paixões e hobbies que me acompanham há anos. 
                    Já fui jogador de futebol, onde atuei como goleiro e vivi momentos incríveis em campo. 
                    Também me aventurei no mundo dos malabares, desafiando a coordenação e a paciência. 
                    E nas horas vagas, gosto de surpreender as pessoas com algumas mágicas com cartas.
                  </HomeHeroSubtitle>
                </HomeHeroText>
                <AvatarImage src={avatarImage} alt="Valerio" />
              </HomeHeroContent>
            </HomeHero>

            <HobbyCards>
              <HobbyCard onClick={() => setActiveSection('magicas')}>
                <IconMagic />
                <h3>Mágicas</h3>
                <p>Truques e ilusões</p>
              </HobbyCard>
              <HobbyCard onClick={() => setActiveSection('treinos')}>
                <IconDumbbell />
                <h3>Treinos</h3>
                <p>Academia e musculação</p>
              </HobbyCard>
              <HobbyCard onClick={() => setActiveSection('futebol')}>
                <IconSoccer />
                <h3>Futebol</h3>
                <p>Goleiro dedicado</p>
              </HobbyCard>
              <HobbyCard onClick={() => setActiveSection('malabares')}>
                <IconJuggle />
                <h3>Malabares</h3>
                <p>Claves e coordenação</p>
              </HobbyCard>
            </HobbyCards>
          </HomeSection>
        )

      case 'magicas':
        return (
          <>
            <PageTitle>Mágicas</PageTitle>
            <PageDescription>
              Desde criança sempre fui fascinado pelo mundo da mágica. A capacidade de criar ilusões 
              e surpreender as pessoas é algo que me encanta até hoje. Aqui estão alguns dos meus 
              truques favoritos com cartas, que pratico nas horas vagas e sempre fazem sucesso 
              entre amigos e família. Cada truque tem sua história e seu segredo!
            </PageDescription>
            <VideoGrid $columns={2}>
              {videosMagica.map((video, index) => (
                <VideoCard key={`magica-${video.title}-${index}`}>
                  <video controls key={`magica-video-${video.title}`}>
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  <VideoTitle>{video.title}</VideoTitle>
                </VideoCard>
              ))}
            </VideoGrid>
          </>
        )

      case 'treinos':
        return (
          <>
            <PageTitle>Treinos de Academia</PageTitle>
            <PageDescription>
              A musculação faz parte da minha rotina há alguns anos. Acredito que cuidar do corpo 
              é fundamental para manter a mente saudável também. Esses são alguns registros dos 
              meus treinos na academia, mostrando diferentes exercícios e técnicas que pratico 
              regularmente. Disciplina e constância são as chaves para bons resultados!
            </PageDescription>
            <VideoGrid $columns={3}>
              {videosAcademia.map((video, index) => (
                <VideoCard key={`academia-${video.title}-${index}`}>
                  <video controls key={`academia-video-${video.title}`}>
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  <VideoTitle>{video.title}</VideoTitle>
                </VideoCard>
              ))}
            </VideoGrid>
          </>
        )

      case 'futebol':
        return (
          <>
            <PageTitle>Futebol</PageTitle>
            <PageDescription>
              Durante uma fase importante da minha vida, me dediquei intensamente para ser jogador 
              de futebol profissional. Atuava como goleiro e treinava diariamente para aprimorar 
              minhas habilidades. Foram anos de muito suor, dedicação e aprendizado. Apesar de ter 
              seguido outro caminho profissional, o futebol sempre terá um lugar especial no meu coração. 
              Aqui estão alguns registros dessa época inesquecível.
            </PageDescription>
            <VideoGrid $columns={3}>
              {videosFutebol.map((video, index) => (
                <VideoCard key={`futebol-${video.title}-${index}`}>
                  <video controls key={`futebol-video-${video.title}`}>
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  <VideoTitle>{video.title}</VideoTitle>
                </VideoCard>
              ))}
              {youtubeVideosFutebol.map((video) => (
                <VideoCard key={`youtube-${video.id}`}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <VideoTitle>{video.title}</VideoTitle>
                </VideoCard>
              ))}
            </VideoGrid>
          </>
        )

      case 'malabares':
        return (
          <>
            <PageTitle>Malabares</PageTitle>
            <PageDescription>
              Malabarismo é uma arte que exige muita coordenação, paciência e prática constante. 
              Comecei com 3 claves e fui evoluindo aos poucos. É uma atividade que além de divertida, 
              ajuda muito na concentração e coordenação motora. Aqui estão alguns dos meus registros 
              praticando com diferentes quantidades de claves.
            </PageDescription>
            <VideoGrid $columns={2}>
              {videosMalabares.map((video, index) => (
                <VideoCard key={`malabares-${video.title}-${index}`}>
                  <video controls key={`malabares-video-${video.title}`}>
                    <source src={video.src} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  <VideoTitle>{video.title}</VideoTitle>
                </VideoCard>
              ))}
            </VideoGrid>
          </>
        )

      default:
        return null
    }
  }

  return (
    <Container>
      <Sidebar $isOpen={sidebarOpen}>
        <SidebarHeader>
          <Logo>Meus Hobbies</Logo>
        </SidebarHeader>
        <Nav>
          {menuItems.map(item => (
            <NavItem
              key={item.id}
              $active={activeSection === item.id}
              onClick={() => setActiveSection(item.id)}
            >
              {item.icon}
              {item.label}
            </NavItem>
          ))}
        </Nav>
      </Sidebar>

      <ToggleButton 
        $isOpen={sidebarOpen} 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={sidebarOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <IconArrow />
      </ToggleButton>

      <MainContent $sidebarOpen={sidebarOpen}>
        {renderContent()}
      </MainContent>
    </Container>
  )
}

export default Home
