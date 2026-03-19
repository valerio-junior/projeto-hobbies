import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Sidebar = styled.aside`
  width: ${props => props.$isOpen ? '260px' : '0px'};
  background: linear-gradient(180deg, #161b22 0%, #0d1117 100%);
  border-right: 1px solid #30363d;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  overflow: hidden;
  position: relative;
`;

export const SidebarHeader = styled.div`
  padding: 24px 20px;
  border-bottom: 1px solid #30363d;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #58a6ff;
  white-space: nowrap;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 16px 0;
  flex: 1;
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: ${props => props.$active ? 'rgba(88, 166, 255, 0.1)' : 'transparent'};
  border: none;
  border-left: 3px solid ${props => props.$active ? '#58a6ff' : 'transparent'};
  color: ${props => props.$active ? '#58a6ff' : '#c9d1d9'};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: rgba(88, 166, 255, 0.1);
    color: #58a6ff;
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  left: ${props => props.$isOpen ? '260px' : '0px'};
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 56px;
  background: #21262d;
  border: 1px solid #30363d;
  border-left: ${props => props.$isOpen ? '1px solid #30363d' : 'none'};
  border-radius: ${props => props.$isOpen ? '0 8px 8px 0' : '0 8px 8px 0'};
  color: #c9d1d9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.3s ease;
  z-index: 100;

  &:hover {
    background: #30363d;
    color: #58a6ff;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 40px;
  margin-left: ${props => props.$sidebarOpen ? '0' : '28px'};
  transition: margin-left 0.3s ease;
  overflow-y: auto;
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #f0f6fc;
  margin-bottom: 16px;
`;

export const PageDescription = styled.p`
  font-size: 1.1rem;
  color: #8b949e;
  line-height: 1.7;
  max-width: 800px;
  margin-bottom: 32px;
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.$columns || 2}, 1fr);
  gap: 24px;
  max-width: 1400px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled.div`
  background: #161b22;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #30363d;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    border-color: #58a6ff;
  }

  video, iframe {
    width: 100%;
    aspect-ratio: 16/9;
    display: block;
    background: #000;
  }
`;

export const VideoTitle = styled.p`
  padding: 12px 16px;
  font-size: 0.9rem;
  color: #c9d1d9;
  text-transform: capitalize;
`;

export const HomeSection = styled.section`
  max-width: 900px;
  overflow: hidden;
`;

export const HomeHero = styled.div`
  background: linear-gradient(135deg, rgba(88, 166, 255, 0.1) 0%, rgba(139, 148, 158, 0.05) 100%);
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 40px;
`;

export const HomeHeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HomeHeroText = styled.div`
  flex: 1;
`;

export const HomeHeroTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  color: #f0f6fc;
  margin-bottom: 12px;

  span {
    color: #58a6ff;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const HomeHeroSubtitle = styled.p`
  font-size: 0.95rem;
  color: #8b949e;
  line-height: 1.7;
`;

export const AvatarImage = styled.img`
  width: 220px;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  border: 3px solid #58a6ff;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const HobbyCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const HobbyCard = styled.div`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    border-color: #58a6ff;
    transform: translateY(-2px);
  }

  svg {
    width: 48px;
    height: 48px;
    color: #58a6ff;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.1rem;
    color: #f0f6fc;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.9rem;
    color: #8b949e;
  }
`;
