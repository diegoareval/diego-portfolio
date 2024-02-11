import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few companies I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={'https://hospy.co/8e9660d36c073d52.png'}
              isBlog={true}
              title="Hospy"
              description="Herramienta que permite disminuir costos, automatizar procesos, ahorrar tiempo y brindar un mejor servicio a sus huéspedes.
              "
              ghLink=""
              demoLink="https://hospy.co/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                'https://media.licdn.com/dms/image/C560BAQGT_s0nY8BjUw/company-logo_200_200/0/1638804458082?e=2147483647&v=beta&t=8072BgMUDqe0wN87-PsRKa3-EC1zftkj01iJKYWtNEs'
              }
              isBlog={true}
              title="Carbodylab"
              description="Carbodylab is one of the best US company related with Auto repair, in this case i help to create new features and improve existing features."
              ghLink=""
              demoLink="https://www.carbodylab.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                'https://inmobify.info/wp-content/uploads/2022/08/Logo-inmobify-08-1024x390.png'
              }
              isBlog={true}
              title="Inmobify"
              description="It's a realstate marketplace that provide options to list houses, contact potential customers and also automatize real state common tasks, etc"
              ghLink=""
              demoLink="inmobify.net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg"}
              isBlog={true}
              title="Ignite Tecnologies"
              description="It is a consulting company i contributed them to create products to their customer and provide solutions to common problems"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={
                'https://binoxmsp.com/wp-content/uploads/2020/12/Binox-Logo-white.png'
              }
              isBlog={true}
              title="Binox Software"
              description="Binox improves sales process by sourcing 95% Human verified leads that fit with your target market. While maintaining your PSA and CRM databases in sync."
              ghLink=""
              demoLink="https://binoxmsp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://mycoco.us/static/media/metodInput.1a2f1880.png"}
              isBlog={true}
              title="Cocomio Languages"
              description="It is a platform that helps people to learn a new language based on input, output, reviews and then study using spaced repetition methodology"
              ghLink=""
              demoLink="https://mycoco.us/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
