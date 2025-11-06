import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import './Contato.scss'

const Contato: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contato | Escola Ilda Vieira Vilela</title>
        <meta name="description" content="Entre em contato com a Escola Ilda Vieira Vilela" />
      </Helmet>

      <section className="page-hero page-hero--contact">
        <div className="container">
          <motion.div 
            className="page-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="page-hero__title">Entre em Contato</h1>
            <p className="page-hero__subtitle">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a dar o próximo passo
            </p>
          </motion.div>
        </div>
      </section>

      <div className="contact-page">
        <div className="container">
          <div className="contact-page__content">
            
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-info-section__title">Informações de Contato</h2>
              
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">📍</div>
                  <h3 className="contact-info-card__title">Endereço</h3>
                  <p className="contact-info-card__content">
                    Estrada Canal de Cocaia, 1699<br />
                    Parque Residencial Cocaia<br />
                    São Paulo - SP<br />
                    CEP 04849-032
                  </p>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">📞</div>
                  <h3 className="contact-info-card__title">Telefone</h3>
                  <p className="contact-info-card__content">
                    <a href="tel:+551159313172" className="contact-link">
                      (11) 5931-3172
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">🕐</div>
                  <h3 className="contact-info-card__title">Horário de Funcionamento</h3>
                  <p className="contact-info-card__content">
                    <strong>Segunda a Sexta:</strong><br />
                    6:45 às 23:00<br /><br />
                    
                    <strong>Secretaria:</strong><br />
                    8:00 às 17:00
                  </p>
                </div>
                
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">📱</div>
                  <h3 className="contact-info-card__title">Redes Sociais</h3>
                  <p className="contact-info-card__content">
                    <a 
                      href="https://instagram.com/ildavieiravilela" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @ildavieiravilela
                    </a><br />
                    <a 
                      href="https://instagram.com/cria.news" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @cria.news
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="schedule-info-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="schedule-info__title">Horários de Aulas</h3>
            <div className="schedule-grid">
              <div className="schedule-item">
                <h4 className="schedule-item__period">Manhã</h4>
                <p className="schedule-item__time">7:00 às 12:20</p>
                <p className="schedule-item__gate">Portão: 6:50 às 7:00</p>
              </div>
              <div className="schedule-item">
                <h4 className="schedule-item__period">Tarde</h4>
                <p className="schedule-item__time">13:00 às 18:20</p>
                <p className="schedule-item__gate">Portão: 12:50 às 13:00</p>
              </div>
              <div className="schedule-item">
                <h4 className="schedule-item__period">Noite</h4>
                <p className="schedule-item__time">19:00 às 22:50</p>
                <p className="schedule-item__gate">Portão: 18:50 às 19:00</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contato