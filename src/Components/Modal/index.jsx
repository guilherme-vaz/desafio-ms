import * as C from './style'
import woman from '../../assets/imgs/illustration.png'
import prof1 from '../../assets/imgs/prof1.jpg'
import prof2 from '../../assets/imgs/prof2.jpg'
import close from '../../assets/imgs/Close.png'

export function Modal({ isOpen, onClose, onSubmit }) {
    return (
        <>
            {isOpen && (
                <C.ModalOverlay>
                    <C.ModalContent>
                        <C.CloseButton onClick={onClose}>
                            <img src={close} alt="" />
                        </C.CloseButton>
                        <C.Header>
                            <div className="info">
                                <div className='hours'>
                                    48 horas
                                </div>
                                <h1>UI/UX Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua.  Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div>
                                {/* <C.CloseButton onClick={onClose}>
                                    <img src={close} alt="" />
                                </C.CloseButton> */}
                                <img src={woman} alt="" />
                            </div>
                        </C.Header>
                        <C.Schedule>
                            <h1>Programação do curso</h1>
                            <div className='lists'>
                                <ul>
                                    <li>Introdução</li>
                                    <li>Figma: Ferramentas e Interfaceo</li>
                                    <li>Fundamentos do Design de Interface do Usuário</li>
                                    <li>Design Thinking e Pesquisa de Usuários</li>
                                    <li>Prototipagem</li>
                                </ul>
                                <ul>
                                    <li>Design Responsivo</li>
                                    <li>Comunicação com foco no usuário e documentação</li>
                                    <li>Bônus: Liderança e outras habilidades</li>
                                    <li>Portfólio e projeto final</li>
                                </ul>
                            </div>
                        </C.Schedule>
                        <C.GetStarted>
                            <C.Form>
                                <h1>Inscreva-se e comece já!</h1>
                                <form action={onSubmit}>
                                    <input type="text" placeholder='Nome completo' />
                                    <input type="email" placeholder='E-mail' />
                                    <input type="cellphone" placeholder='Telefone' />
                                </form>
                                <button>Iniciar</button>
                            </C.Form>
                            <C.ProfsContainer>
                                <h1>
                                    Professores
                                </h1>
                                <div className='profs'>
                                    <C.ProfsInfo>
                                        <img src={prof1} alt="" />
                                        <h1>Bruno Spaniol</h1>
                                        <p>Engenheiro de Software na <span>Uber</span></p>
                                    </C.ProfsInfo>
                                    <C.ProfsInfo>
                                        <img src={prof2} alt="" />
                                        <h1>Alberto Joaquim</h1>
                                        <p>Diretor de Arte e conteúdo
                                            na <span>STAR+</span> e <span>Disney+</span></p>
                                    </C.ProfsInfo>
                                </div>
                            </C.ProfsContainer>
                        </C.GetStarted>
                    </C.ModalContent>
                </C.ModalOverlay>
            )}
        </>
    );
}