import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import PortalModal from './components/PortalModal';
import HomeSlide from './components/slides/HomeSlide';
import Ros2Slide from './components/slides/Ros2Slide';
import CareSlide from './components/slides/CareSlide';
import ConsultSlide from './components/slides/ConsultSlide';
import ConnectSlide from './components/slides/ConnectSlide';
import CoursesSlide from './components/slides/CoursesSlide';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useModal } from './hooks/useModal';
import './App.css';

function App() {
  const scrollContainerRef = useRef(null);
  const headerRef = useRef(null);
  const { activeSlide, handleScroll } = useScrollSpy(scrollContainerRef);
  const { isOpen: isModalOpen, closeModal } = useModal();

  // Update header style on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateHeader = () => {
      if (headerRef.current) {
        if (container.scrollTop > 50) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('scroll', updateHeader);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('scroll', updateHeader);
    };
  }, [handleScroll]);

  // Scroll to specific slide
  const scrollToSlide = (targetId) => {
    const targetSlide = document.getElementById(targetId);
    if (targetSlide && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: targetSlide.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: footer.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Make slides visible when active
  const isSlideVisible = (slideId) => activeSlide === slideId;

  return (
    <div className="app">
      <Header
        activeSlide={activeSlide}
        onNavClick={scrollToSlide}
        onContactClick={scrollToFooter}
        headerRef={headerRef}
      />
      <SideNav activeSlide={activeSlide} onDotClick={scrollToSlide} />

      <div className="scroll-container" ref={scrollContainerRef}>
        <HomeSlide
          isVisible={isSlideVisible('slide-home')}
          onExploreClick={() => scrollToSlide('slide-care')}
        />
        <Ros2Slide isVisible={isSlideVisible('slide-ros2')} />
        <CareSlide
          isVisible={isSlideVisible('slide-care')}
          onViewCourses={() => scrollToSlide('slide-courses')}
        />
        <ConsultSlide isVisible={isSlideVisible('slide-consult')} />
        <ConnectSlide isVisible={isSlideVisible('slide-connect')} />
        <CoursesSlide isVisible={isSlideVisible('slide-courses')} />
        <Footer />
      </div>

      <PortalModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;