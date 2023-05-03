import './MainPage.scss';
import { Header } from '../../components/Header';
import { HeroSection } from '../../components/HeroSection';
import { Slider } from '../../components/Slider';
import { ContactSection } from '../../components/ContactSection';
import { BannerSlider } from '../../components/BannerSlider';
import { FindMoreSection } from '../../components/FindMoreSection';
import { SubscribeSection } from '../../components/SubscribeSection';
import { Footer } from '../../components/Footer';
import { Modal } from '../../components/Modal';
import { useState } from 'react';
import { imagesFromApi } from '../../api/modalImages.js';

export const MainPage = () => {
  const [modalImages, setModalImages] = useState(imagesFromApi);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className='main'>
      <Header />
      <HeroSection />
      <Slider />
      <ContactSection modalImages={imagesFromApi} setModalImages={setModalImages} setIsModalOpen={setIsModalOpen}/>
      <BannerSlider />
      <FindMoreSection />
      <SubscribeSection />
      <Footer />
      {isModalOpen && (
        <Modal modalImages={modalImages} setIsModalOpen={setIsModalOpen}/>
      )}
    </main>
  )
};