import * as C from './style'
import logo1 from '../../assets/imgs/logo1.png'
import arrow from '../../assets/imgs/arrow-right.png'
import img1 from '../../assets/imgs/img1.jpg'
import img2 from '../../assets/imgs/img2.jpg'
import img3 from '../../assets/imgs/img3.jpg'
import img4 from '../../assets/imgs/img4.jpg'
import prof1 from '../../assets/imgs/prof1.jpg'
import prof2 from '../../assets/imgs/prof2.jpg'
import prof3 from '../../assets/imgs/prof3.jpg'
import MichaelScott from '../../assets/imgs/MichaelScott.png'
import logo2 from '../../assets/imgs/logo2.png'
import instagram from '../../assets/imgs/Instagram.png'
import facebook from '../../assets/imgs/Facebook.png'
import linkedin from '../../assets/imgs/LinkedIn.png'
import youtube from '../../assets/imgs/YouTube.png'
import { Modal } from '../Modal'
import { useState } from 'react'

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const onSubmit = () => {
        console.alert("")
    }

    const toggleMenu = () => {
        console.log(menuOpen);
        setMenuOpen(!menuOpen);
    };

    return (
        <C.Container>
            <C.Menu>
                <div className='menuHamburger'>
                    <img src={logo1} alt="" />
                    <C.HamburgerIcon open={menuOpen} onClick={toggleMenu}>
                        <div />
                        <div />
                        <div />
                    </C.HamburgerIcon>
                </div>
                <p>Cursos</p>
                <p>Eventos</p>
                <p>Quem somos</p>
                <p>+55 (81) 3030-1293</p>
                <button>Login</button>
                <div>
                    <C.MenuHidden open={menuOpen}>
                        <p>Cursos</p>
                        <p>Eventos</p>
                        <p>Quem somos</p>
                        <p>+55 (81) 3030-1293</p>
                        <button>Login</button>
                    </C.MenuHidden>
                </div>
            </C.Menu>

            {/* First Section */}
            <C.Header >
                A MESHI é um novo começo
                <p>para a sua careira</p>
            </C.Header>
            <C.Subtitle>
                Somos uma escola online com tudo que você precisa
                para conquistar <br /> profissões em alta no mercado
                de trabalho
            </C.Subtitle>
            <C.ContentContainer gap="24px">
                <C.BulletButton>Design</C.BulletButton>
                <C.BulletButton>Programação & Data</C.BulletButton>
                <C.BulletButton>Audiovisual</C.BulletButton>
                <C.BulletButton>Games</C.BulletButton>
                <C.BulletButton>Marketing</C.BulletButton>
                <C.BulletButton>Software</C.BulletButton>
                <C.BulletButton>Nossos cursos <img src={arrow} alt="" /></C.BulletButton>
            </C.ContentContainer>

            {/* Second section */}
            <C.Title >
                Comece do Zero ou se especialize
            </C.Title>
            <C.Subtitle>
                Nosso objetivo é apontar e facilitar o caminho até o
                emprego dos seus sonhos. Ensinamos habilidades
                práticas que vão ajudar a iniciar uma nova <br /> carreira ou
                conquistar a sua promoção.
            </C.Subtitle>
            <C.ContentContainer gap="20px">
                <C.CourseContainer color="#DC6E8D" width="561px" align="center" textWidth="432px">
                    <h1>Cursos</h1>
                    <p>Aprofunde seus conhecimentos em
                        uma área específica ou aprenda a
                        usar determinadas ferramentas em
                        nível avançado. Adequado para iniciantes e
                        futuros especialistas.
                    </p>
                    <button>Escolha entre 50 cursos</button>
                </C.CourseContainer>
                <C.CourseContainer color="#8381DF" width="561px" align="center" textWidth="432px">
                    <h1>Profissões</h1>
                    <p>Prepare-se para começar um trabalho totalmente novo.
                        Adequado para quem quer mudar de vida, mas ainda não
                        tem habilidades na área desejada.
                    </p>
                    <button>Escolha entre 20 profissões</button>
                </C.CourseContainer>
                <C.CourseContainer
                    bg="linear-gradient(to right, #E36C86, #B875AE, #9D7BC7, #7E82E3)"
                    width="100%"
                    align="start"
                    textAlign="start"
                    pdLeft="40px"
                    textWidth="800px"
                >
                    <p className='beforeTitle'>Graduação digital</p>
                    <h1>Venha conhecer nossa graduação</h1>
                    <p>
                        Antecipe sua matrícula para a próxima turma e ganhe um
                        Combo de cursos em Inteligência Artificial.
                    </p>
                    <button>Graduação digital</button>
                </C.CourseContainer>
            </C.ContentContainer>

            {/* Third section */}
            <C.Title >
                Cursos mais populares
            </C.Title>
            <C.Subtitle>
                Confira os preferidos da nossa plataforma
            </C.Subtitle>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <C.ContentContainer gap="12px">
                {/* First card */}
                <C.CourseCard >
                    <img src={img1} alt="" />
                    <div className="horas">48 horas</div>
                    <div className="titleStart">
                        <h1>TI do zero ao Pro</h1>
                        <button onClick={openModal}>Começar</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.  Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. </p>
                </C.CourseCard>
                {/* Second card */}
                <C.CourseCard>
                    <img src={img2} alt="" />
                    <div className="horas">48 horas</div>
                    <div className="titleStart">
                        <h1>Comunicação</h1>
                        <button onClick={openModal}>Começar</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.  Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. </p>
                </C.CourseCard>
                {/* Third card */}
                <C.CourseCard>
                    <img src={img3} alt="" />
                    <div className="horas">48 horas</div>
                    <div className="titleStart">
                        <h1>UX/UI Design</h1>
                        <button onClick={openModal}>Começar</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.  Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. </p>
                </C.CourseCard>
                {/* Fourth card */}
                <C.CourseCard>
                    <img src={img4} alt="" />
                    <div className="horas">48 horas</div>
                    <div className="titleStart">
                        <h1>Design Gráfico</h1>
                        <button onClick={openModal}>Começar</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.  Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. </p>
                </C.CourseCard>
            </C.ContentContainer>

            {/* Fourth Section */}
            <C.Title textAlign='center'>
                Aprenda com os melhores especialistas do mercado
            </C.Title>
            <C.Subtitle textAlign='center'>
                Convidamos profissionais reconhecidos e de empresas
                renomadas para participar da criação de nossos cursos.
                Ensinamos conforme os desejos e as necessidades do mercado.
            </C.Subtitle>
            <C.ContentContainer gap="60px">
                <C.TeacherDiv>
                    <img src={prof1} alt="" />
                    <h1>André Marques</h1>
                    <p>Engenheiro de dados Sênior
                        no <span>Mercado Livre</span> </p>
                </C.TeacherDiv>
                <C.TeacherDiv>
                    <img src={prof2} alt="" />
                    <h1>Alberto Joaquim</h1>
                    <p>Diretor de Arte e conteúdo
                        na <span>STAR+</span> e <span>Disney+</span></p>
                </C.TeacherDiv>
                <C.TeacherDiv>
                    <img src={MichaelScott} alt="" />
                    <h1>Michael Scott</h1>
                    <p>Gerente regional da <span>Dunder Mifflin </span></p>
                </C.TeacherDiv>
                <C.TeacherDiv>
                    <img src={prof3} alt="" />
                    <h1>Bruno Spaniol</h1>
                    <p>Engenheiro de Software na <span>Uber</span></p>
                </C.TeacherDiv>


            </C.ContentContainer>
            <C.ContentContainer gap="60px">
                <C.TeacherDiv>
                    <img src={prof2} alt="" />
                    <h1>Alberto Joaquim</h1>
                    <p>Diretor de Arte e conteúdo
                        na <span>STAR+</span> e <span>Disney+</span></p>
                </C.TeacherDiv>
                <C.TeacherDiv>
                    <img src={prof1} alt="" />
                    <h1>André Marques</h1>
                    <p>Engenheiro de dados Sênior
                        no <span>Mercado Livre</span> </p>
                </C.TeacherDiv>
                <C.TeacherDiv>
                    <img src={prof3} alt="" />
                    <h1>Bruno Spaniol</h1>
                    <p>Engenheiro de Software na <span>Uber</span></p>
                </C.TeacherDiv>
                <C.TeacherDiv>
                    <img src={MichaelScott} alt="" />
                    <h1>Michael Scott</h1>
                    <p>Gerente regional da <span>Dunder Mifflin </span></p>
                </C.TeacherDiv>


            </C.ContentContainer>

            {/* Fifth section */}
            <C.Banner>
                <div className='info'>
                    <p>Graduação digital</p>
                    <h1>Teste a <br /> graduação <br /> por 15 dias <br /> grátis</h1>
                </div>
                <div className='access'>
                    <p>Conheça nosso método, curta a plataforma de qualquer
                        dispositivo e experimente uma carreira da nossa geração.</p>
                    <button>Experimente 100% grátis</button>
                </div>
            </C.Banner>
            {/* Sixth section */}
            <C.Title>
                O que dizem nossos alunos
            </C.Title>
            <C.ContentContainer gap="12px">
                <C.StudentCard>
                    <div className='student'>
                        <img src={prof1} alt="" />
                        <div className='studentInfo'>
                            <h1>Marcos Vinícius</h1>
                            <p>Aluno do curso de "Design Gráfico"</p>
                        </div>
                    </div>
                    <p className='testimonial'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </C.StudentCard>
                <C.StudentCard>
                    <div className='student'>
                        <img src={prof2} alt="" />
                        <div className='studentInfo'>
                            <h1>Marcos Vinícius</h1>
                            <p>Aluno do curso de "Design Gráfico"</p>
                        </div>
                    </div>
                    <p className='testimonial'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </C.StudentCard>
                <C.StudentCard>
                    <div className='student'>
                        <img src={prof3} alt="" />
                        <div className='studentInfo'>
                            <h1>Marcos Vinícius</h1>
                            <p>Aluno do curso de "Design Gráfico"</p>
                        </div>
                    </div>
                    <p className='testimonial'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </C.StudentCard>
                <C.StudentCard>
                    <div className='student'>
                        <img src={MichaelScott} alt="" />
                        <div className='studentInfo'>
                            <h1>Marcos Vinícius</h1>
                            <p>Aluno do curso de "Design Gráfico"</p>
                        </div>
                    </div>
                    <p className='testimonial'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum."
                    </p>
                </C.StudentCard>
            </C.ContentContainer>

            {/* Seventh section */}
            <C.SendHelpBanner>
                <h1>Não sabe qual escolher? Nós te ajudamos</h1>
                <p>Nossos consultores estão preparados para ajudar na
                    escolha do curso mais adequado para você com base
                    nos seus interesses, nível de conhecimento e objetivos
                    de carreira.
                </p>
                <div className='form'>
                    <input type="text" placeholder='Nome' />
                    <input type="email" placeholder='E-mail' />
                    <input type="cellphone" placeholder='+55' />
                    <button>Enviar</button>
                </div>
            </C.SendHelpBanner>

            {/* Eigth section */}
            <C.Footer>
                <div className='content'>
                    {/* Logo + texto */}
                    <div className='logo'>
                        <img src={logo2} alt="" />
                        <p>Política de Privacidade
                            e Contrato de Prestação
                            de Serviço
                        </p>
                    </div>

                    {/* Áreas */}
                    <div className='areas'>
                        <h3>
                            Áreas
                        </h3>
                        <ul>
                            <li>Design</li>
                            <li>Programação & Data</li>
                            <li>Audiovisual</li>
                            <li>Games</li>
                            <li>Software</li>
                            <li>Marketing</li>
                        </ul>
                    </div>

                    {/* Projetos + Para empresas  */}
                    <div>
                        <div>
                            <h3>
                                Projetos
                            </h3>
                            <ul>
                                <li>Blog</li>
                                <li>Eventos</li>
                            </ul>
                        </div>
                        <div className='addMarginTop'>
                            <h3>
                                Para empresas
                            </h3>
                            <ul>
                                <li>Educação corporativa</li>
                                <li>Atração de talentos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sobre */}
                    <div>
                        <h3>
                            Sobre
                        </h3>
                        <ul>
                            <li>A Mesha</li>
                            <li>Centro de carreiras</li>
                            <li>Trabalhe conosco</li>
                            <li>Nossos estudantes</li>
                            <li>Mesha na mídia</li>
                        </ul>
                    </div>
                </div>
                <div className="divisor"></div>

                <div className='contact'>
                    <div className='info'>
                        <h1>Whatsapp</h1>
                        <p>+55 (11) 4200-2991</p>
                    </div>
                    <div className='info'>
                        <h1>Telefone</h1>
                        <p>+55 (11) 3030-3200</p>
                    </div>
                    <div className='info'>
                        <h1>E-mail</h1>
                        <p>suporte@meshionline.com.br</p>
                    </div>
                    <div className='social'>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
            </C.Footer>
        </C.Container>
    )
}